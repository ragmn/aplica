import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { industries } from '@/data/industries'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Industry Solutions — D365 for Manufacturing, Distribution, Real Estate and More',
  description:
    'Microsoft Dynamics 365 solutions tailored to your industry. Construction, Trade and Distribution, Property Management, Financial Services, and Manufacturing. 18 years of sector experience.',
  alternates: { canonical: 'https://aplicatech.com/industries' },
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Sectors', href: '/industries' }])} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-24 pb-20"
        style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #fafcff 55%, #f5f0ff 100%)' }}
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,108,247,0.15) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="container-xl relative text-center">
          <span className="eyebrow mb-5">Sectors We Serve</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Your industry. Your solution.
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Not a generic template.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            We go deeper than generic ERP partners. Our sector-specific expertise and pre-built
            industry accelerators mean faster go-lives and better adoption across your organisation.
          </p>
        </div>
      </section>

      {/* Industry grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <h2 className="sr-only">Industries we serve</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="group rounded-2xl p-6 transition-all hover:-translate-y-0.5"
                style={{
                  background: '#f8faff',
                  boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)',
                }}
              >
                <h3 className="mb-2 text-base font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  {ind.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{ind.subtitle}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-blue-600">
                  Learn more
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl">
          <div className="space-y-28">
            {industries.map((ind, i) => (
              <div
                key={ind.id}
                id={ind.id}
                className="grid gap-12 lg:grid-cols-2 lg:items-start"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="eyebrow mb-4">{ind.subtitle}</span>
                  <h2
                    className="mt-4 font-display font-extrabold text-slate-900"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
                  >
                    {ind.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-500">{ind.description}</p>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Challenges
                      </p>
                      <ul className="space-y-2.5">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        Our Solutions
                      </p>
                      <ul className="space-y-2.5">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2.5">
                            <div
                              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                              style={{ background: '#eff6ff' }}
                            >
                              <Check size={9} style={{ color: '#006CF7' }} aria-hidden />
                            </div>
                            <span className="text-sm text-slate-600">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary mt-8 inline-flex">
                    {ind.cta}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>

                {/* Visual panel */}
                <div
                  className={`rounded-3xl flex items-center justify-center aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #f0f7ff 0%, #eff6ff 100%)',
                    boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)',
                  }}
                >
                  <span
                    className="font-display text-2xl font-bold text-center leading-snug px-8"
                    style={{ color: '#006CF7', opacity: 0.35 }}
                  >
                    {ind.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-xl">
          <span className="eyebrow mb-5">Get in Touch</span>
          <h2
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Don&apos;t see your industry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-500">
            We have deployed Dynamics 365 across 20+ industry verticals. Talk to us and we will
            likely have experience exactly where you need it.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Talk to a specialist
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
