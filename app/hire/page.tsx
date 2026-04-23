import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hire Dedicated Engineers — ERP, DevOps, AI & Full-Stack | Aplica Technology',
  description:
    'Hire pre-vetted, Microsoft-certified engineers on flexible engagement models. ERP consultants, DevOps engineers, frontend & backend developers, and AI specialists available within 5 business days.',
  alternates: { canonical: 'https://aplicatech.com/hire' },
}

const roles = [
  {
    slug: 'erp-engineers',
    title: 'ERP Engineers',
    subtitle: 'Microsoft Dynamics 365 Specialists',
    description:
      'Certified D365 architects, functional consultants, and AL/X++ developers for F&O, CE, and cross-module implementations.',
    skills: ['D365 F&O', 'D365 CRM / CE', 'Power Platform', 'AL / X++', 'Azure DevOps'],
    color: '#006CF7',
  },
  {
    slug: 'devops-engineers',
    title: 'DevOps Engineers',
    subtitle: 'Microsoft Azure & Cloud Infrastructure',
    description:
      'Azure-certified engineers for CI/CD pipelines, infrastructure-as-code, container orchestration, and cloud migrations.',
    skills: ['Azure DevOps', 'Terraform', 'Kubernetes', 'GitHub Actions', 'Azure Monitor'],
    color: '#0078D4',
  },
  {
    slug: 'frontend-developers',
    title: 'Frontend Developers',
    subtitle: 'React, Next.js & Power Apps',
    description:
      'UI engineers who ship production-grade web applications — from React/Next.js portals to Power Apps canvas and model-driven interfaces.',
    skills: ['React / Next.js', 'TypeScript', 'Power Apps', 'Tailwind CSS', 'Azure Static Web Apps'],
    color: '#8B5CF6',
  },
  {
    slug: 'backend-developers',
    title: 'Backend Developers',
    subtitle: '.NET, Node.js & Azure APIs',
    description:
      'Server-side engineers for REST/GraphQL API development, microservices architecture, and Azure service integrations.',
    skills: ['.NET / C#', 'Node.js', 'Azure Functions', 'SQL Server', 'Azure Service Bus'],
    color: '#10B981',
  },
  {
    slug: 'ai-engineers',
    title: 'AI Engineers',
    subtitle: 'Azure AI, Copilot & LLM Specialists',
    description:
      'AI practitioners who build production-ready Copilot extensions, RAG pipelines, and Azure AI-powered automations within your existing Dynamics 365 estate.',
    skills: ['Azure OpenAI', 'Copilot Studio', 'Semantic Kernel', 'Azure AI Search', 'Python / LangChain'],
    color: '#F59E0B',
  },
]

const process = [
  { step: '01', title: 'Share your brief', body: 'Tell us the role, stack, seniority level, and engagement model. Takes less than 5 minutes.' },
  { step: '02', title: 'We shortlist within 48 h', body: 'Our talent delivery team matches your brief against our certified resource pool and external partner network.' },
  { step: '03', title: 'Interview & select', body: 'You interview 2–3 shortlisted candidates. No placement fees — you only pay the agreed monthly rate.' },
  { step: '04', title: 'Onboard in 5 days', body: 'Contracts, NDAs, and access provisioning handled by us. Your engineer is ready to contribute from day one.' },
]

export default function HirePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">Hire Us</p>
          <h1 className="font-display text-display-xl text-white">
            Pre-vetted engineers. Deployed in 5 days.
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Extend your team with certified specialists across ERP, DevOps, custom development, and AI — on flexible monthly engagement models with zero recruitment overhead.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact#hire"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)', boxShadow: '0 4px 20px rgba(0,108,247,0.30)' }}
            >
              Tell us what you need
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Role cards */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl">
          <h2 className="mb-10 font-display text-display-sm text-white">Choose your specialist</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <Link
                key={r.slug}
                href={`/hire/${r.slug}`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div
                  className="mb-4 h-1 w-10 rounded-full"
                  style={{ backgroundColor: r.color }}
                />
                <h3 className="font-display text-lg font-semibold text-white">{r.title}</h3>
                <p className="mb-3 text-sm text-slate-400">{r.subtitle}</p>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{r.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.skills.map((s) => (
                    <span key={s} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-1 text-sm font-medium text-brand-400 group-hover:text-brand-300">
                  View details <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">How it works</p>
          <h2 className="mb-12 font-display text-display-sm text-white">From brief to deployed — in under a week</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="mb-3 text-3xl font-bold text-white/20">{p.step}</p>
                <h3 className="mb-2 text-sm font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl max-w-2xl text-center">
          <h2 className="font-display text-display-md text-white">Ready to extend your team?</h2>
          <p className="mt-4 text-slate-400">
            Share a brief and we'll come back with a shortlist of matched engineers within 48 hours.
          </p>
          <Link
            href="/contact#hire"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)', boxShadow: '0 4px 20px rgba(0,108,247,0.30)' }}
          >
            Start the conversation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
