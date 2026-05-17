import Image from 'next/image'

const partners = [
  { label: 'Microsoft Solutions Partner' },
  { label: 'AI Cloud Partner' },
  { label: 'Certified CSP' },
  { label: 'ISO 27001 Certified' },
]

const clients = [
  'Seven Tides International',
  'AWJ Holding',
  'Albaddad Management',
  'Meridian Build Group',
  'Ashford Distribution',
  'GlobalTrade Holdings',
  'Reder Group',
]

function MicrosoftWindowsIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="0" y="0" width="6.5" height="6.5" fill="#F25022" />
      <rect x="7.5" y="0" width="6.5" height="6.5" fill="#7FBA00" />
      <rect x="0" y="7.5" width="6.5" height="6.5" fill="#00A4EF" />
      <rect x="7.5" y="7.5" width="6.5" height="6.5" fill="#FFB900" />
    </svg>
  )
}

export function TrustBar() {
  return (
    <section
      className="border-b border-slate-100 bg-white py-10"
      aria-label="Partner credentials and trusted clients"
    >
      <div className="container-xl space-y-8">

        {/* Headline */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Trusted by organisations across the UK, UAE &amp; Europe
        </p>

        {/* Partner badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2.5 rounded-full border border-slate-100 bg-slate-50 px-5 py-2.5"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
            >
              <MicrosoftWindowsIcon />
              <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
                {p.label}
              </span>
            </div>
          ))}
        </div>

        {/* Client logo marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
            style={{ background: 'linear-gradient(to left, white, transparent)' }}
          />

          <div className="flex overflow-hidden" aria-hidden>
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={`${c}-${i}`}
                  className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-100 bg-slate-50 px-5 py-2"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium text-slate-500 whitespace-nowrap">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
