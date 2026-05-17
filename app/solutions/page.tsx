import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { services } from '@/data/services'
import { implementationSteps } from '@/data/content'
import { ProcessTimeline } from '@/components/common/ProcessTimeline'
import { JsonLd } from '@/components/common/JsonLd'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'
import { homepageFaqs } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Solutions — ERP, CRM and Cloud Consulting',
  description:
    'Explore Aplica\'s full suite of Microsoft Dynamics 365 solutions: Implementation, CRM, Finance and Operations, Supply Chain, Integration, and Managed Support. UK and Europe certified CSP.',
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
          <span className="eyebrow mb-5">Our Services</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Every Dynamics 365 capability.
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              One trusted partner.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-500">
            From first ERP to complex global rollouts. Aplica delivers with a structured methodology,
            a certified team, and clear accountability at every stage.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link href="#smb" className="btn-primary">
              SMB Solutions
              <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="#enterprise" className="btn-ghost">
              Enterprise Solutions
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Service deep-dives */}
      <section className="section-padding bg-white">
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
                  <span className="eyebrow mb-4">{`0${i + 1}`}</span>
                  <h2
                    className="mt-4 font-display font-extrabold text-slate-900"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
                  >
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-500">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.benefits.map((b) => (
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
                    href="/contact"
                    className="btn-primary mt-8 inline-flex"
                  >
                    Discuss this solution
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>

                {/* Visual panel */}
                <div
                  className={`rounded-3xl p-10 flex items-center justify-center aspect-video ${i % 2 === 1 ? 'lg:order-1' : ''}`}
                  style={{
                    background: 'linear-gradient(135deg, #f0f7ff 0%, #eff6ff 100%)',
                    boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)',
                  }}
                >
                  <span
                    className="font-display text-2xl font-bold text-center leading-snug"
                    style={{ color: '#006CF7', opacity: 0.4 }}
                  >
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SMB section */}
      <section id="smb" className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">For SMBs</span>
            <h3
              className="mt-4 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              100-Day Fast Track. Go live with confidence.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Business Central and D365 Sales packages designed for growing businesses. Fixed scope,
              fast delivery, no surprises.
            </p>
          </div>
          <div className="mt-12">
            <ProcessTimeline steps={implementationSteps} className="max-w-2xl" />
          </div>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            Get your Fast Track proposal
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* Enterprise section */}
      <section id="enterprise" className="section-padding bg-white">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">For Enterprise</span>
            <h3
              className="mt-4 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Global scale. Risk-managed delivery.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Multi-entity consolidation, legacy migration from AX, NAV or GP, complex integrations,
              and global rollouts with a dedicated solution architect and hypercare post go-live.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              'Multi-region rollouts',
              'Complex integrations',
              'Legacy migration',
              'Custom localisations',
              'Dedicated architect',
              'Hypercare support',
            ].map((f) => (
              <div
                key={f}
                className="rounded-2xl p-5"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <div
                  className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: '#eff6ff' }}
                >
                  <Check size={13} style={{ color: '#006CF7' }} aria-hidden />
                </div>
                <p className="text-sm font-semibold text-slate-700">{f}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn-ghost mt-10 inline-flex">
            Book an executive briefing
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl max-w-3xl">
          <span className="eyebrow mb-4">FAQ</span>
          <h3
            className="mt-4 mb-10 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Frequently asked questions
          </h3>
          <div className="divide-y divide-slate-100">
            {solutionsFaqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="mt-0.5 shrink-0 transition-transform group-open:rotate-45 text-blue-500 text-lg leading-none">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
