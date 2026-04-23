'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProcessStep } from '@/types'
import { cn } from '@/lib/utils'

export function ProcessTimeline({
  steps,
  className,
}: {
  steps: ProcessStep[]
  className?: string
}) {
  const stepsRef = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      stepsRef.current.forEach((el, i) => {
        if (!el) return
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -24 : 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500/60 via-violet-500/40 to-transparent md:block" />

      <ol className="space-y-10">
        {steps.map((step, i) => (
          <li
            key={step.number}
            ref={(el) => { stepsRef.current[i] = el }}
            className="relative flex gap-6 md:items-start"
          >
            {/* Step number */}
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-slate-950 text-sm font-bold text-brand-400">
              {step.number}
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="mb-1 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
