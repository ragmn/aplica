'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeUp } from '@/lib/animations'

const smb = {
  icon: Zap,
  tag: 'For SMBs',
  headline: 'Go live in 100 days. Fixed scope. No surprises.',
  points: [
    'Business Central out-of-the-box deployment',
    'Fixed-price Fast Track packages from £35k',
    'Go-live in 10–16 weeks, guaranteed',
    'Role-based training included',
    'UK MTD, EU VAT, and IFRS compliance built in',
  ],
  cta: { label: 'View SMB Packages', href: '/solutions#smb' },
  calendly: 'Book a Free SMB Consultation',
}

const enterprise = {
  icon: Globe,
  tag: 'For Enterprise',
  headline: 'Complex integrations. Global rollouts. Risk-managed delivery.',
  points: [
    'D365 Finance, SCM, and Operations',
    'Multi-entity, multi-currency, multi-region',
    'Legacy migration from AX, NAV, GP, SAP',
    'Dedicated solution architect',
    'Hypercare and long-term AMC support',
  ],
  cta: { label: 'View Enterprise Solutions', href: '/solutions#enterprise' },
  calendly: 'Book an Executive Briefing',
}

export function SMBEnterpriseSection() {
  const calendlyUrl =
    typeof window !== 'undefined'
      ? (process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#')
      : '#'

  return (
    <section className="relative overflow-hidden section-padding" style={{ backgroundColor: '#1b1b1b' }}>
      {/* Decorative gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,108,247,0.08),transparent)]" />

      <div className="container-xl relative">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">
            Who we serve
          </p>
          <h2 className="font-display text-display-md text-white">
            Built for both ends of the market.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Same Microsoft expertise — different delivery model. Choose the path that fits your scale.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {[smb, enterprise].map((tier, i) => {
            const Icon = tier.icon
            return (
              <motion.div
                key={tier.tag}
                custom={i * 0.1}
                variants={fadeUp}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10"
              >
                {/* Tag */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Icon size={14} className="text-brand-400" />
                  <span className="text-xs font-semibold text-brand-300">{tier.tag}</span>
                </div>

                <h3 className="mb-6 font-display text-2xl font-bold text-white md:text-3xl">
                  {tier.headline}
                </h3>

                <ul className="mb-8 space-y-3">
                  {tier.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle
                        size={16}
                        className="mt-0.5 shrink-0 text-brand-400"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={tier.cta.href}
                    className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all active:scale-95"
                    style={{
                      background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)',
                      boxShadow: '0 4px 20px rgba(0,108,247,0.25)',
                    }}
                  >
                    {tier.cta.label}
                    <ArrowRight size={14} />
                  </Link>
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/30 hover:text-white"
                  >
                    {tier.calendly}
                  </a>
                </div>

                {/* Glow accent */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-10"
                  style={{
                    background:
                      i === 0
                        ? 'radial-gradient(circle, #6366f1, transparent)'
                        : 'radial-gradient(circle, #8b5cf6, transparent)',
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
