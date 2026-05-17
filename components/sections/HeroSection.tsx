'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

const trustBadges = [
  'Microsoft Solutions Partner',
  'Certified Consultants',
  '200+ Organisations Transformed',
  'UK-Based Team',
]

const stats = [
  { val: '200+', label: 'Implementations' },
  { val: '94',   label: 'Avg. Days to Go-Live' },
  { val: '98%',  label: 'Client Retention' },
  { val: '15+',  label: 'Countries Served' },
]

export function HeroSection() {
  const eyebrowRef  = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)
  const badgesRef   = useRef<HTMLDivElement>(null)
  const statsRef    = useRef<HTMLDivElement>(null)
  const illustRef   = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
      )
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' }, '-=0.3'
      )
      tl.fromTo(subRef.current,
        { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.45'
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.35'
      )
      tl.fromTo(badgesRef.current,
        { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2'
      )
      tl.fromTo(illustRef.current,
        { opacity: 0, x: 32, scale: 0.96 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, '-=1.2'
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #fafcff 55%, #f5f0ff 100%)' }}
      aria-label="Hero"
    >
      {/* Decorative background circles */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, rgba(0,108,247,0.15) 0%, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 right-1/3 h-64 w-64 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.20) 0%, transparent 70%)' }}
        aria-hidden
      />

      <div className="container-xl relative py-20 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — content */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <div ref={eyebrowRef} className="opacity-0">
              <span className="eyebrow mb-6">Microsoft 365 Partner · UK &amp; Europe</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="mt-4 font-display font-extrabold text-slate-900 opacity-0"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Microsoft 365 is
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Powerful.
              </span>
              <br />
              Getting it Right is
              <br />
              the Difference.
            </h1>

            {/* Sub */}
            <p
              ref={subRef}
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600 opacity-0"
            >
              We help organisations across the UK &amp; Europe unlock the full value of
              Microsoft 365 — from seamless migrations and Copilot adoption to
              Dynamics 365 ERP and Power Platform.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center opacity-0"
            >
              <Link
                href="/contact#book"
                className="btn-primary"
                data-cta="hero-primary"
                aria-label="Book a free discovery call"
              >
                Book a Free Discovery Call
                <ArrowRight size={15} aria-hidden />
              </Link>
              <Link
                href="/case-studies"
                className="btn-ghost"
                data-cta="hero-secondary"
              >
                See Our Work
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>

            {/* Trust badges */}
            <div
              ref={badgesRef}
              className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 opacity-0 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
            >
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="shrink-0"
                    style={{ color: '#006CF7' }}
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-slate-600">{badge}</span>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="tel:+442000000000"
                className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-800"
              >
                <Phone size={14} aria-hidden />
                +44 20 0000 0000
              </a>
              <span className="text-slate-300" aria-hidden>·</span>
              <span className="text-sm text-slate-400">Free 30-min consultation</span>
            </div>
          </div>

          {/* Right — illustration */}
          <div ref={illustRef} className="relative hidden opacity-0 lg:flex lg:items-center lg:justify-center">
            <Image
              src="/images/PowerApps_trans.png"
              alt="Microsoft Power Apps"
              width={600}
              height={600}
              className="w-full max-w-lg"
              priority
            />
          </div>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 sm:grid-cols-4"
          style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-white px-6 py-6">
              <p
                className="font-display font-extrabold text-slate-900"
                style={{ fontSize: '1.875rem', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                {s.val}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

