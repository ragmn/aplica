'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Star } from 'lucide-react'

const serviceGroups = [
  {
    id: 'erp',
    label: 'ERP Implementation',
    icon: '⚙',
    services: [
      {
        name: 'D365 Business Central',
        valueProp: 'Full ERP on Microsoft\'s modern cloud platform for SMB and mid-market',
        bullets: ['Chart of accounts & financial setup', 'Inventory, purchasing & sales', 'Multi-entity & multi-currency'],
        href: '/solutions#business-central',
        badge: 'Most Popular',
      },
      {
        name: 'D365 Finance & Operations',
        valueProp: 'Enterprise-grade ERP for complex, multi-site organisations',
        bullets: ['General ledger & consolidations', 'Manufacturing & supply chain', 'Project management & accounting'],
        href: '/solutions#finance-ops',
        badge: 'Enterprise',
      },
    ],
  },
  {
    id: 'crm',
    label: 'CRM & Sales',
    icon: '◈',
    services: [
      {
        name: 'D365 Sales & Customer Engagement',
        valueProp: 'Connect your sales process to back-office ERP from day one',
        bullets: ['Opportunity & pipeline management', 'Customer 360 view', 'Native D365 ERP integration'],
        href: '/solutions#crm',
      },
      {
        name: 'D365 Field Service',
        valueProp: 'Optimise field operations and service delivery at scale',
        bullets: ['Work order management', 'Intelligent resource scheduling', 'Mobile-first technician experience'],
        href: '/solutions#field-service',
      },
    ],
  },
  {
    id: 'assessment',
    label: 'Assessment & Roadmap',
    icon: '▣',
    services: [
      {
        name: 'ERP Readiness Assessment',
        valueProp: 'Understand your gaps and build a credible business case before committing budget',
        bullets: ['Current-state process mapping', 'Data quality & migration audit', 'ROI model & investment estimate'],
        href: '/solutions#readiness',
        badge: 'Free Starter',
      },
      {
        name: 'Discovery Workshop',
        valueProp: 'A structured 2-day session to align stakeholders and define the right scope',
        bullets: ['Requirements & process capture', 'Re-engineering opportunities', 'Go-live timeline & phasing'],
        href: '/solutions#discovery',
      },
    ],
  },
  {
    id: 'migration',
    label: 'Migration & Upgrade',
    icon: '↑',
    services: [
      {
        name: 'Legacy ERP to D365',
        valueProp: 'Move from SAP, Oracle, Sage or NAV to modern Dynamics 365',
        bullets: ['Data migration & cleansing', 'Custom development carry-over assessment', 'Parallel-run cutover strategy'],
        href: '/solutions#migration',
        badge: 'High Demand',
      },
      {
        name: 'Dynamics NAV / BC Upgrade',
        valueProp: 'Upgrade older Dynamics versions to the latest Business Central SaaS',
        bullets: ['Version gap analysis', 'ISV & extension compatibility review', 'Safe incremental upgrade approach'],
        href: '/solutions#upgrade',
      },
    ],
  },
  {
    id: 'integration',
    label: 'Integration & BI',
    icon: '⬡',
    services: [
      {
        name: 'System Integration',
        valueProp: 'Connect D365 to your existing systems without breaking anything',
        bullets: ['REST API & middleware design', 'E-commerce & logistics connectors', 'Real-time data synchronisation'],
        href: '/solutions#integration',
      },
      {
        name: 'Power BI & Analytics',
        valueProp: 'Turn your ERP data into decisions your leadership team will actually use',
        bullets: ['Financial dashboards & KPI packs', 'Supply chain & operations reporting', 'Self-service BI enablement'],
        href: '/solutions#powerbi',
        badge: 'High ROI',
      },
    ],
  },
  {
    id: 'support',
    label: 'Managed Support',
    icon: '◉',
    services: [
      {
        name: 'Post Go-Live Support',
        valueProp: 'A named consultant who knows your system, not a faceless helpdesk',
        bullets: ['Tiered helpdesk (L1–L3)', 'Monthly health checks & proactive alerts', 'Enhancement request management'],
        href: '/solutions#support',
        badge: 'Ongoing',
      },
      {
        name: 'Managed D365 Administration',
        valueProp: 'We run your D365 environment so your team can focus on the business',
        bullets: ['Release wave management', 'User & licence administration', 'Performance & compliance monitoring'],
        href: '/solutions#managed',
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
              Every stage of your D365 journey, covered.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Whether you are implementing ERP for the first time, migrating from a legacy system,
              or optimising an existing Dynamics environment. We have done it before.
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
            '18 years ERP experience',
            'Certified Microsoft D365 CSP',
            '200+ go-lives delivered',
            'India, GCC & Europe delivery',
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
