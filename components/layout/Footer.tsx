import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import { footerLinks } from '@/data/navigation'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="container-xl py-16 md:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="group inline-flex items-center">
              <Image
                src="/logo.png"
                alt="Aplica Technology"
                width={1486}
                height={567}
                style={{ height: '2.25rem', width: 'auto' }}
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Microsoft Dynamics 365 implementation partner for SMBs and Enterprises across the UK,
              Europe, UAE and India. Certified CSP and AI Cloud Partner.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/aplica-technology"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/50 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <a
                href="https://twitter.com/aplicatech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/50 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="mailto:hello@aplicatech.com"
                aria-label="Email us"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-brand-500/50 hover:text-white"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Microsoft badge */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <div className="h-4 w-4 rounded-sm bg-white flex items-center justify-center text-[8px] font-bold text-brand-600">M</div>
                <span className="text-xs text-slate-400">Microsoft Cloud Solutions Provider</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Solutions
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Industries
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact quick links */}
            <div className="mt-8 space-y-2">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
                Contact
              </h3>
              <a
                href="tel:+442000000000"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Phone size={12} />
                UK / Europe: +44 20 0000 0000
              </a>
              <a
                href="mailto:hello@aplicatech.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Mail size={12} />
                hello@aplicatech.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            © {year} Aplica Technology. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
