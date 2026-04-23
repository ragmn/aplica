import type { Metadata } from 'next'
import { Mail, Phone, Clock, MapPin, Calendar } from 'lucide-react'
import { ContactForm } from '@/components/common/ContactForm'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema, faqSchema, homepageFaqs } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Contact Us — Talk to a Dynamics 365 Consultant',
  description:
    'Get in touch with Aplica Technology. Speak with a Dynamics 365 specialist within 24 hours. Serving clients in the UK, Europe, UAE, and India.',
  alternates: { canonical: 'https://aplicatech.com/contact' },
}

const contactFaqs = homepageFaqs.slice(-5)

const offices = [
  {
    region: '🇬🇧 United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'uk@aplicatech.com',
    hours: 'Mon–Fri 9am – 6pm GMT',
  },
  {
    region: '🇪🇺 Europe',
    phone: '+44 20 0000 0000',
    email: 'europe@aplicatech.com',
    hours: 'Mon–Fri 9am – 6pm CET',
  },
  {
    region: '🇦🇪 UAE / Middle East',
    phone: '+971 4 000 0000',
    email: 'uae@aplicatech.com',
    hours: 'Mon–Fri 9am – 6pm GST',
  },
  {
    region: '🇮🇳 India',
    phone: '+91 80 0000 0000',
    email: 'india@aplicatech.com',
    hours: 'Mon–Fri 9am – 6pm IST',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ])}
      />
      <JsonLd data={faqSchema(contactFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative text-center max-w-2xl mx-auto">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">
            Contact
          </p>
          <h1 className="font-display text-display-xl text-white">Talk to our team.</h1>
          <p className="mt-4 text-lg text-slate-400">
            A senior Dynamics 365 consultant will respond within 24 hours. No call centres — direct access to our architects.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div id="book" className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h2 className="mb-2 text-xl font-semibold text-white">Send us a message</h2>
              <p className="mb-8 text-sm text-slate-400">
                Prefer to book directly?{' '}
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-400 hover:text-brand-300"
                >
                  Pick a time on our calendar →
                </a>
              </p>
              <ContactForm showCalendly />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-2">
            {/* What to expect */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-sm font-semibold text-white">What happens next</h3>
              <ol className="space-y-4">
                {[
                  'We review your message and assign the right consultant within 2 hours.',
                  'You receive a personalised response (not a template) within 24 hours.',
                  'We schedule a 30-minute discovery call at your convenience.',
                  'You receive a scope and proposal within 5 business days.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/40 text-xs font-bold text-brand-400">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Offices */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-sm font-semibold text-white">Regional contacts</h3>
              <div className="space-y-5">
                {offices.map((o) => (
                  <div key={o.region} className="border-b border-white/5 pb-5 last:border-0 last:pb-0">
                    <p className="mb-2 text-sm font-medium text-slate-300">{o.region}</p>
                    <div className="space-y-1">
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                        <Phone size={10} /> {o.phone}
                      </a>
                      <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
                        <Mail size={10} /> {o.email}
                      </a>
                      <p className="flex items-center gap-2 text-xs text-slate-400">
                        <Clock size={10} /> {o.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl max-w-3xl">
          <h2 className="mb-10 font-display text-display-sm text-white">Common questions</h2>
          <div className="divide-y divide-white/10">
            {contactFaqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="mt-0.5 shrink-0 text-brand-400 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
