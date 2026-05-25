import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers at Aplica — Open Positions | D365 Consultants, Technical Roles and Sales',
  description:
    'Join Aplica Technology. Open positions for Microsoft Dynamics 365 F&O functional and technical consultants, Business Central specialists, CRM consultants, and sales roles across Bengaluru and Dubai.',
  alternates: { canonical: 'https://aplicatech.com/hire' },
}

const openPositions = [
  {
    id: 'fo-roles',
    category: 'D365 Finance and Operations',
    color: '#006CF7',
    roles: [
      {
        title: 'F&O SCM Functional Consultant',
        subtitle: 'SCM, Manufacturing, MRP, Landed Cost, ADWMS',
        location: 'Bengaluru (Hybrid)',
        experience: '4 to 6 years',
        description: 'Core SCM modules with deep knowledge in Manufacturing, MRP, Landed Cost, and Advanced Warehouse Management. Strong functional consulting skills including requirement gathering, UAT support, and client-facing delivery.',
      },
      {
        title: 'F&O Functional Lead',
        subtitle: 'Finance and SCM/PMA',
        location: 'Bengaluru (Hybrid)',
        experience: '5 to 8 years',
        description: 'End-to-end implementation leadership across Finance and SCM/PMA modules. Responsible for solution design, gap-fit analysis, team coordination, stakeholder management, and leading workshops independently.',
      },
      {
        title: 'F&O Finance Functional Consultant',
        subtitle: 'GL, AR, AP, Fixed Assets, Budgeting',
        location: 'Bengaluru (Hybrid)',
        experience: '4 to 6 years',
        description: 'Strong knowledge of Finance modules including GL, AR, AP, Bank, Fixed Assets, Budgeting, Financial Reporting and Taxation. Experience in requirement gathering, UAT, and client-facing engagements.',
      },
      {
        title: 'F&O Technical Consultant',
        subtitle: 'X++, SQL, Integrations, Customisations',
        location: 'Bengaluru (Hybrid)',
        experience: '4 to 8 years',
        description: 'Strong technical expertise in D365 F&O development including X++, SQL, integrations, extensions, data migration, LCS, and Azure DevOps. Ability to work independently with good client-handling skills.',
      },
      {
        title: 'Pre-Sales Consultant / Lead',
        subtitle: 'F&O, Client Presentations',
        location: 'Bengaluru (Hybrid)',
        experience: '5+ years',
        description: 'Work closely with sales teams to understand client requirements and present tailored D365 F&O solutions. Strong background in Finance and Operations required with excellent communication and presentation skills.',
      },
    ],
  },
  {
    id: 'bc-roles',
    category: 'Business Central',
    color: '#059142',
    roles: [
      {
        title: 'NAV / BC Functional Consultant',
        subtitle: 'Finance modules, Client Facing',
        location: 'Bengaluru (Hybrid)',
        experience: '4 to 7 years',
        description: 'Core Finance and other BC modules. Strong client-facing skills with ability to handle client engagements independently. Good communication skills required.',
      },
      {
        title: 'NAV / BC Technical Consultant',
        subtitle: 'CAL / AL Coding, Integrations',
        location: 'Bengaluru (Hybrid)',
        experience: '4 to 7 years',
        description: 'CAL and AL coding expertise with integration skills and solid NAV/BC development experience. Ability to build and maintain custom extensions and third-party integrations.',
      },
    ],
  },
  {
    id: 'dubai-roles',
    category: 'Dubai Opportunities',
    color: '#F59E0B',
    roles: [
      {
        title: 'Sales Manager, Dynamics 365',
        subtitle: 'ERP Sales, UAE and GCC',
        location: 'Dubai, UAE',
        experience: '5 to 15 years',
        description: 'Strong experience in ERP sales, specifically Dynamics 365. Proven track record in revenue generation, lead generation and client acquisition, solution positioning, and contract negotiation. Must have deep understanding of the UAE/GCC market.',
      },
      {
        title: 'D365 CRM Techno-Functional Consultant',
        subtitle: 'Sales, Customer Service, Field Service',
        location: 'Dubai, UAE',
        experience: '5 to 8 years',
        description: 'Configure and customise D365 CRM modules including Sales, Customer Service, and Field Service. Salary: AED 18,000 per month plus insurance and annual leave. UAE-based client-facing role.',
      },
      {
        title: 'F&O Techno-Functional Consultant',
        subtitle: 'Finance and Supply Chain',
        location: 'Dubai, UAE',
        experience: '5 to 8 years UAE experience',
        description: 'Proven expertise in Finance and Operations solutions with familiarity across Finance and Supply Chain domains. Salary: AED 18,000 per month plus insurance and annual leave.',
      },
    ],
  },
]

const perks = [
  'Fully remote and hybrid working options',
  'Microsoft certification support and study leave',
  'Exposure to international client projects (India, GCC, Europe)',
  'Fast career progression in a growing ERP consultancy',
  'Collaborative, senior-led delivery environment',
  'Competitive salary benchmarked to market rates',
]

export default function HirePage() {
  return (
    <>
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
          <span className="eyebrow mb-5">Careers</span>
          <h1
            className="mt-5 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
          >
            Join a team that
            <span
              className="block"
              style={{
                backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              delivers ERP at scale.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-500">
            We are growing fast. With 18 years of Dynamics 365 delivery across India, the GCC, and now
            Europe — Aplica is the right place for consultants who want meaningful work and real career growth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="mailto:hr@aplicatech.com" className="btn-primary">
              Apply Now
              <ArrowRight size={14} aria-hidden />
            </a>
            <a href="#open-positions" className="btn-ghost">
              View Open Positions
              <ArrowRight size={14} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Why join */}
      <section className="section-padding bg-white">
        <div className="container-xl">
          <span className="eyebrow mb-4">Why Aplica</span>
          <h2
            className="mt-4 mb-10 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            More than a job.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <div
                key={p}
                className="flex items-start gap-3 rounded-2xl p-5"
                style={{ background: '#f8faff', boxShadow: 'inset 0 0 0 1px rgba(0,108,247,0.10)' }}
              >
                <div
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ background: '#eff6ff' }}
                >
                  <Check size={11} style={{ color: '#006CF7' }} aria-hidden />
                </div>
                <span className="text-sm font-medium text-slate-700">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section id="open-positions" className="section-padding" style={{ background: '#f8faff' }}>
        <div className="container-xl">
          <span className="eyebrow mb-4">Open Positions</span>
          <h2
            className="mt-4 mb-14 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Find your role.
          </h2>

          <div className="space-y-16">
            {openPositions.map((group) => (
              <div key={group.id} id={group.id}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-1 w-8 rounded-full" style={{ backgroundColor: group.color }} />
                  <h3 className="font-display text-lg font-bold text-slate-900">{group.category}</h3>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {group.roles.map((role) => (
                    <div
                      key={role.title}
                      className="rounded-2xl bg-white p-6"
                      style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
                    >
                      <h4 className="font-display text-base font-bold text-slate-900">{role.title}</h4>
                      <p className="mb-3 text-xs font-medium text-slate-500">{role.subtitle}</p>
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          <MapPin size={10} aria-hidden />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          <Briefcase size={10} aria-hidden />
                          {role.experience}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-500">{role.description}</p>
                      <a
                        href="mailto:hr@aplicatech.com"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:underline"
                      >
                        Apply via email <ArrowRight size={12} aria-hidden />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-xl max-w-2xl">
          <span className="eyebrow mb-4">Get in Touch</span>
          <h2
            className="mt-4 font-display font-extrabold text-slate-900"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
          >
            Do not see the right role?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            We are always looking for talented D365 professionals. Send your CV and we will keep
            you in mind for future openings.
          </p>
          <a href="mailto:hr@aplicatech.com" className="btn-primary mt-8 inline-flex">
            Send your CV
            <ArrowRight size={14} aria-hidden />
          </a>
        </div>
      </section>
    </>
  )
}
