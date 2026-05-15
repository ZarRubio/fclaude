'use client'

import { useEffect, useRef, useState } from 'react'

const chips = [
  'Stock confirmado antes del pago',
  'Despacho a todo el Perú',
  'Atención para taller y flota',
]

const stats = [
  { value: 1200, suffix: '+', label: 'Clientes atendidos' },
  { value: 48, suffix: 'h', label: 'Entrega en Lima' },
  { value: 98, suffix: '%', label: 'Tasa de recompra' },
]

export default function StatsTrustPanel() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mx-auto mt-12 max-w-7xl">
      <div className="grid gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/15 backdrop-blur-sm lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
        <div className="grid content-center gap-2 rounded-xl bg-sahm-night/25 p-4">
          {chips.map(chip => (
            <span
              key={chip}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-wide text-white"
            >
              <CheckIcon />
              {chip}
            </span>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {stats.map(stat => (
            <article key={stat.label} className="rounded-xl bg-white px-5 py-6 text-center shadow-sm">
              <p className="font-heading text-4xl font-extrabold uppercase leading-none text-sahm-purple sm:text-5xl">
                <AnimatedNumber target={stat.value} active={active} />
                {stat.suffix}
              </p>
              <p className="mt-2 font-heading text-xs font-extrabold uppercase tracking-widest text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnimatedNumber({ target, active }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    const duration = 1100
    const start = performance.now()
    let frame = 0

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return value.toLocaleString('es-PE')
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 text-sahm-yellow" fill="currentColor">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.25 7.25a1 1 0 0 1-1.4 0L4 9.9a1 1 0 1 1 1.4-1.4l3.35 3.34L15.3 5.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  )
}
