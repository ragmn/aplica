'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'Understand Your Starting Point',
    body: 'We audit your current environment, interview key stakeholders, and map your goals against your Microsoft 365 maturity. No assumptions — only facts.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" />
        <path d="m21 21-4.35-4.35" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    deliverable: 'Discovery Report',
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Architect the Right Solution',
    body: 'Our certified architects design a solution tailored to your organisation — not a template. We document every decision and get your sign-off before a single line of config.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4 12 14.01l-4-4L2 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    deliverable: 'Solution Blueprint',
  },
  {
    number: '03',
    title: 'Deploy',
    subtitle: 'Implement with Zero Disruption',
    body: 'We configure, migrate, and go live in carefully managed sprints. Your team stays operational throughout. Rigorous testing at every stage.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    deliverable: 'Live Environment',
  },
  {
    number: '04',
    title: 'Adopt',
    subtitle: 'Drive Real Usage and ROI',
    body: 'Technical deployment is only half the job. We run structured training, champion programmes, and adoption campaigns until your team is truly self-sufficient.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    deliverable: 'Adoption Dashboard',
  },
  {
    number: '05',
    title: 'Optimise',
    subtitle: 'Continuous Improvement',
    body: 'Microsoft 365 is never "done". Our managed support team monitors your environment, manages licences, and helps you unlock new features as they land.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="17 6 23 6 23 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    deliverable: 'Monthly Health Report',
  },
]

export function MethodologyTimeline() {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: '#0f172a' }}
      aria-labelledby="methodology-heading"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,108,247,0.20), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px opacity-20"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,108,247,0.6), transparent)' }}
        aria-hidden
      />

      <div className="container-xl relative">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
            <span className="inline-block h-px w-5 bg-blue-400" />
            How We Work
            <span className="inline-block h-px w-5 bg-blue-400" />
          </span>
          <h2
            id="methodology-heading"
            className="mt-5 font-display font-extrabold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Our Proven Delivery Framework
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
            A structured, five-phase approach that eliminates the chaos from Microsoft 365 projects
            and delivers measurable outcomes every time.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px lg:block"
            style={{
              background:
                'linear-gradient(to right, transparent 0%, rgba(0,108,247,0.35) 10%, rgba(0,108,247,0.35) 90%, transparent 100%)',
              top: '2rem',
            }}
            aria-hidden
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="relative flex flex-col"
              >
                {/* Step badge */}
                <div className="relative z-10 mb-5 flex items-center gap-4 lg:flex-col lg:items-start">
                  <div
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)',
                      boxShadow: '0 8px 24px rgba(0,108,247,0.35)',
                    }}
                  >
                    {step.icon}
                  </div>
                  {/* Connector for mobile */}
                  {i < steps.length - 1 && (
                    <div
                      className="h-px flex-1 lg:hidden"
                      style={{ background: 'rgba(0,108,247,0.30)' }}
                      aria-hidden
                    />
                  )}
                </div>

                {/* Text */}
                <div>
                  <p
                    className="mb-1 font-display text-xs font-bold uppercase tracking-widest"
                    style={{ color: '#6eaaff' }}
                  >
                    {step.number} — {step.title}
                  </p>
                  <h3 className="mb-3 font-display text-base font-bold text-white leading-snug">
                    {step.subtitle}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">{step.body}</p>

                  {/* Deliverable */}
                  <div
                    className="mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5"
                    style={{ background: 'rgba(0,108,247,0.12)', border: '1px solid rgba(0,108,247,0.20)' }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: '#6eaaff' }}
                    />
                    <span className="text-xs font-semibold text-blue-300">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-4 text-center">
          <p className="text-base text-slate-300">
            Every engagement starts with a free 30-minute Discovery Call.
            <strong className="text-white"> No pressure, no jargon.</strong>
          </p>
          <Link
            href="/contact#book"
            className="btn-primary"
            data-cta="methodology-book-call"
          >
            Book Your Free Discovery Call
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>

      </div>
    </section>
  )
}
