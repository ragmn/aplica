'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { CaseStudy } from '@/types'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  index?: number
}

export function CaseStudyCard({ caseStudy, index = 0 }: CaseStudyCardProps) {
  // Lead with the strongest metric
  const lead = caseStudy.metrics[0]

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      className="group flex flex-col overflow-hidden"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '3rem',        // island radius per Fluid Monolith spec
        color: '#0f172a',
      }}
    >
      {/* Image — fills upper part */}
      <div className="relative h-52 overflow-hidden" style={{ borderRadius: '3rem 3rem 0 0' }}>
        <Image
          src={caseStudy.image}
          alt={caseStudy.client}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Very light gradient over image — keeps text legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Tags on image */}
        <div className="absolute left-5 bottom-5 flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold text-white"
            style={{ backgroundColor: '#006CF7', backdropFilter: 'blur(8px)' }}
          >
            {caseStudy.industry}
          </span>
          <span
            className="rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}
          >
            {caseStudy.country}
          </span>
        </div>
      </div>

      {/* Content body */}
      <div className="flex flex-1 flex-col p-8">

        {/* Client name eyebrow */}
        <p className="mb-2 text-xs font-bold uppercase tracking-widest" style={{ color: '#006CF7' }}>
          {caseStudy.client}
        </p>

        {/* Card headline */}
        <h3 className="mb-5 text-xl font-bold leading-snug text-slate-900 group-hover:text-slate-700 transition-colors">
          {caseStudy.title}
        </h3>

        {/* Lead metric — BIG editorial number */}
        <div
          className="mb-5 rounded-2xl p-5"
          style={{ backgroundColor: '#f8fafc' }}
        >
          <p
            className="font-display font-extrabold leading-none"
            style={{
              fontSize: '3rem',
              letterSpacing: '-0.03em',
              backgroundImage: 'linear-gradient(135deg, #3b82f6 0%, #006CF7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {lead.value}{lead.suffix}
          </p>
          <p className="mt-1 text-sm font-medium text-slate-500">{lead.label}</p>
        </div>

        {/* Supporting metrics — compact chips */}
        {caseStudy.metrics.length > 1 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {caseStudy.metrics.slice(1).map((m) => (
              <div
                key={m.label}
                className="rounded-xl px-3 py-2"
                style={{ backgroundColor: '#f1f5f9' }}
              >
                <span className="text-sm font-bold text-slate-800">
                  {m.value}{m.suffix}
                </span>
                <span className="ml-1.5 text-xs text-slate-500">{m.label}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA link */}
        <div className="mt-auto">
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            aria-label={`Read the ${caseStudy.client} case study`}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#006CF7' }}
          >
            Read the case study
            <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
