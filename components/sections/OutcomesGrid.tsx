'use client'

import { motion } from 'framer-motion'

const outcomes = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#006CF7" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    headline: 'Faster Adoption, Less Frustration',
    body: 'Users actually use the tools they\'re given. We combine technical deployment with change management and structured training that sticks.',
    proof: '85% avg. user adoption within 6 weeks',
    accent: '#eff6ff',
    accentBorder: '#bfdbfe',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#006CF7" strokeWidth="2" />
        <path d="M8 21h8M12 17v4" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 8l3 3 5-5" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'One Partner Across the Full Stack',
    body: 'From Azure to Power Platform to Teams and Dynamics 365 — no vendor-juggling, no knowledge gaps, no finger-pointing between partners.',
    proof: '12 Microsoft certifications across our team',
    accent: '#f0fdf4',
    accentBorder: '#bbf7d0',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'ROI You Can Measure',
    body: 'We baseline where you are today and track productivity gains, support ticket reduction, and licence utilisation — so you can prove the business case internally.',
    proof: '40% avg. IT support ticket reduction',
    accent: '#fffbeb',
    accentBorder: '#fde68a',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'Microsoft Expertise, Human Approach',
    body: 'Certified specialists who speak plain English, stay accountable after go-live, and treat your organisation\'s data and people with care.',
    proof: '98% client retention across all engagements',
    accent: '#fdf4ff',
    accentBorder: '#e9d5ff',
  },
]

export function OutcomesGrid() {
  return (
    <section className="section-padding bg-white" aria-labelledby="outcomes-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow mb-5">Why Aplica</span>
          <h2
            id="outcomes-heading"
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            What Changes When You
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Work With Us
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            We don&apos;t just turn on Microsoft 365. We transform how your organisation
            works — and prove it with data.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.headline}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="flex flex-col rounded-3xl bg-white p-7"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
            >
              {/* Icon */}
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: o.accent, border: `1px solid ${o.accentBorder}` }}
              >
                {o.icon}
              </div>

              {/* Content */}
              <h3 className="mb-3 font-display text-lg font-bold text-slate-900 leading-snug">
                {o.headline}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-slate-500">{o.body}</p>

              {/* Proof point */}
              <div
                className="mt-5 rounded-xl px-4 py-3"
                style={{ background: o.accent, border: `1px solid ${o.accentBorder}` }}
              >
                <p className="text-xs font-bold text-slate-700">
                  📊 {o.proof}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
