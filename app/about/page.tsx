import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { JsonLd } from '@/components/common/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Aplica — Microsoft Dynamics 365 Partner | India, UAE and Europe',
  description:
    'Aplica Technology is a premier Microsoft Cloud Solutions Provider and Dynamics 365 partner serving EMEA and India. 18 years of ERP expertise, 200+ implementations, offices in Dubai and Bangalore.',
  alternates: { canonical: 'https://aplicatech.com/about' },
}

const milestones = [
  { year: '2006', event: 'Founded with a focus on Microsoft ERP solutions' },
  { year: '2010', event: 'Established as a Microsoft Dynamics NAV implementation partner' },
  { year: '2015', event: 'Achieved Microsoft Gold Partner status' },
  { year: '2018', event: 'Launched E-Property 365 and E-Construct 365 proprietary modules' },
  { year: '2020', event: 'Designated Microsoft Cloud Solutions Provider (CSP)' },
  { year: '2022', event: 'Expanded delivery team in Bangalore to 100+ certified resources' },
  { year: '2023', event: 'Designated Microsoft AI Cloud Partner' },
  { year: '2024', event: 'Reached 200+ global implementations across 15+ countries' },
  { year: '2025', event: 'Expanding European presence across UK, Germany, Netherlands and France' },
]

const values = [
  { title: 'Clarity over complexity', body: 'Every client deserves to understand exactly what they are buying and when they will get it. We write proposals without caveats.' },
  { title: 'Fixed-scope accountability', body: 'Our engagements contain no surprises that become expensive change requests. We absorb project risk, not our clients.' },
  { title: 'Outcome-led delivery', body: 'We measure success the same way our clients do: adoption, ROI, and operational efficiency. Not just project completion.' },
  { title: 'Long-term partnership', body: '98% client retention means we are not just focused on go-live. We help clients grow their Dynamics investment over years.' },
]

const offices = [
  {
    region: 'India',
    company: 'APLICA Technologies (India) Private Limited',
    address: '9th Avenue, No. 14, 3rd Cross, NS Iyengar Street, Seshadripuram, Bangalore 560 020',
    phone: '+91 80 23361469',
    email: 'sales@aplicatech.com',
    flag: '🇮🇳',
  },
  {
    region: 'Middle East',
    company: 'APLICA Technologies Co LLC',
    address: 'R 308 Building, Office No. 401, Next to UBL Bank, Bank Street, Dubai, UAE',
    phone: '+971 55 7932435',
    email: 'sales@aplicatech.com',
    flag: '🇦🇪',
  },
  {
    region: 'United Kingdom',
    company: 'Aplica Technology Ltd',
    address: 'United Kingdom',
    phone: '+44 20 0000 0000',
    email: 'uk@aplicatech.com',
    flag: '🇬🇧',
  }
]

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }])} />

      {/* Hero */}
      <section
        className="relative overflow-hidden pt-24 pb-20"
        style={{ background: 'linear-gradient(145deg, #f0f7ff 0%, #fafcff 55%, #f5f0ff 100%)' }}
      >
        <div
          className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,108,247,0.15) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="container-xl relative max-w-3xl">
          <span className="eyebrow mb-5">About Aplica</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Deep expertise.
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Honest delivery.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            Aplica is a premier Microsoft Cloud Solutions Provider and Dynamics 365 implementation partner,
            serving SMBs and enterprises across EMEA and India for over 18 years. We are now expanding
            our presence across the UK and Europe.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { val: '18+', label: 'Years of ERP experience' },
              { val: '200+', label: 'Implementations delivered' },
              { val: '100+', label: 'Certified consultants' },
              { val: '98%', label: 'Client retention rate' },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6 text-center"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <p
                  className="font-display font-extrabold text-slate-900"
                  style={{ fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.03em' }}
                >
                  {s.val}
                </p>
                <p className="mt-1.5 text-xs font-medium text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission + Values */}
      <section className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl grid gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow mb-4">Our Mission</span>
            <h2
              className="mt-4 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Make enterprise-grade ERP accessible to any business that needs it.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500">
              Too many businesses are priced out of high-quality Microsoft Dynamics implementations,
              or fail because they chose the wrong partner. We exist to close that gap by combining
              deep product expertise, transparent pricing, and a structured methodology that removes
              implementation risk.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Microsoft Cloud Solutions Provider (CSP)',
                'Microsoft AI Cloud Partner',
                'ISO 27001 aligned delivery',
                '100+ certified architects and consultants',
              ].map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <div
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                    style={{ background: '#eff6ff' }}
                  >
                    <Check size={11} style={{ color: '#006CF7' }} aria-hidden />
                  </div>
                  <span className="text-sm text-slate-600">{c}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="eyebrow mb-4">Our Values</span>
            <div className="mt-4 space-y-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl bg-white p-5"
                  style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.06)' }}
                >
                  <h3 className="mb-1.5 text-sm font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="section-padding bg-white">
        <div className="container-xl">
          <span className="eyebrow mb-4">Our Journey</span>
          <h2
            className="mt-4 mb-12 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            18 years in the making.
          </h2>
          <div className="relative">
            <div
              className="absolute left-20 top-0 hidden h-full w-px md:block"
              style={{ background: 'linear-gradient(to bottom, #006CF7, transparent)' }}
            />
            <ol className="space-y-8">
              {milestones.map((m) => (
                <li key={m.year} className="flex items-start gap-8">
                  <span className="w-16 shrink-0 text-right text-sm font-bold text-blue-600">{m.year}</span>
                  <div className="relative flex items-start gap-6">
                    <span
                      className="relative z-10 mt-1 h-3 w-3 shrink-0 rounded-full border-2"
                      style={{ borderColor: '#006CF7', backgroundColor: 'white' }}
                    />
                    <p className="text-sm text-slate-600">{m.event}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section id="offices" className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl">
          <span className="eyebrow mb-4">Our Offices</span>
          <h2
            className="mt-4 mb-10 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Global delivery. Local accountability.
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((o) => (
              <div
                key={o.region}
                className="rounded-2xl bg-white p-7"
                style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
              >
                <p className="mb-4 text-2xl">{o.flag}</p>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-600">{o.region}</p>
                <p className="mb-1 font-bold text-slate-900">{o.company}</p>
                <p className="mb-4 text-sm leading-relaxed text-slate-500">{o.address}</p>
                <div className="space-y-1">
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                    {o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                    {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-xl text-center">
          <span className="eyebrow mb-4">Strategic Partners</span>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            {['Microsoft', 'Godrej', 'Hexaware'].map((p) => (
              <div
                key={p}
                className="rounded-xl px-6 py-4"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <span className="text-sm font-semibold text-slate-600">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2
              className="font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Ready to join 200+ businesses who transformed with Aplica?
            </h2>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Start your transformation
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
