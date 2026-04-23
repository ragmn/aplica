import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { getAllInsights } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Insights — Microsoft Dynamics 365 Blog & Guides',
  description:
    'Expert articles, guides, and comparisons on Microsoft Dynamics 365 implementation, licensing, and ERP strategy for UK and European businesses.',
  alternates: { canonical: 'https://aplicatech.com/insights' },
}

const categoryColors: Record<string, string> = {
  TOFU: 'text-sky-400 bg-sky-400/10',
  MOFU: 'text-violet-400 bg-violet-400/10',
  BOFU: 'text-emerald-400 bg-emerald-400/10',
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
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">Insights</p>
          <h1 className="font-display text-display-xl text-white max-w-2xl">
            Expert thinking on Dynamics 365.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">
            Guides, comparisons, and strategic advice from the team behind 200+ ERP implementations.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding bg-slate-950">
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
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-brand-500/30 hover:bg-white/[0.06]"
                >
                  {/* Category */}
                  <span
                    className={`mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${categoryColors[post.category] ?? ''}`}
                  >
                    <Tag size={10} />
                    {categoryLabels[post.category] ?? post.category}
                  </span>

                  <h2 className="mb-3 text-lg font-semibold leading-snug text-white group-hover:text-brand-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} />
                      {post.readingTime} min
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-400 transition-all group-hover:gap-2">
                    Read article <ArrowRight size={13} />
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
