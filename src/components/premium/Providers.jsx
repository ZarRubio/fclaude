'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { CartProvider } from '../../context/CartContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Providers({ children }) {
  const scope = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const lenis = new Lenis({
      duration: 1.08,
      lerp: 0.09,
      smoothWheel: true,
    })

    // Drive Lenis through GSAP's ticker so ScrollTrigger reads the same
    // scroll position that Lenis is rendering — prevents trigger desync.
    gsap.ticker.lagSmoothing(0)
    const tick = time => lenis.raf(time * 1000)
    gsap.ticker.add(tick)

    lenis.on('scroll', ScrollTrigger.update)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  useGSAP(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.utils.toArray('.gsap-reveal').forEach(element => {
      gsap.fromTo(element,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
          },
        },
      )
    })

    ScrollTrigger.refresh()
  }, { scope, dependencies: [pathname] })

  return (
    <CartProvider>
      <div ref={scope}>{children}</div>
    </CartProvider>
  )
}
