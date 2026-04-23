'use client'

import { useEffect } from 'react'
import type LenisType from 'lenis'

// Holds the live instance so other modules can call getLenis()
let lenisInstance: LenisType | null = null

export function getLenis() {
  return lenisInstance
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const cleanups: Array<() => void> = []

    // Dynamic imports: gsap + lenis are NOT in the initial JS bundle.
    // They are code-split into async chunks loaded after the page is interactive.
    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([{ default: Lenis }, { gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      })

      lenisInstance = lenis

      const tlUpdate = (time: number) => {
        lenis.raf(time * 1000)
      }
      gsap.ticker.add(tlUpdate)
      gsap.ticker.lagSmoothing(0)

      lenis.on('scroll', ScrollTrigger.update)

      const onLoad = () => ScrollTrigger.refresh()
      window.addEventListener('load', onLoad)

      cleanups.push(() => {
        gsap.ticker.remove(tlUpdate)
        lenis.off('scroll', ScrollTrigger.update)
        lenis.destroy()
        lenisInstance = null
        window.removeEventListener('load', onLoad)
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return <>{children}</>
}
