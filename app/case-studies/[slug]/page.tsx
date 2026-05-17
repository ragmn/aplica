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
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="mb-4 text-lg font-bold text-slate-900">The Challenge</h2>
                <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-bold text-slate-900">Our Solution</h2>
                <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
              </div>
              <div>
                <h2 className="mb-4 text-lg font-bold text-slate-900">The Results</h2>
                <p className="text-slate-600 leading-relaxed">{cs.results}</p>
              </div>

              {/* Testimonial */}
              {cs.testimonial && (
                <figure
                  className="rounded-2xl p-8"
                  style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
                >
                  <p className="text-lg italic leading-relaxed text-slate-700">
                    &ldquo;{cs.testimonial.quote}&rdquo;
                  </p>
                  <figcaption className="mt-4">
                    <p className="text-sm font-bold text-slate-900">{cs.testimonial.author}</p>
                    <p className="text-xs text-slate-500">{cs.testimonial.role}</p>
                  </figcaption>
                </figure>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Metrics */}
              <div
                className="rounded-2xl p-6"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <h3 className="mb-5 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Key Metrics
                </h3>
                <div className="space-y-5">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <p
                        className="font-display font-extrabold text-slate-900"
                        style={{ fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                      >
                        {m.value}{m.suffix}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                className="rounded-2xl p-6"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Technologies and Services
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium text-slate-600"
                      style={{ background: '#eff6ff' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className="rounded-2xl p-6"
                style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.15)' }}
              >
                <p className="mb-3 text-sm font-bold text-slate-900">
                  Want results like these?
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm">
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
