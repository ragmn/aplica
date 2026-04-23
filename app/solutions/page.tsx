import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { implementationSteps } from '@/data/content'
import { ProcessTimeline } from '@/components/common/ProcessTimeline'
import { JsonLd } from '@/components/common/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { homepageFaqs } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Solutions — ERP, CRM & Cloud Consulting',
  description:
    'Explore Aplica\'s full suite of Microsoft Dynamics 365 solutions: Implementation, CRM Automation, Finance & Operations, Supply Chain, Integration, and Managed Support. UK & Europe certified CSP.',
  alternates: { canonical: 'https://aplicatech.com/solutions' },
}

const solutionsFaqs = homepageFaqs.slice(0, 5)

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Solutions', href: '/solutions' }])} />
      <JsonLd data={faqSchema(solutionsFaqs)} />
      {services.map((s) => (
        <JsonLd
          key={s.id}
          data={serviceSchema({ name: s.title, description: s.excerpt, serviceType: 'ERP Consulting' })}
        />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-40" />
        <div className="container-xl relative text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">Solutions</p>
          <h1 className="font-display text-display-xl text-white">
            Every Dynamics 365 capability. One trusted partner.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            From quick SMB deployments to complex global enterprise rollouts — Aplica delivers with a structured methodology, certified team, and clear accountability.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="#smb" className="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors">
              SMB Solutions
            </Link>
            <Link href="#enterprise" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40 transition-colors">
              Enterprise Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Service deep-dives */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className="grid gap-12 lg:grid-cols-2 lg:items-center"
              >
                {/* Text — alternating sides */}
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">
                    {`0${i + 1}`}
                  </p>
                  <h2 className="font-display text-display-sm text-white">{service.title}</h2>
                  <p className="mt-4 text-slate-400 leading-relaxed">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-slate-300">
                        <ArrowRight size={14} className="mt-1 shrink-0 text-brand-400" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
                  >
                    Discuss this solution
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Visual placeholder */}
                <div
                  className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-10 flex items-center justify-center aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <span className="text-4xl font-display text-slate-700">{service.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB section */}
      <section id="smb" className="section-padding bg-slate-900">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">For SMBs</p>
            <h3 className="font-display text-display-md text-white">100-Day Fast Track. Go live with confidence.</h3>
            <p className="mt-4 text-slate-400">Business Central and D365 Sales packages designed for growing businesses — fixed scope, fast delivery, no nasty surprises.</p>
          </div>
          <div className="mt-12">
            <ProcessTimeline steps={implementationSteps} className="max-w-2xl" />
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            Get your Fast Track proposal
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Enterprise section */}
      <section id="enterprise" className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">For Enterprise</p>
            <h3 className="font-display text-display-md text-white">Global scale. Risk-managed delivery.</h3>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Multi-entity consolidation, legacy migration from AX / NAV / GP, complex integrations, and global rollouts — with a dedicated solution architect and hypercare post go-live.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {['Multi-region rollouts', 'Complex integrations', 'Legacy migration', 'Custom localisations', 'Dedicated architect', 'Hypercare support'].map((f) => (
              <div key={f} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <ArrowRight size={14} className="mb-3 text-violet-400" />
                <p className="text-sm font-medium text-slate-200">{f}</p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/40 transition-colors"
          >
            Book an executive briefing
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl max-w-3xl">
          <h3 className="mb-10 font-display text-display-sm text-white">Frequently asked questions</h3>
          <div className="divide-y divide-white/10">
            {solutionsFaqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="mt-0.5 shrink-0 text-brand-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
