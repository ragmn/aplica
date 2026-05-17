import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { getAllInsights } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Insights — Microsoft Dynamics 365 Blog and Guides',
  description:
    'Expert articles, guides, and comparisons on Microsoft Dynamics 365 implementation, licensing, and ERP strategy for UK and European businesses.',
  alternates: { canonical: 'https://aplicatech.com/insights' },
}

const categoryColors: Record<string, string> = {
  TOFU: 'text-sky-600 bg-sky-50',
  MOFU: 'text-violet-600 bg-violet-50',
  BOFU: 'text-emerald-600 bg-emerald-50',
}

const categoryLabels: Record<string, string> = {
  TOFU: 'Educational',
  MOFU: 'Evaluation',
  BOFU: 'Decision',
}

export default function InsightsPage() {
  const posts = getAllInsights().sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Insights', href: '/insights' }])} />

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
        <div className="container-xl relative">
          <span className="eyebrow mb-5">Insights</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900 max-w-2xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Expert thinking on Dynamics 365.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            Guides, comparisons, and strategic advice from the team behind 200+ ERP implementations.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          {posts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-slate-400">No posts yet — check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group flex flex-col rounded-2xl bg-white transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.08)' }}
                >
                  <div className="p-6">
                    {/* Category */}
                    <span
                      className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColors[post.category] ?? 'text-slate-600 bg-slate-100'}`}
                    >
                      <Tag size={10} aria-hidden />
                      {categoryLabels[post.category] ?? post.category}
                    </span>

                    <h2 className="mb-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} aria-hidden />
                        {post.readingTime} min
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-1 text-sm font-bold text-blue-600 transition-all group-hover:gap-2">
                      Read article <ArrowRight size={13} aria-hidden />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
