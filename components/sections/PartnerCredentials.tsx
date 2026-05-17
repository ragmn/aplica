'use client'

import { motion } from 'framer-motion'

const credentials = [
  {
    designation: 'Modern Work',
    description: 'Microsoft 365, Teams, SharePoint, and Copilot deployment',
    color: '#5059C9',
    bg: '#f0f0fb',
  },
  {
    designation: 'Business Applications',
    description: 'Dynamics 365 Finance, SCM, Sales, and Power Platform',
    color: '#00B7C3',
    bg: '#f0fafc',
  },
  {
    designation: 'Azure — Cloud & AI',
    description: 'Azure infrastructure, OpenAI, and AI strategy',
    color: '#0078D4',
    bg: '#f0f6fd',
  },
  {
    designation: 'Security',
    description: 'Microsoft Defender, Purview, and Zero Trust architecture',
    color: '#107C10',
    bg: '#f0f9f0',
  },
]

const stats = [
  { value: '15+', label: 'Years Microsoft Partner' },
  { value: '200+', label: 'Implementations Delivered' },
  { value: '12+', label: 'Certified Consultants' },
  { value: '98%', label: 'Client Satisfaction' },
]

function MicrosoftLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <rect x="0" y="0" width="9.5" height="9.5" fill="#F25022" />
      <rect x="10.5" y="0" width="9.5" height="9.5" fill="#7FBA00" />
      <rect x="0" y="10.5" width="9.5" height="9.5" fill="#00A4EF" />
      <rect x="10.5" y="10.5" width="9.5" height="9.5" fill="#FFB900" />
    </svg>
  )
}

export function PartnerCredentials() {
  return (
    <section className="section-padding section-alt" aria-labelledby="credentials-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-14 grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <span className="eyebrow mb-5">Our Microsoft Partnership</span>
            <h2
              id="credentials-heading"
              className="mt-5 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Accreditations that prove
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                depth, not decoration.
              </span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-500 lg:max-w-md lg:text-right">
            Our accreditations aren&apos;t just logos — they represent the expertise your
            organisation gets on every engagement. Earned through rigorous assessment,
            maintained through continuous delivery.
          </p>
        </div>

        {/* Designation badges */}
        <div className="mb-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {credentials.map((c, i) => (
            <motion.div
              key={c.designation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-3xl bg-white p-6"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
            >
              {/* Badge top */}
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: c.bg }}
                >
                  <MicrosoftLogo />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: c.color }}
                >
                  Solutions Partner
                </span>
              </div>

              {/* Designation */}
              <div>
                <h3
                  className="mb-2 font-display text-base font-bold text-slate-900"
                >
                  {c.designation}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{c.description}</p>
              </div>

              {/* Verified mark */}
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{ background: c.bg, color: c.color }}
              >
                ✓ Microsoft Verified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-slate-100 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center bg-white px-8 py-8 text-center">
              <p
                className="font-display font-extrabold"
                style={{
                  fontSize: '2.25rem',
                  lineHeight: 1,
                  letterSpacing: '-0.03em',
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
