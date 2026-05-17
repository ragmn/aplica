import type { Metadata } from 'next'
import { Mail, Phone, Clock } from 'lucide-react'
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
    region: 'United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'uk@aplicatech.com',
    hours: 'Mon to Fri 9am to 6pm GMT',
    flag: '🇬🇧',
  },
  {
    region: 'Europe',
    phone: '+44 20 0000 0000',
    email: 'europe@aplicatech.com',
    hours: 'Mon to Fri 9am to 6pm CET',
    flag: '🇪🇺',
  },
  {
    region: 'UAE / Middle East',
    phone: '+971 55 7932435',
    email: 'sales@aplicatech.com',
    hours: 'Mon to Fri 9am to 6pm GST',
    flag: '🇦🇪',
  },
  {
    region: 'India',
    phone: '+91 80 23361469',
    email: 'sales@aplicatech.com',
    hours: 'Mon to Fri 9am to 6pm IST',
    flag: '🇮🇳',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }])} />
      <JsonLd data={faqSchema(contactFaqs)} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-24 pb-16"
        style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #fafcff 55%, #f5f0ff 100%)' }}
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,108,247,0.15) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="container-xl relative text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-5">Contact</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Talk to our team.
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            A senior Dynamics 365 consultant will respond within 24 hours. Direct access to our
            architects, not a call centre.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div id="book" className="lg:col-span-3">
            <div
              className="rounded-2xl bg-white p-8"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 32px rgba(0,0,0,0.08)' }}
            >
              <h2 className="mb-2 text-xl font-bold text-slate-900">Send us a message</h2>
              <p className="mb-8 text-sm text-slate-500">
                Prefer to book directly?{' '}
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Pick a time on our calendar
                </a>
              </p>
              <ContactForm showCalendly />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5 lg:col-span-2">
            {/* What to expect */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
            >
              <h3 className="mb-4 text-sm font-bold text-slate-900">What happens next</h3>
              <ol className="space-y-4">
                {[
                  'We review your message and assign the right consultant within 2 hours.',
                  'You receive a personalised response (not a template) within 24 hours.',
                  'We schedule a 30-minute discovery call at your convenience.',
                  'You receive a scope and proposal within 5 business days.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-blue-600"
                      style={{ background: '#eff6ff' }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Offices */}
            <div
              className="rounded-2xl bg-white p-6"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
            >
              <h3 className="mb-4 text-sm font-bold text-slate-900">Regional contacts</h3>
              <div className="space-y-5">
                {offices.map((o) => (
                  <div key={o.region} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <p className="mb-2 text-sm font-semibold text-slate-700">
                      {o.flag} {o.region}
                    </p>
                    <div className="space-y-1">
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors">
                        <Phone size={10} /> {o.phone}
                      </a>
                      <a href={`mailto:${o.email}`} className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors">
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
      <section className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl max-w-3xl">
          <span className="eyebrow mb-4">FAQ</span>
          <h2
            className="mt-4 mb-10 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Common questions
          </h2>
          <div className="divide-y divide-slate-100">
            {contactFaqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer items-start justify-between gap-4 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {question}
                  <span className="mt-0.5 shrink-0 text-lg leading-none text-blue-500 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
