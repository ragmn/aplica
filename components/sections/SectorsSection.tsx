'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const sectors = [
  {
    id: 'professional',
    label: 'Professional Services',
    icon: '⚖️',
    description: 'Law firms, accountancies, and consultancies juggling complex client billing, document management, and compliance.',
    challenges: 'Manual document workflows, disconnected client management systems, and difficulty enforcing information barriers.',
    solutions: [
      'SharePoint-powered matter management and document libraries',
      'Power Automate for billing and approval workflows',
      'Teams governance with client-level security boundaries',
    ],
    stat: '60% reduction in document retrieval time',
    caseStudyLink: '/case-studies',
    color: '#1d4ed8',
    bg: '#eff6ff',
  },
  {
    id: 'public',
    label: 'Public Sector',
    icon: '🏛️',
    description: 'Councils, NHS trusts, and regulators navigating complex procurement, data residency requirements, and citizen service delivery.',
    challenges: 'Legacy systems, strict data sovereignty requirements, and limited IT budgets with high service demands.',
    solutions: [
      'GovCloud-compliant M365 tenants with UK data residency',
      'Power Platform for citizen-facing service automation',
      'Microsoft Purview for Information Protection and compliance',
    ],
    stat: 'Compliant deployment in 8 weeks',
    caseStudyLink: '/case-studies',
    color: '#059142',
    bg: '#f0f9f4',
  },
  {
    id: 'financial',
    label: 'Financial Services',
    icon: '💼',
    description: 'Banks, insurers, and wealth managers operating under FCA regulation with strict audit, records retention, and cybersecurity requirements.',
    challenges: 'Regulatory recordkeeping, insider threat management, and the need to modernise without compromising compliance.',
    solutions: [
      'Microsoft Purview Records Management for FCA compliance',
      'Insider Risk Management and Communication Compliance',
      'Secure collaboration with Teams for external clients',
    ],
    stat: '100% audit trail coverage from day one',
    caseStudyLink: '/case-studies',
    color: '#d97706',
    bg: '#fffbeb',
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Life Sciences',
    icon: '🏥',
    description: 'NHS providers, private clinics, and pharmaceutical companies handling patient data, clinical workflows, and research collaboration.',
    challenges: 'Data Protection Act and Caldicott requirements, clinical staff digital literacy, and cross-organisation data sharing.',
    solutions: [
      'DSPT-aligned M365 configuration and access controls',
      'Teams for clinical communication and virtual consultations',
      'Power BI for patient pathway analytics and waiting list management',
    ],
    stat: '45% improvement in cross-team communication',
    caseStudyLink: '/case-studies',
    color: '#dc2626',
    bg: '#fff1f1',
  },
  {
    id: 'smb',
    label: 'SMB & Growing Businesses',
    icon: '🚀',
    description: 'Ambitious 20–500 person businesses that have outgrown their current tools and need enterprise-grade Microsoft without enterprise complexity.',
    challenges: 'No dedicated IT team, mixed personal and business data, basic security posture, and limited Microsoft licence usage.',
    solutions: [
      'Business Central or D365 ERP fast-track in 10–16 weeks',
      'M365 Business Premium security hardening',
      'Power Automate for quick-win process automation',
    ],
    stat: 'Go-live in as little as 10 weeks',
    caseStudyLink: '/solutions#smb',
    color: '#7c3aed',
    bg: '#fdf4ff',
  },
  {
    id: 'construction',
    label: 'Construction & Manufacturing',
    icon: '🏗️',
    description: 'Contractors, property developers, and manufacturers running complex project lifecycles across multiple sites and supply chains.',
    challenges: 'Site-to-office connectivity gaps, real-time project cost visibility, and supply chain coordination across dozens of vendors.',
    solutions: [
      'D365 Project Operations for project costing and scheduling',
      'D365 Supply Chain Management with mobile warehouse tools',
      'Power BI dashboards for live project profitability',
    ],
    stat: '32% reduction in inventory carrying costs',
    caseStudyLink: '/case-studies/uk-construction-d365-scm',
    color: '#ea580c',
    bg: '#fff7ed',
  },
]

export function SectorsSection() {
  const [active, setActive] = useState('professional')
  const sector = sectors.find((s) => s.id === active) ?? sectors[0]

  return (
    <section className="section-padding bg-white" aria-labelledby="sectors-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow mb-5">Who We Help</span>
          <h2
            id="sectors-heading"
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Microsoft 365 expertise built
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              for your sector.
            </span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            We understand the specific regulatory, operational, and cultural challenges of each
            sector — so our solutions actually fit.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Sector tabs (left) */}
          <nav aria-label="Sector navigation">
            <ul className="space-y-1.5" role="list">
              {sectors.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => setActive(s.id)}
                    className="flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-all duration-200"
                    style={
                      active === s.id
                        ? {
                            background: s.bg,
                            borderLeft: `3px solid ${s.color}`,
                          }
                        : { borderLeft: '3px solid transparent' }
                    }
                    aria-pressed={active === s.id}
                    aria-label={`View ${s.label} sector`}
                  >
                    <span className="text-xl leading-none" aria-hidden>{s.icon}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: active === s.id ? s.color : '#475569' }}
                    >
                      {s.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sector detail panel (right) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="rounded-3xl bg-white p-8"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.08)' }}
            >
              {/* Header */}
              <div className="mb-6 flex items-start gap-4">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: sector.bg }}
                  aria-hidden
                >
                  {sector.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">{sector.label}</h3>
                  <p className="mt-1 text-sm text-slate-500">{sector.description}</p>
                </div>
              </div>

              {/* Challenge */}
              <div className="mb-5 rounded-2xl p-4" style={{ background: '#fafbfc', border: '1px solid #e2e8f0' }}>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Key Challenge
                </p>
                <p className="text-sm text-slate-600">{sector.challenges}</p>
              </div>

              {/* How M365 helps */}
              <div className="mb-6">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  How We Help
                </p>
                <ul className="space-y-2.5">
                  {sector.solutions.map((sol) => (
                    <li key={sol} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                        style={{ background: sector.color }}
                      >
                        ✓
                      </div>
                      <span className="text-sm text-slate-600">{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat + CTA */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2"
                  style={{ background: sector.bg }}
                >
                  <span className="text-sm font-semibold" style={{ color: sector.color }}>
                    📊 {sector.stat}
                  </span>
                </div>
                <Link
                  href={sector.caseStudyLink}
                  className="inline-flex items-center gap-2 text-sm font-bold transition-all hover:gap-3"
                  style={{ color: sector.color }}
                >
                  See relevant case study <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
