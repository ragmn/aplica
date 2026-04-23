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
    'Explore real-world Microsoft Dynamics 365 implementations delivered by Aplica across construction, property, distribution, and more. UK, Europe, UAE & India clients.',
  alternates: { canonical: 'https://aplicatech.com/case-studies' },
}

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Case Studies', href: '/case-studies' }])} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">
            Case Studies
          </p>
          <h1 className="font-display text-display-xl text-white">
            Proof in practice.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            200+ implementations delivered. Here are the stories behind the numbers.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900 text-center">
        <div className="container-xl">
          <h2 className="font-display text-display-md text-white">Ready to be our next success story?</h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-4 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
          >
            Start your implementation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
