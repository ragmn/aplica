import { ContactForm } from '@/components/common/ContactForm'
import { JsonLd } from '@/components/common/JsonLd'
import { faqSchema, homepageFaqs } from '@/lib/schema'

export function FinalCTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden section-padding"
      style={{ backgroundColor: '#131313' }}
    >
      <JsonLd data={faqSchema(homepageFaqs)} />

      {/* Background glow — CTA blue */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,108,247,0.10),transparent)]" />

      <div className="container-xl relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-5">Get started</p>
          <h2
            className="font-display font-extrabold text-white"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Start your Dynamics 365
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              transformation today.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-slate-400">
            Speak with a senior consultant within 24 hours. No sales pitch — just an honest conversation about your goals.
          </p>
        </div>

        <div className="mt-12 mx-auto max-w-xl">
          <ContactForm showCalendly />
        </div>

        {/* Trust signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            'Microsoft Certified CSP',
            '200+ implementations delivered',
            'UK & Europe time zone support',
            'Fixed-scope engagements',
          ].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: 'rgba(0,108,247,0.15)' }}
              >
                <span style={{ color: '#006CF7', fontSize: '0.6rem', fontWeight: 700 }}>✓</span>
              </div>
              <span className="text-xs font-medium text-slate-400">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
