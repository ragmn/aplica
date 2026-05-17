import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getInsightBySlug, getAllInsightSlugs } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { LeadMagnetForm } from '@/components/common/LeadMagnetForm'
import { JsonLd } from '@/components/common/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const result = getInsightBySlug(slug)
  if (!result) return {}
  const { meta } = result
  return {
    title: meta.title,
    description: meta.excerpt,
    alternates: { canonical: `https://aplicatech.com/insights/${slug}` },
    openGraph: { images: [{ url: meta.coverImage }] },
  }
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params
  const result = getInsightBySlug(slug)
  if (!result) notFound()
  const { meta, content } = result

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: meta.title,
          description: meta.excerpt,
          url: `https://aplicatech.com/insights/${slug}`,
          author: meta.author,
          publishedAt: meta.publishedAt,
          image: meta.coverImage,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Insights', href: '/insights' },
          { name: meta.title, href: `/insights/${slug}` },
        ])}
      />

      {/* Cover */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src={meta.coverImage}
          alt={meta.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="container-xl absolute inset-0 flex flex-col justify-end pb-10 pt-32">
          <Link
            href="/insights"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            All insights
          </Link>
          <h1 className="font-display text-display-sm text-white md:text-4xl max-w-3xl">
            {meta.title}
          </h1>
          <div className="mt-4 flex items-center gap-5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {formatDate(meta.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} />
              {meta.readingTime} min read
            </span>
            <span>{meta.author}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="section-padding bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-3">
          {/* MDX content */}
          <div className="lg:col-span-2 prose-aplica">
            <MDXRemote source={content} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Tags */}
            {meta.tags.length > 0 && (
              <div
                className="rounded-2xl p-5"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Topics</p>
                <div className="flex flex-wrap gap-2">
                  {meta.tags.map((tag) => (
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
            )}

            {/* Inline lead magnet */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.15)' }}
            >
              <p className="mb-2 text-sm font-bold text-slate-900">
                Free: D365 Cost Guide (UK and Europe)
              </p>
              <p className="mb-4 text-xs text-slate-500">
                Download pricing benchmarks and TCO analysis.
              </p>
              <LeadMagnetForm
                assetId="cost-guide"
                assetTitle="D365 Cost Guide"
                fileName="d365-cost-guide.pdf"
              />
            </div>
          </aside>
        </div>
      </article>
    </>
  )
}
