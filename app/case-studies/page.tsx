import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import { CaseStudyCard } from '@/components/common/CaseStudyCard'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Case Studies — Dynamics 365 Implementation Results',
  description:
    'Real-world Microsoft Dynamics 365 implementations delivered by Aplica across manufacturing, food and beverage, renewable energy, real estate, hospitality, construction, and financial services. India, GCC and UK clients.',
  alternates: { canonical: 'https://aplicatech.com/case-studies' },
}

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }])} />

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
          <span className="eyebrow mb-5">Case Studies</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Proof in practice.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            200+ implementations delivered. Here are the stories behind the numbers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding text-center" style={{ background: '#f8faff' }}>
        <div className="container-xl">
          <span className="eyebrow mb-4">Get Started</span>
          <h2
            className="mt-4 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Ready to be our next success story?
          </h2>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Start your implementation
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </section>
    </>
  )
}
