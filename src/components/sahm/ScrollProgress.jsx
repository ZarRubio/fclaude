import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frameId = 0
    let lastProgress = -1
    const doc = document.documentElement
    const body = document.body

    const getCandidates = () => {
      const list = [
        document.scrollingElement,
        doc,
        body,
      ].filter(Boolean)

      return Array.from(new Set(list))
    }

    const compute = () => {
      const doc = document.documentElement
      const body = document.body
      const candidates = getCandidates()

      const candidateTop = candidates.reduce((acc, el) => Math.max(acc, el.scrollTop || 0), 0)
      const windowTop = window.scrollY || window.pageYOffset || 0
      const scrollTop = Math.max(windowTop, candidateTop)

      const candidateMax = candidates.reduce(
        (acc, el) => Math.max(acc, (el.scrollHeight || 0) - (el.clientHeight || 0)),
        0,
      )

      const documentMax = Math.max(
        body.scrollHeight - window.innerHeight,
        doc.scrollHeight - window.innerHeight,
        body.offsetHeight - window.innerHeight,
        doc.offsetHeight - window.innerHeight,
      )

      const max = Math.max(0, candidateMax, documentMax)
      const next = max > 0 ? scrollTop / max : 0
      return Math.min(1, Math.max(0, next))
    }

    const update = () => {
      const next = compute()
      // Avoid re-rendering on tiny floating-point jitter
      if (Math.abs(next - lastProgress) > 0.001) {
        lastProgress = next
        setProgress(next)
      }
    }

    const tick = () => {
      update()
      frameId = window.requestAnimationFrame(tick)
    }

    update()
    const candidates = getCandidates()
    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('load', update)
    window.visualViewport?.addEventListener('resize', update)
    window.addEventListener('scroll', update, { passive: true })
    candidates.forEach(el => el.addEventListener('scroll', update, { passive: true }))
    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('load', update)
      window.visualViewport?.removeEventListener('resize', update)
      window.removeEventListener('scroll', update)
      candidates.forEach(el => el.removeEventListener('scroll', update))
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-full bg-black/15">
      <div
        className="h-full bg-[#14b8a6] shadow-[0_0_12px_rgba(20,184,166,0.8)]"
        style={{ width: `${progress * 100}%`, transition: 'width 80ms linear' }}
        role="progressbar"
        aria-valuenow={Math.round(progress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  )
}
