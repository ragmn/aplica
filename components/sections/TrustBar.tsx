const partners = [
  { label: 'Microsoft CSP',             icon: '⊞' },
  { label: 'Microsoft AI Cloud Partner',icon: '⊞' },
  { label: 'ISO 27001 Certified',        icon: '⊞' },
  { label: 'Microsoft Gold Partner',    icon: '⊞' },
]

const clients = [
  'Seven Tides International',
  'AWJ Holding',
  'Albaddad Management',
  'Meridian Build Group',
  'Ashford Distribution',
  'GlobalTrade Holdings',
]

export function TrustBar() {
  return (
    <section
      className="py-10"
      style={{ backgroundColor: '#131313', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="container-xl space-y-8">

        {/* Trust headline */}
        <p
          className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
        >
          Trusted by enterprise teams across UK, UAE &amp; GCC
        </p>

        {/* Partner badges — glass pills row */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.09)',
              }}
            >
              {/* Microsoft Windows logo approximation */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <rect x="0" y="0" width="6.5" height="6.5" fill="#fff" opacity="0.85" />
                <rect x="7.5" y="0" width="6.5" height="6.5" fill="#fff" opacity="0.85" />
                <rect x="0" y="7.5" width="6.5" height="6.5" fill="#fff" opacity="0.85" />
                <rect x="7.5" y="7.5" width="6.5" height="6.5" fill="#fff" opacity="0.85" />
              </svg>
              <span className="text-xs font-medium text-slate-300 whitespace-nowrap">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Client marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
            style={{ background: 'linear-gradient(to right, #131313, transparent)' }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
            style={{ background: 'linear-gradient(to left, #131313, transparent)' }}
          />

          <div className="flex overflow-hidden">
            <div className="marquee-track">
              {[...clients, ...clients].map((c, i) => (
                <div
                  key={`${c}-${i}`}
                  className="flex shrink-0 items-center gap-3 rounded-full px-6 py-2.5"
                  style={{
                    background: 'rgba(255,255,255,0.035)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
                  }}
                  aria-hidden={i >= clients.length}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: '#006CF7' }}
                  />
                  <span className="text-sm font-medium text-slate-400 whitespace-nowrap">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
