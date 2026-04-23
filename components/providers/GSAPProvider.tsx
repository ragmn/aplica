'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function GSAPProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when fonts / images load
    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)

    // NOTE: Do NOT kill all ScrollTriggers here on unmount.
    // Each component uses gsap.context() + ctx.revert() for scoped cleanup.
    // A global kill here would race with those cleanups and cause removeChild errors.
    return () => {
      window.removeEventListener('load', onLoad)
    }
  }, [])

  return <>{children}</>
}
