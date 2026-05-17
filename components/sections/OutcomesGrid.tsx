'use client'

import { motion } from 'framer-motion'

const outcomes = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="#006CF7" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    headline: '18 Years of ERP Depth',
    body: 'Not a generalist. We have spent 18 years implementing Microsoft Dynamics 365 across manufacturing, distribution, finance, and retail, in some of the world\'s most demanding markets.',
    proof: '200+ D365 implementations delivered',
    accent: '#eff6ff',
    accentBorder: '#bfdbfe',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="2" stroke="#006CF7" strokeWidth="2" />
        <path d="M12 2a10 10 0 0 1 0 20A10 10 0 0 1 12 2z" stroke="#006CF7" strokeWidth="2" />
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    headline: 'Proven in Demanding Markets',
    body: 'We have successfully navigated complex multi-entity rollouts, strict regulatory environments, and tight go-live windows across India and the GCC. That rigour now comes to Europe.',
    proof: 'Live across 22+ countries, 3 continents',
    accent: '#f0fdf4',
    accentBorder: '#bbf7d0',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#006CF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    headline: 'Enterprise Quality, Efficient Delivery',
    body: 'Our India-based delivery model means senior D365 expertise at a fraction of the cost of legacy SI firms, without compromising on quality, governance, or accountability.',
    proof: '30–40% cost advantage vs. big-4 SI partners',
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
    headline: 'Clients Stay Because We Deliver',
    body: 'We don\'t go live and disappear. A named consultant who knows your business stays with you post-launch, for support, optimisation, and whatever comes next.',
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
            What Sets Us Apart
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              From Every Other Partner
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            18 years. 200+ go-lives. Three continents. We bring a depth of ERP experience
            that most European partners simply have not had the time to build.
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
