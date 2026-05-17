import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { footerLinks } from '@/data/navigation'

function MicrosoftWindowsIcon({ size = 14 }: { size?: number }) {
  const half = size * 0.46
  const gap = size * 0.07
  const q = half - gap / 2

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <rect x="0" y="0" width={q} height={q} fill="#F25022" />
      <rect x={q + gap} y="0" width={q} height={q} fill="#7FBA00" />
      <rect x="0" y={q + gap} width={q} height={q} fill="#00A4EF" />
      <rect x={q + gap} y={q + gap} width={q} height={q} fill="#FFB900" />
    </svg>
  )
}

const trustBadges = [
  'Microsoft Solutions Partner',
  'GDPR Compliant',
  'ICO Registered',
  'ISO 27001 Certified',
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 bg-white" role="contentinfo">

      {/* Main footer grid */}
      <div className="container-xl py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">

          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Aplica homepage" className="inline-block">
              <span className="inline-block rounded" style={{ background: '#000', padding: '10px' }}>
                <Image
                  src="/logo.png"
                  alt="Aplica Technology"
                  width={1486}
                  height={567}
                  style={{ height: '1.875rem', width: 'auto', display: 'block' }}
                />
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-500" style={{ maxWidth: '16rem' }}>
              Microsoft 365 implementation partner for organisations across the UK and Europe.
              Certified CSP and AI Cloud Partner.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="https://www.linkedin.com/company/aplica-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Aplica on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-700"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href="https://twitter.com/aplicatech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Aplica on X (Twitter)"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-700"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="mailto:hello@aplicatech.com"
                aria-label="Email Aplica"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-700"
              >
                <Mail size={15} aria-hidden />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold text-slate-700">Monthly M365 insights</p>
              <div className="flex overflow-hidden rounded-full border border-slate-200">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-3.5 py-2 text-xs text-slate-700 outline-none placeholder:text-slate-400"
                  aria-label="Email for newsletter"
                />
                <button
                  className="shrink-0 rounded-full px-4 py-2 text-xs font-bold text-white"
                  style={{ background: '#006CF7' }}
                  type="button"
                  aria-label="Subscribe to newsletter"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Services
            </h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Solutions */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Solutions
            </h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Company
            </h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mb-3 mt-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              Resources
            </h2>
            <ul className="space-y-2.5" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact
            </h2>
            <div className="space-y-3">
              <a
                href="tel:+442000000000"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <Phone size={13} aria-hidden />
                +44 20 0000 0000
              </a>
              <a
                href="mailto:hello@aplicatech.com"
                className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                <Mail size={13} aria-hidden />
                hello@aplicatech.com
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/contact#book"
                className="btn-primary w-full justify-center text-sm"
                data-cta="footer-book-call"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-slate-100">
        <div className="container-xl py-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              {trustBadges.map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <MicrosoftWindowsIcon size={12} />
                  <span className="text-xs font-medium text-slate-400">{b}</span>
                </div>
              ))}
            </div>

            {/* Legal links */}
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="text-xs text-slate-400 hover:text-slate-700 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="container-xl py-4">
          <p className="text-center text-xs text-slate-400">
            © {year} Aplica Technology Ltd. All rights reserved. Registered in England &amp; Wales.
          </p>
        </div>
      </div>

    </footer>
  )
}
