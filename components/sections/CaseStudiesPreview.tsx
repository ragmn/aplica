'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesPreview() {
  return (
    <section className="section-padding bg-white" aria-labelledby="case-studies-heading">
      <div className="container-xl">

        {/* Section header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">Client Impact</span>
            <h2
              id="case-studies-heading"
              className="mt-5 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Transformation stories,
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                not feature lists.
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Real projects. Quantified outcomes. Every engagement is built on a fixed scope
              and a commitment to measurable results.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:text-slate-900"
          >
            All case studies
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>

        {/* Case study cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.08)' }}
            >
              {/* Top: sector + challenge */}
              <div className="p-8 pb-0">
                <div className="mb-5 flex items-center gap-3">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold"
                    style={{ background: '#eff6ff', color: '#006CF7' }}
                  >
                    {cs.industry}
                  </span>
                  <span className="text-xs text-slate-400">{cs.country}</span>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Challenge
                  </p>
                  <p className="text-sm leading-relaxed text-slate-700">{cs.challenge}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="mx-8 my-4 h-px bg-slate-100" />

              {/* Results */}
              <div className="px-8 pb-6">
                <div className="mb-4 flex items-center gap-2">
                  <TrendingUp size={14} style={{ color: '#006CF7' }} aria-hidden />
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Results
                  </p>
                </div>

                {/* Metrics */}
                <div className="mb-6 grid grid-cols-3 gap-3">
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="flex flex-col rounded-2xl p-3"
                      style={{ background: '#f8faff' }}
                    >
                      <p
                        className="font-display font-extrabold text-slate-900"
                        style={{ fontSize: '1.25rem', lineHeight: 1, letterSpacing: '-0.02em' }}
                      >
                        {m.value}
                        <span className="text-sm font-bold text-blue-600">{m.suffix}</span>
                      </p>
                      <p className="mt-1 text-[10px] font-medium leading-tight text-slate-400">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial (if available) */}
                {cs.testimonial && (
                  <blockquote className="mb-6 rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm italic leading-relaxed text-slate-600">
                      &ldquo;{cs.testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-2 text-xs font-semibold text-slate-500">
                      {cs.testimonial.author}, {cs.testimonial.role}
                    </footer>
                  </blockquote>
                )}

                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-all hover:gap-3"
                  aria-label={`Read full case study: ${cs.title}`}
                >
                  Read the full story <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats footnote */}
        <div
          className="mt-12 rounded-3xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #f0f7ff 0%, #f8faff 100%)', border: '1px solid #bfdbfe' }}
        >
          <p className="font-display text-lg font-bold text-slate-900">
            200+ successful implementations across 15+ countries.{' '}
            <Link href="/case-studies" className="text-blue-600 underline underline-offset-2">
              See all case studies →
            </Link>
          </p>
        </div>

      </div>
    </section>
  )
}
