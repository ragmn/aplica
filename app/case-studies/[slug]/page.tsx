import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: cs.title,
    description: cs.challenge,
    alternates: { canonical: `https://aplicatech.com/case-studies/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const countryFlag: Record<string, string> = { UK: '🇬🇧', US: '🇺🇸', UAE: '🇦🇪', India: '🇮🇳' }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: cs.client, href: `/case-studies/${slug}` },
        ])}
      />

      {/* Hero image */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={cs.image}
          alt={cs.client}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="container-xl absolute inset-0 flex flex-col justify-end pb-12 pt-32">
          <Link
            href="/case-studies"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            All case studies
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-brand-600/80 px-3 py-1 text-xs font-medium text-white">
              {cs.industry}
            </span>
            <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-300">
              {countryFlag[cs.country]} {cs.country}
            </span>
          </div>
          <p className="text-sm font-semibold text-brand-400 mb-2">{cs.client}</p>
          <h1 className="font-display text-display-sm text-white md:text-4xl max-w-3xl">
            {cs.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="mb-4 text-lg font-semibold text-brand-400">The Challenge</h2>
                <p className="text-slate-300 leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-brand-400">Our Solution</h2>
                <p className="text-slate-300 leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-semibold text-brand-400">The Results</h2>
                <p className="text-slate-300 leading-relaxed">{cs.results}</p>
              </div>

              {/* Testimonial */}
              {cs.testimonial && (
                <figure className="glass-card p-8">
                  <p className="text-xl italic text-slate-300 leading-relaxed">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <figcaption className="mt-4">
                    <p className="text-sm font-semibold text-white">{cs.testimonial.author}</p>
                    <p className="text-xs text-slate-400">{cs.testimonial.role}</p>
                  </figcaption>
                </figure>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Metrics */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Key Metrics
                </h3>
                <div className="space-y-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-3xl font-bold text-white">
                        {m.value}{m.suffix}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Technologies & Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-brand-500/30 bg-brand-500/5 p-6">
                <p className="mb-3 text-sm font-medium text-white">
                  Want results like these?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
                >
                  Start a conversation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
