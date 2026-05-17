'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'

const serviceGroups = [
  {
    id: 'strategy',
    label: 'Strategy & Assessment',
    icon: '🔍',
    services: [
      {
        name: 'Discovery Workshop',
        valueProp: 'Align your team and define a clear Microsoft 365 roadmap',
        bullets: ['Current-state audit', 'Stakeholder alignment session', 'Prioritised 90-day roadmap'],
        href: '/solutions#discovery',
      },
      {
        name: 'M365 Readiness Assessment',
        valueProp: 'Know exactly where you stand before you spend a pound',
        bullets: ['Licence utilisation review', 'Security posture check', 'Adoption gap analysis'],
        href: '/solutions#readiness',
        badge: 'Free Starter',
      },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment & Migration',
    icon: '🚀',
    services: [
      {
        name: 'M365 Tenant Setup & Migration',
        valueProp: 'Move to Microsoft 365 with zero downtime and full data integrity',
        bullets: ['Tenant design & provisioning', 'Email & data migration', 'Security baseline configuration'],
        href: '/solutions#deployment',
        badge: 'Most Popular',
      },
      {
        name: 'SharePoint & Teams Configuration',
        valueProp: 'Intranet and collaboration environments your people actually use',
        bullets: ['Information architecture design', 'Teams governance framework', 'Permission and access controls'],
        href: '/solutions#sharepoint-teams',
      },
    ],
  },
  {
    id: 'automation',
    label: 'Automation & Integration',
    icon: '⚡',
    services: [
      {
        name: 'Power Platform',
        valueProp: 'Automate manual processes and build apps without custom code',
        bullets: ['Power Automate workflows', 'Power Apps for internal tools', 'Power BI reporting dashboards'],
        href: '/solutions#power-platform',
        badge: 'High ROI',
      },
      {
        name: 'Azure Infrastructure & Cloud',
        valueProp: 'Enterprise-grade cloud infrastructure, architected for growth',
        bullets: ['Azure landing zone design', 'Hybrid identity (Entra ID)', 'Cost optimisation & governance'],
        href: '/solutions#azure-devops',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Copilot',
    icon: '🤖',
    services: [
      {
        name: 'Microsoft Copilot Adoption',
        valueProp: 'Turn Copilot licences into measurable productivity gains',
        bullets: ['Copilot readiness assessment', 'Use-case prioritisation by role', 'Champions programme & training'],
        href: '/solutions#copilot-d365',
        badge: '🔥 Hot',
      },
      {
        name: 'AI Consulting & Strategy',
        valueProp: 'Build a responsible AI roadmap grounded in your business goals',
        bullets: ['AI readiness scoring', 'Azure OpenAI integration', 'Governance & compliance framework'],
        href: '/solutions#ai-consulting',
      },
    ],
  },
  {
    id: 'training',
    label: 'Training & Adoption',
    icon: '📚',
    services: [
      {
        name: 'End-User Training',
        valueProp: 'Role-based training that drives lasting behaviour change',
        bullets: ['Live and recorded sessions', 'Role-specific learning paths', 'Adoption metrics and tracking'],
        href: '/solutions#training',
      },
      {
        name: 'Champions Programme',
        valueProp: 'Build internal advocates who sustain adoption long-term',
        bullets: ['Champion selection & onboarding', 'Monthly community calls', 'Resource library & toolkits'],
        href: '/solutions#champions',
      },
    ],
  },
  {
    id: 'support',
    label: 'Managed Support',
    icon: '🛡️',
    services: [
      {
        name: 'Managed M365 Helpdesk',
        valueProp: 'UK-based support that resolves issues before they cost you',
        bullets: ['Tiered helpdesk (L1–L3)', 'Proactive monitoring & alerts', 'Monthly health reports'],
        href: '/solutions#support',
        badge: 'Ongoing',
      },
      {
        name: 'Governance & Licence Management',
        valueProp: 'Stay compliant, cut waste, and keep your environment healthy',
        bullets: ['Licence optimisation reviews', 'Governance policy templates', 'Security & compliance audits'],
        href: '/solutions#governance',
      },
    ],
  },
]

export function ServicesGrid() {
  const [activeGroup, setActiveGroup] = useState('strategy')
  const group = serviceGroups.find((g) => g.id === activeGroup) ?? serviceGroups[0]

  return (
    <section className="section-padding section-alt" aria-labelledby="services-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow mb-5">What We Do</span>
            <h2
              id="services-heading"
              className="mt-5 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              We meet you where you are.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Whether you&apos;re starting from scratch, fixing a failed deployment, or ready to unlock AI —
              our six service areas cover every stage of the journey.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
          >
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Tab bar */}
        <div
          className="mb-8 flex flex-wrap gap-2 rounded-2xl bg-white p-1.5"
          style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
          role="tablist"
          aria-label="Service categories"
        >
          {serviceGroups.map((g) => (
            <button
              key={g.id}
              role="tab"
              aria-selected={activeGroup === g.id}
              aria-controls={`panel-${g.id}`}
              onClick={() => setActiveGroup(g.id)}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200"
              style={
                activeGroup === g.id
                  ? {
                      background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)',
                      color: 'white',
                      boxShadow: '0 4px 16px rgba(0,108,247,0.25)',
                    }
                  : { color: '#475569' }
              }
            >
              <span aria-hidden>{g.icon}</span>
              <span className="hidden sm:inline">{g.label}</span>
            </button>
          ))}
        </div>

        {/* Service cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            id={`panel-${activeGroup}`}
            role="tabpanel"
            aria-label={group.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="grid gap-6 md:grid-cols-2"
          >
            {group.services.map((svc) => (
              <article
                key={svc.name}
                className="relative flex flex-col rounded-3xl bg-white p-8"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
              >
                {/* Badge */}
                {svc.badge && (
                  <span
                    className="absolute right-6 top-6 rounded-full px-3 py-1 text-xs font-bold"
                    style={{ background: '#eff6ff', color: '#006CF7' }}
                  >
                    {svc.badge}
                  </span>
                )}

                <h3 className="mb-2 font-display text-xl font-bold text-slate-900 pr-20">
                  {svc.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-500">{svc.valueProp}</p>

                {/* Bullet list */}
                <ul className="mb-8 flex-1 space-y-2.5">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{ background: '#eff6ff' }}
                      >
                        <Check size={11} style={{ color: '#006CF7' }} aria-hidden />
                      </div>
                      <span className="text-sm text-slate-600">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={svc.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
                  aria-label={`Learn more about ${svc.name}`}
                >
                  Learn more <ArrowRight size={14} aria-hidden />
                </Link>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {[
            'Fixed-scope engagements',
            'Certified Microsoft CSP',
            '200+ go-lives delivered',
            'UK & EU time zones',
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={13} style={{ color: '#006CF7' }} aria-hidden />
              <span className="text-sm font-medium text-slate-500">{t}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
