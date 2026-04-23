import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { industries } from '@/data/industries'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Industry Solutions — D365 for Construction, Distribution, Real Estate & More',
  description:
    'Microsoft Dynamics 365 solutions tailored to your industry: Construction, Trade & Distribution, Property Management, E-Commerce, Financial Services, and Manufacturing.',
  alternates: { canonical: 'https://aplicatech.com/industries' },
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Industries', href: '/industries' }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">Industries</p>
          <h1 className="font-display text-display-xl text-white">
            Your industry. Your solution. Not a generic template.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            We go deeper than generic ERP partners. Our pre-built industry accelerators and vertical-specific expertise mean faster go-lives and better adoption.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          {/* Visually hidden h2 bridges h1 → h3 for heading order */}
          <h2 className="sr-only">Industries we serve</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-brand-500/30 hover:bg-white/[0.06]"
              >
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-400">{ind.subtitle}</p>
                <ArrowRight size={14} className="mt-4 text-brand-400 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl">
          <div className="space-y-28">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                id={ind.id}
                className="grid gap-12 lg:grid-cols-2 lg:items-start"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">
                    {ind.subtitle}
                  </p>
                  <h2 className="font-display text-display-sm text-white">{ind.title}</h2>
                  <p className="mt-4 leading-relaxed text-slate-400">{ind.description}</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-red-400">
                        Challenges
                      </p>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                        Our Solutions
                      </p>
                      <ul className="space-y-2">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
                  >
                    {ind.cta}
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Visual */}
                <div
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <span className="font-display text-3xl text-slate-700">{ind.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-950 text-center">
        <div className="container-xl">
          <h2 className="font-display text-display-md text-white">Don&apos;t see your industry?</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            We&apos;ve deployed Dynamics 365 across 20+ industry verticals. Talk to us — we likely have experience exactly where you need it.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            Talk to a specialist
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
