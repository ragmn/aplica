import { BookOpen, Calculator, ClipboardCheck, type LucideIcon } from 'lucide-react'
import { LeadMagnetForm } from '@/components/common/LeadMagnetForm'
import { leadMagnets } from '@/data/content'

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Calculator,
  ClipboardCheck,
}

export function LeadMagnetsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: '#1b1b1b' }}>
      <div className="container-xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4">Free resources</p>
          <h2
            className="font-display font-extrabold text-white"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            Build your business case.
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Start for free.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
            Download our expert guides and tools — built for UK and European decision-makers evaluating Dynamics 365.
          </p>
        </div>

        {/* Cards — white island cards on dark surface */}
        <div className="grid gap-8 md:grid-cols-3">
          {leadMagnets.map((asset) => {
            const Icon = iconMap[asset.icon] ?? BookOpen
            return (
              <div
                key={asset.id}
                className="flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '2rem',
                  color: '#0f172a',
                }}
              >
                {/* Icon */}
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: 'rgba(0,108,247,0.08)' }}
                >
                  <Icon size={22} style={{ color: '#006CF7' }} />
                </div>

                {/* Category pill */}
                <span
                  className="mb-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold capitalize"
                  style={{ backgroundColor: 'rgba(0,82,179,0.08)', color: '#0052b3' }}
                >
                  {asset.category}
                </span>

                <h3 className="mb-3 text-lg font-bold text-slate-900">
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
      </div>
    </section>
  )
}
