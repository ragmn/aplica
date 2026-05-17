import Link from 'next/link'
import { BookOpen, Calculator, ClipboardCheck, FileText, type LucideIcon } from 'lucide-react'
import { LeadMagnetForm } from '@/components/common/LeadMagnetForm'
import { leadMagnets } from '@/data/content'

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  ClipboardCheck,
  FileText,
}

const resourceTypes = [
  { label: 'Blog & Insights', href: '/insights', icon: '▤', desc: 'Expert commentary on Dynamics 365, ERP strategy, and digital transformation for European businesses.' },
  { label: 'Webinars & Events', href: '/insights#webinars', icon: '▶', desc: 'Live and on-demand sessions from our Microsoft D365-certified consultants.' },
  { label: 'Licensing Guide', href: '/insights#licensing', icon: '▦', desc: 'Cut through Dynamics 365 licensing complexity with our plain-English guide.' },
]

export function LeadMagnetsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="resources-heading">
      <div className="container-xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow mb-5">Free Resources</span>
            <h2
              id="resources-heading"
              className="mt-5 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Make the right ERP decision.
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Start with our free guides.
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-500">
              Practical resources for European finance and operations leaders evaluating Dynamics 365.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 hover:underline"
          >
            Browse all resources →
          </Link>
        </div>

        {/* Downloadable guides */}
        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {leadMagnets.map((asset) => {
            const Icon = iconMap[asset.icon] ?? BookOpen
            return (
              <div
                key={asset.id}
                className="flex flex-col rounded-3xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: '#eff6ff' }}
                >
                  <Icon size={22} style={{ color: '#006CF7' }} aria-hidden />
                </div>

                {/* Category */}
                <span
                  className="mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold capitalize"
                  style={{ background: '#eff6ff', color: '#006CF7' }}
                >
                  {asset.category}
                </span>

                <h3 className="mb-3 font-display text-lg font-bold text-slate-900">
                  {asset.title}
                </h3>
                <p className="mb-7 flex-1 text-sm leading-relaxed text-slate-500">
                  {asset.description}
                </p>

                <LeadMagnetForm
                  assetId={asset.id}
                  assetTitle={asset.title}
                  fileName={asset.fileName}
                />
              </div>
            )
          })}
        </div>

        {/* Resource type links */}
        <div className="grid gap-4 sm:grid-cols-3">
          {resourceTypes.map((rt) => (
            <Link
              key={rt.label}
              href={rt.href}
              className="flex items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              style={{ background: '#f8faff', border: '1px solid #dbeafe' }}
            >
              <span className="text-2xl leading-none" aria-hidden>{rt.icon}</span>
              <div>
                <p className="mb-1 font-semibold text-slate-900">{rt.label}</p>
                <p className="text-sm text-slate-500">{rt.desc}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
