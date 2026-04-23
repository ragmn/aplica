import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Aplica — Microsoft Dynamics 365 Partner UK, Europe, UAE & India',
  description:
    'Learn about Aplica Technology — a certified Microsoft Cloud Solutions Provider with offices in Dubai and Bangalore, delivering 200+ Dynamics 365 implementations globally.',
  alternates: { canonical: 'https://aplicatech.com/about' },
}

const milestones = [
  { year: '2010', event: 'Founded in Dubai as a Microsoft NAV partner' },
  { year: '2015', event: 'Achieved Microsoft Gold Partner status' },
  { year: '2018', event: 'Launched E-Property 365 and E-Construct 365 proprietary modules' },
  { year: '2020', event: 'Designated Microsoft Cloud Solutions Provider (CSP)' },
  { year: '2022', event: 'Expanded delivery team in Bangalore — 100+ certified resources' },
  { year: '2023', event: 'Designated Microsoft AI Cloud Partner' },
  { year: '2024', event: 'Reached 200+ global implementations across 15+ countries' },
]

const values = [
  { title: 'Clarity over complexity', body: 'We believe every client deserves to understand exactly what they are buying, and when they will get it.' },
  { title: 'Fixed-scope accountability', body: 'Our proposals contain no caveats that become expensive change requests. We absorb project risk — not our clients.' },
  { title: 'Outcome-led delivery', body: 'We measure success the same way our clients do: adoption, ROI, and operational efficiency — not project completion.' },
  { title: 'Long-term partnership', body: '98% client retention means we are not just focused on go-live. We help clients grow their Dynamics investment over years.' },
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">About Aplica</p>
          <h1 className="font-display text-display-xl text-white">
            Deep expertise. Honest delivery. Long-term partnerships.
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Aplica Technology is a Microsoft-certified Dynamics 365 implementation partner operating globally from Dubai and Bangalore — with dedicated delivery capacity for UK and European clients.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { val: '200+', label: 'Implementations' },
              { val: '15+', label: 'Countries' },
              { val: '100+', label: 'Certified Resources' },
              { val: '98%', label: 'Client Retention' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <p className="text-4xl font-bold text-white">{s.val}</p>
                <p className="mt-1 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">Our mission</p>
            <h2 className="font-display text-display-md text-white">
              Make enterprise-grade ERP accessible to any business that needs it.
            </h2>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Too many businesses are priced out of high-quality Microsoft Dynamics implementations, or fail because they chose the wrong partner. We exist to close that gap — combining deep product expertise, transparent pricing, and a structured methodology that removes implementation risk.
            </p>
            <div className="mt-8 space-y-3">
              {['Microsoft Cloud Solutions Provider (CSP)', 'Microsoft AI Cloud Partner', 'ISO 27001 aligned delivery', '100+ certified architects and consultants'].map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle size={16} className="shrink-0 text-brand-400" />
                  {c}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-brand-300">Our values</p>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="mb-2 text-sm font-semibold text-white">{v.title}</h3>
                  <p className="text-sm text-slate-400">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl">
          <h2 className="mb-12 font-display text-display-sm text-white">Our journey</h2>
          <div className="relative">
            <div className="absolute left-20 top-0 hidden h-full w-px bg-gradient-to-b from-brand-500/60 to-transparent md:block" />
            <ol className="space-y-8">
              {milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-8">
                  <span className="w-16 shrink-0 text-right text-sm font-semibold text-brand-400">{m.year}</span>
                  <div className="relative mt-1 flex items-start gap-6">
                    <span className="relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-brand-500 bg-slate-900" />
                    <p className="text-sm text-slate-300">{m.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">Strategic Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['Microsoft', 'Godrej', 'Hexaware'].map((p) => (
              <div key={p} className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
                <span className="text-sm font-semibold text-slate-400">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-display-md text-white">Read to join 200+ businesses who transformed with Aplica?</h2>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
            >
              Start your transformation
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
