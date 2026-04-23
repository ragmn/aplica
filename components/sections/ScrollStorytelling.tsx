'use client'

import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StatsCounter } from '@/components/common/StatsCounter'
import { stats } from '@/data/content'

const panels = [
  {
    label: '01 — The Problem',
    heading: 'ERP projects fail.\nCost overruns. Delays.\nScope creep.',
    body: '68% of ERP implementations go over budget or schedule. Teams lose months — and millions — to poor planning, wrong partners, and underestimated complexity.',
    accent: 'text-red-400',
  },
  {
    label: '02 — Our Approach',
    heading: 'Fixed scope.\nFast delivery.\nProven methodology.',
    body: 'Our 100-day Fast Track methodology delivers working systems, not promises. Pre-built industry configs, a dedicated project team, and a transparent milestone plan.',
    accent: 'text-[#006CF7]',
  },
  {
    label: '03 — The Results',
    heading: 'Real outcomes.\nMeasured ROI.\nLong-term partnership.',
    body: '200+ live implementations. 98% client retention. Average go-live in 94 days. We stay with you after go-live so your investment keeps delivering.',
    accent: 'text-emerald-400',
  },
]

export function ScrollStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)
  const panelsRef = useRef<(HTMLDivElement | null)[]>([])

  // useLayoutEffect ensures pin spacer DOM nodes are created/removed synchronously,
  // before React commits changes. Prevents removeChild when navigating away.
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const totalWidth = () => {
      const section = sectionRef.current
      return section ? section.scrollWidth - window.innerWidth : 0
    }

    const ctx = gsap.context(() => {
      // Horizontal scroll storytelling
      gsap.to(sectionRef.current, {
        x: () => -totalWidth(),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: () => `+=${totalWidth()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      // Panel fade in on scroll
      panelsRef.current.forEach((panel, i) => {
        if (!panel || i === 0) return
        gsap.fromTo(
          panel,
          { opacity: 0.2 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              start: `top top+=${i * (100 / panels.length)}%`,
              end: `top top+=${(i + 1) * (100 / panels.length)}%`,
              scrub: true,
            },
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={triggerRef} className="relative h-screen overflow-hidden" style={{ backgroundColor: '#131313' }}>
      {/* Scroll hint */}
      <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2 rotate-90 text-xs tracking-widest text-slate-600">
        SCROLL
      </div>

      {/* Horizontal panel strip */}
      <div ref={sectionRef} className="flex h-full w-max items-center">
        {panels.map((panel, i) => (
          <div
            key={panel.label}
            ref={(el) => { panelsRef.current[i] = el }}
            className="flex h-full w-screen flex-col items-start justify-center px-8 md:px-20 lg:px-32"
          >
            <div className="max-w-2xl">
              <p className={`mb-4 text-xs font-semibold tracking-widest uppercase ${panel.accent}`}>
                {panel.label}
              </p>
              <h2
                className="font-display font-extrabold leading-[1.05] text-white whitespace-pre-line"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.03em' }}
              >
                {panel.heading}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
                {panel.body}
              </p>

              {/* Show stats on final panel */}
              {i === panels.length - 1 && (
                <div className="mt-10">
                  <StatsCounter stats={stats} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Background gradient shift */}
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
    </div>
  )
}
