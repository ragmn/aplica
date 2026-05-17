import Link from 'next/link'
import { ContactForm } from '@/components/common/ContactForm'
import { JsonLd } from '@/components/common/JsonLd'
import { faqSchema, homepageFaqs } from '@/lib/schema'
import { ArrowRight, Mail, Shield } from 'lucide-react'

const reassurances = [
  'No lock-in contracts',
  'UK-based team',
  'Microsoft certified',
  'Fixed-scope engagements',
]

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: '#0f172a' }}
      aria-labelledby="cta-heading"
    >
      <JsonLd data={faqSchema(homepageFaqs)} />

      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,108,247,0.15), transparent)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,108,247,0.4), transparent)' }}
        aria-hidden
      />

      <div className="container-xl relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Left: copy */}
          <div>
            <span className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400">
              <span className="inline-block h-px w-5 bg-blue-400" />
              Get Started
            </span>
            <h2
              id="cta-heading"
              className="mt-4 font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Ready to get the most from
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #6eaaff 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Microsoft 365?
              </span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Speak with a senior consultant within 24 hours. No sales pitch — just an honest
              conversation about your goals and how we can help.
            </p>

            {/* Reassurances */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {reassurances.map((r) => (
                <div key={r} className="flex items-center gap-2.5">
                  <Shield size={14} className="shrink-0 text-blue-400" aria-hidden />
                  <span className="text-sm font-medium text-slate-300">{r}</span>
                </div>
              ))}
            </div>

            {/* Email alternative */}
            <div className="mt-8 flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ background: 'rgba(0,108,247,0.15)' }}
              >
                <Mail size={15} className="text-blue-400" aria-hidden />
              </div>
              <div>
                <p className="text-sm text-slate-400">Prefer to email?</p>
                <a
                  href="mailto:hello@aplicatech.com"
                  className="text-sm font-semibold text-white hover:underline"
                >
                  hello@aplicatech.com
                </a>
              </div>
            </div>

            {/* Quick CTA row */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact#book"
                className="btn-primary"
                data-cta="footer-cta-primary"
              >
                Book Free Discovery Call
                <ArrowRight size={15} aria-hidden />
              </Link>
              <Link
                href="/case-studies"
                className="btn-ghost-dark"
                data-cta="footer-cta-secondary"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          {/* Right: contact form */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p className="mb-6 font-display text-lg font-bold text-white">
              Send us a message
            </p>
            <ContactForm showCalendly />
          </div>

        </div>
      </div>
    </section>
  )
}
