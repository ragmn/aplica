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
      src="/videos/hero.mp4"
      poster="/images/hero-poster.jpg"
      className="flex min-h-screen items-center"
    >
      {/* Ambient radial — CTA blue glow from top */}
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-70"
        aria-hidden
      />

      <div className="container-xl relative z-10 pt-32 pb-24 text-center">

        {/* Eyebrow pill — glassmorphism */}
        <div
          ref={eyebrowRef}
          className="mb-8 inline-flex items-center gap-2.5 glass-pill px-5 py-2.5"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
          <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
            Microsoft CSP · Gold Partner · AI Cloud Partner
          </span>
        </div>

        {/* Headline — Plus Jakarta Sans, massive, tight */}
        <h1
          ref={headlineRef}
          className="font-display font-extrabold text-white mx-auto max-w-5xl leading-[0.95] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          Implement D365
          <span className="block" style={{
            backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            paddingTop: '0.15em',
          }}>
            30% Faster.
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
          className="mx-auto mt-14 inline-grid grid-cols-3 glass-pill opacity-0"
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
        <div className="mt-16 flex justify-center">
          <ChevronDown size={22} className="animate-bounce-y text-slate-600" aria-hidden />
        </div>
      </div>
    </VideoBackground>
  )
}
