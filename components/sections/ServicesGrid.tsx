'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Layers, BarChart3, TrendingUp, GitBranch, Shuffle, Headphones,
  PieChart, Activity, Smartphone, Globe, ArrowRight, Check,
  type LucideIcon,
} from 'lucide-react'
import { services } from '@/data/services'

const iconMap: Record<string, LucideIcon> = {
  Layers, BarChart3, TrendingUp, GitBranch, Shuffle, Headphones,
  PieChart, Activity, Smartphone, Globe,
}

const pillars = [
  {
    id: 'erp',
    number: '01',
    title: 'ERP Solutions',
    subtitle: 'Microsoft Dynamics 365',
    description:
      'End-to-end D365 implementation — Finance, Supply Chain, CRM, and Managed Support. Fixed scope, fixed price.',
    cta: { label: 'Explore ERP', href: '/solutions#erp' },
    accentColor: '#006CF7',
  },
  {
    id: 'powerbi',
    number: '02',
    title: 'Microsoft Power BI',
    subtitle: 'Data & Analytics',
    description:
      'Executive dashboards and analytics platforms that surface insight from your Dynamics 365 data estate.',
    cta: { label: 'Explore Power BI', href: '/solutions#power-bi' },
    accentColor: '#f59e0b',
  },
  {
    id: 'webmobile',
    number: '03',
    title: 'Web & Mobile',
    subtitle: 'Power Apps & Custom Dev',
    description:
      'Custom web apps, mobile tools, and Power Platform solutions built natively for the Microsoft ecosystem.',
    cta: { label: 'Explore Dev', href: '/solutions#web-development' },
    accentColor: '#10b981',
  },
]

export function ServicesGrid() {
  const svcByCategory = (cat: string) => services.filter((s) => s.category === cat)

  return (
    <section className="section-padding" style={{ backgroundColor: '#131313' }}>
      <div className="container-xl">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">What We Do</p>
          <h2
            className="font-display font-extrabold text-white"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Three specialisms.
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              One Microsoft ecosystem.
            </span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-400 max-w-lg">
            From ERP core to analytics layer to custom apps — we cover the full Microsoft stack so you don&apos;t need three partners.
          </p>
        </div>

        {/* 3-pillar grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const pillarServices = svcByCategory(pillar.id)
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="flex flex-col rounded-3xl p-8"
                style={{
                  backgroundColor: '#1b1b1b',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                }}
              >
                {/* Pillar number + accent bar */}
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className="font-display text-4xl font-extrabold tabular-nums"
                    style={{ color: pillar.accentColor, opacity: 0.9, letterSpacing: '-0.03em' }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{ backgroundColor: pillar.accentColor, opacity: 0.25 }}
                  />
                </div>

                {/* Pillar title */}
                <p
                  className="mb-1 text-xs font-bold uppercase tracking-widest"
                  style={{ color: pillar.accentColor }}
                >
                  {pillar.subtitle}
                </p>
                <h3
                  className="mb-4 font-display font-extrabold text-white"
                  style={{ fontSize: '1.5rem', letterSpacing: '-0.015em', lineHeight: 1.2 }}
                >
                  {pillar.title}
                </h3>
                <p className="mb-7 text-sm leading-relaxed text-slate-400">
                  {pillar.description}
                </p>

                {/* Service list */}
                <ul className="mb-8 flex-1 space-y-3">
                  {pillarServices.map((svc) => {
                    const Icon = iconMap[svc.icon] ?? Layers
                    return (
                      <li key={svc.id} className="flex items-center gap-3">
                        <div
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: `${pillar.accentColor}15` }}
                        >
                          <Icon size={13} style={{ color: pillar.accentColor }} />
                        </div>
                        <span className="text-sm font-medium text-slate-300">{svc.title}</span>
                      </li>
                    )
                  })}
                </ul>

                {/* CTA */}
                <Link
                  href={pillar.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                  style={{ color: pillar.accentColor }}
                >
                  {pillar.cta.label}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Trust footnote */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {[
            'Fixed-scope engagements',
            'Certified Microsoft CSP',
            '200+ go-lives delivered',
            'UK & EU time zones',
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <Check size={13} style={{ color: '#006CF7' }} aria-hidden />
              <span className="text-xs font-medium text-slate-400">{t}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
