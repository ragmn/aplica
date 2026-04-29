'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { VideoBackground } from '@/components/common/VideoBackground'

const stats = [
  { val: '200+', label: 'Implementations' },
  { val: '94',   label: 'Avg. Days to Go-Live' },
  { val: '15+',  label: 'Countries Served' },
]

export function HeroSection() {
  const eyebrowRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 48 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' },
        '-=0.3'
      )
      tl.fromTo(subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.5'
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.35'
      )
      tl.fromTo(statsRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        '-=0.25'
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <VideoBackground
      src="/videos/hero2.mp4"
      poster="/images/hero-poster.jpg"
      className="relative min-h-screen w-full bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-black/40" aria-hidden />

      <div className="absolute inset-x-0 top-[72px] z-10 flex h-[calc(100vh-72px)] items-center justify-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Headline — Plus Jakarta Sans, massive, tight */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-white mx-auto max-w-5xl leading-[0.95] tracking-[-0.03em] text-[clamp(3.75rem,9vw,7rem)] lg:text-[clamp(3.25rem,8vw,5.25rem)]"
        >
          Implement D365
          <span className="relative block overflow-hidden py-2" style={{ height: '7.25rem' }}>
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent animate-hero-text-1">
              Faster.
            </span>
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent animate-hero-text-2">
              Efficient.
            </span>
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent animate-hero-text-3">
              Intelligent.
            </span>
          </span>
          Built for Scale.
        </h1>

        {/* Sub — "High-Low" strategy: large headline pairs with small body */}
        <p
          ref={subRef}
          className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-slate-400 opacity-0"
        >
          For SMBs and Enterprise teams across the UK&nbsp;&amp;&nbsp;Europe.
          100-day Fast Track. Fixed scope. Guaranteed delivery.
        </p>

        {/* CTAs — pill buttons */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row opacity-0"
        >
          <Link href="/solutions#smb" className="btn-primary">
            Fast Track for SMBs
            <ArrowRight size={15} aria-hidden />
          </Link>
          <Link href="/solutions#enterprise" className="btn-ghost">
            Enterprise Delivery
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>

        {/* Stats bar — floating glass pill */}
        <div
          ref={statsRef}
          className="hidden sm:inline-grid mx-auto mt-14 grid-cols-3 glass-pill opacity-0"
          style={{ gap: 0 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-8 py-5"
              style={{
                borderRight: i < stats.length - 1
                  ? '1px solid rgba(255,255,255,0.08)'
                  : undefined,
              }}
            >
              <p
                className="font-display font-extrabold text-white"
                style={{ fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.02em' }}
              >
                {s.val}
              </p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="hidden sm:flex mt-16 justify-center">
          <ChevronDown size={22} className="animate-bounce-y text-slate-600" aria-hidden />
        </div>
        </div>
      </div>
    </VideoBackground>
  )
}
