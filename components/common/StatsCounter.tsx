'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Stat } from '@/types'
import { cn } from '@/lib/utils'

interface StatsCounterProps {
  stats: Stat[]
  className?: string
}

export function StatsCounter({ stats, className }: StatsCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const elements = numbersRef.current.filter(Boolean) as HTMLSpanElement[]
    if (!elements.length) return

    const ctx = gsap.context(() => {
      elements.forEach((el, i) => {
        const stat = stats[i]
        if (!stat) return

        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate() {
            el.textContent =
              stat.value % 1 === 0
                ? Math.round(obj.val).toString()
                : obj.val.toFixed(1)
          },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [stats])

  return (
    <div
      ref={containerRef}
      className={cn(
        'grid grid-cols-2 gap-6 sm:grid-cols-4',
        className
      )}
    >
      {stats.map((stat, i) => (
        <div key={stat.label} className="text-center">
          <p className="text-4xl font-bold text-white md:text-5xl">
            <span
              ref={(el) => { numbersRef.current[i] = el }}
            >
              0
            </span>
            <span>{stat.suffix}</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
