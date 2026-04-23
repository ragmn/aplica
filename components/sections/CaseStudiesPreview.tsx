import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CaseStudyCard } from '@/components/common/CaseStudyCard'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesPreview() {
  return (
    <section
      className="section-padding"
      style={{ backgroundColor: '#131313' }}
    >
      <div className="container-xl">

        {/* Section header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Client Impact</p>
            <h2
              className="font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              We didn&apos;t just implement ERP.
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We transformed businesses.
              </span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400 max-w-xl">
              Real projects. Measurable outcomes. Every engagement is built on a fixed scope
              and a commitment to results — not hours.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-slate-300 transition-all hover:text-white"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
          >
            All case studies
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        {/* White island cards on dark void */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
