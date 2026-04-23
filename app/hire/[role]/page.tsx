import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Users, Award } from 'lucide-react'

type Role = 'erp-engineers' | 'devops-engineers' | 'frontend-developers' | 'backend-developers' | 'ai-engineers'

interface RoleData {
  title: string
  subtitle: string
  heroHeadline: string
  description: string
  skills: string[]
  deliverables: string[]
  seniority: { level: string; yoe: string; rate: string }[]
  faqs: { q: string; a: string }[]
  color: string
  metaTitle: string
  metaDescription: string
}

const roleData: Record<Role, RoleData> = {
  'erp-engineers': {
    title: 'Hire ERP Engineers',
    subtitle: 'Microsoft Dynamics 365 Specialists',
    heroHeadline: 'D365 engineers who ship — not just configure.',
    description:
      'Our Dynamics 365 engineers are certified across F&O, CE, and the Power Platform. Whether you need a functional consultant to drive a go-live, an AL/X++ developer to extend standard modules, or an integration architect to connect D365 to your third-party ecosystem — we have certified resources ready to deploy.',
    skills: ['D365 Finance & Operations', 'D365 Customer Engagement (CRM)', 'Power Platform (Apps, Automate, BI)', 'AL / X++ development', 'Azure DevOps for D365 pipelines', 'Dual-write & Dataverse integration', 'LCS deployment & lifecycle management'],
    deliverables: [
      'Full-cycle D365 implementation & configuration',
      'Custom module & extension development (AL/X++)',
      'Integration build (Logic Apps, Data Factory, APIM)',
      'Reporting & Power BI embedded analytics',
      'Upgrade & migration from legacy AX / NAV',
      'Managed support & L2/L3 incident resolution',
    ],
    seniority: [
      { level: 'Functional Consultant', yoe: '3–6 yrs', rate: 'From £550 / day' },
      { level: 'Senior Developer', yoe: '5–9 yrs', rate: 'From £650 / day' },
      { level: 'Solution Architect', yoe: '8+ yrs', rate: 'From £850 / day' },
    ],
    faqs: [
      { q: 'Are your ERP engineers Microsoft certified?', a: 'Yes. All D365 resources hold active Microsoft Learn certifications (MB-300, MB-500, MB-800 or equivalent). Certificates are available on request.' },
      { q: 'Can engineers work in our timezone?', a: 'We can match timezone overlap for UK, US, or UAE teams. Overlapping hours of 9am–1pm or 2pm–6pm GMT are standard.' },
      { q: 'What engagement models are available?', a: 'Monthly retainer (dedicated full-time), time & materials (hourly tracked), or fixed-scope delivery packages.' },
    ],
    color: '#006CF7',
    metaTitle: 'Hire Certified D365 ERP Engineers | Aplica Technology',
    metaDescription: 'Hire pre-vetted Microsoft Dynamics 365 engineers — functional consultants, AL/X++ developers, and solution architects — on flexible monthly engagement models.',
  },
  'devops-engineers': {
    title: 'Hire DevOps Engineers',
    subtitle: 'Microsoft Azure & Cloud Infrastructure',
    heroHeadline: 'Azure DevOps engineers who own delivery pipelines end-to-end.',
    description:
      'From CI/CD pipeline design to infrastructure-as-code and container orchestration on Azure Kubernetes Service — our DevOps engineers are Azure-certified and experienced in enterprise-grade cloud environments. Ideal for scaling engineering teams that need reliable, automated delivery without hiring full-time.',
    skills: ['Azure DevOps (Pipelines, Boards, Repos)', 'Terraform / Bicep / ARM templates', 'Azure Kubernetes Service (AKS)', 'GitHub Actions & GitOps', 'Azure Monitor, Log Analytics & Sentinel', 'Docker & container registry management', 'Azure Policy & governance frameworks'],
    deliverables: [
      'CI/CD pipeline design and implementation',
      'Infrastructure-as-code (Terraform / Bicep) authoring',
      'Container orchestration with AKS',
      'Cloud cost optimisation and FinOps reviews',
      'Security hardening and Azure Policy enforcement',
      'Observability setup (dashboards, alerts, on-call runbooks)',
    ],
    seniority: [
      { level: 'DevOps Engineer', yoe: '3–5 yrs', rate: 'From £500 / day' },
      { level: 'Senior DevOps Engineer', yoe: '5–8 yrs', rate: 'From £620 / day' },
      { level: 'Cloud Architect', yoe: '8+ yrs', rate: 'From £800 / day' },
    ],
    faqs: [
      { q: 'Do engineers hold Azure certifications?', a: 'Yes — AZ-400 (DevOps Engineer Expert), AZ-104, and AZ-305 are among the certifications our team holds.' },
      { q: 'Can you help with Azure landing zone setup?', a: 'Absolutely. We follow the Cloud Adoption Framework and can deliver full landing zone design, governance, and deployment.' },
      { q: 'Is on-call support included?', a: 'On-call rotas are available as an add-on to standard retainer engagements — scoped to agreed SLAs.' },
    ],
    color: '#0078D4',
    metaTitle: 'Hire Azure DevOps Engineers | Aplica Technology',
    metaDescription: 'Hire AZ-400 certified Azure DevOps and cloud infrastructure engineers. CI/CD pipelines, AKS, Terraform, and GitOps for enterprise-grade delivery.',
  },
  'frontend-developers': {
    title: 'Hire Frontend Developers',
    subtitle: 'React, Next.js & Power Apps',
    heroHeadline: 'UI engineers who care about performance and design fidelity.',
    description:
      'Our frontend developers build fast, accessible, and polished web interfaces — whether that is a customer-facing Next.js portal, a Power Apps canvas app embedded in Dynamics 365, or a complex data visualisation dashboard backed by Azure APIs. All engineers are TypeScript-first and up to date with React 18+ patterns.',
    skills: ['React 18 / Next.js 15 (App Router)', 'TypeScript (strict mode)', 'Tailwind CSS / CSS-in-JS', 'Power Apps (canvas & model-driven)', 'Azure Static Web Apps & CDN', 'Storybook & component library design', 'WCAG 2.1 accessibility compliance'],
    deliverables: [
      'Frontend architecture design and implementation',
      'Component library and design system build',
      'Power Apps canvas and model-driven apps',
      'Portal and self-service UI for D365 customers',
      'Performance audits and Core Web Vitals remediation',
      'Integration of REST/GraphQL APIs into UI',
    ],
    seniority: [
      { level: 'Frontend Developer', yoe: '2–4 yrs', rate: 'From £420 / day' },
      { level: 'Senior Frontend Engineer', yoe: '5–8 yrs', rate: 'From £580 / day' },
      { level: 'Lead / UI Architect', yoe: '8+ yrs', rate: 'From £720 / day' },
    ],
    faqs: [
      { q: 'Do you work with design handoffs (Figma)?', a: 'Yes. Our frontend engineers are experienced in Figma-to-code workflows and can flag design inconsistencies before implementation begins.' },
      { q: 'Can you build Power Apps for our Dynamics tenant?', a: 'Yes — Power Apps canvas, model-driven, and portal development are all within scope for our frontend team.' },
      { q: 'How do you handle state management at scale?', a: 'Engineers are proficient in Zustand, Redux Toolkit, and TanStack Query — matched to project complexity rather than defaulting to heavy libraries.' },
    ],
    color: '#8B5CF6',
    metaTitle: 'Hire React & Frontend Developers | Aplica Technology',
    metaDescription: 'Hire TypeScript-first React and Next.js frontend engineers. Power Apps, portal development, and component libraries for enterprise Microsoft ecosystems.',
  },
  'backend-developers': {
    title: 'Hire Backend Developers',
    subtitle: '.NET, Node.js & Azure APIs',
    heroHeadline: 'Backend engineers who build for scale, security, and observability.',
    description:
      'Our .NET and Node.js engineers design and deliver robust REST and GraphQL APIs, microservices architectures, and Azure-native event-driven systems. All backend engineers are familiar with the Microsoft Azure PaaS ecosystem and have experience integrating directly with Dynamics 365 and the Dataverse API.',
    skills: ['.NET 8 / C# / ASP.NET Core', 'Node.js / TypeScript (Express, Fastify)', 'Azure Functions & Logic Apps', 'Azure Service Bus & Event Grid', 'SQL Server / Azure SQL / Cosmos DB', 'Azure API Management (APIM)', 'OAuth 2.0 / OpenID Connect / Managed Identity'],
    deliverables: [
      'REST and GraphQL API design and delivery',
      'Microservices architecture on Azure Container Apps',
      'Azure Functions and serverless workflow automation',
      'Dynamics 365 / Dataverse API integration',
      'Database design, query optimisation, and migrations',
      'Security review and identity (AAD / Entra ID) integration',
    ],
    seniority: [
      { level: 'Backend Developer', yoe: '2–4 yrs', rate: 'From £430 / day' },
      { level: 'Senior Backend Engineer', yoe: '5–8 yrs', rate: 'From £580 / day' },
      { level: 'Backend / API Architect', yoe: '8+ yrs', rate: 'From £750 / day' },
    ],
    faqs: [
      { q: 'Can backend engineers integrate with our D365 instance?', a: 'Yes. Our engineers are familiar with the Dataverse Web API, OData endpoints, and the D365 plugin / custom action framework.' },
      { q: 'Do you follow security best practices?', a: 'All APIs are built with OWASP Top 10 mitigations, Azure Managed Identity for service-to-service auth, and Key Vault for secret management.' },
      { q: 'Can you scale an existing .NET codebase?', a: 'Absolutely. Engineers can step into existing repos and contribute from the first sprint, following your established patterns and branching strategy.' },
    ],
    color: '#10B981',
    metaTitle: 'Hire .NET & Backend Developers | Aplica Technology',
    metaDescription: 'Hire senior .NET and Node.js backend engineers experienced in Azure APIs, microservices, Dynamics 365 integration, and Dataverse platform development.',
  },
  'ai-engineers': {
    title: 'Hire AI Engineers',
    subtitle: 'Azure AI, Copilot & LLM Specialists',
    heroHeadline: 'AI engineers who build production systems — not demos.',
    description:
      'Our AI engineers specialise in Microsoft-stack AI: extending Dynamics 365 with Copilot Studio, building RAG pipelines on Azure AI Search and Azure OpenAI, and deploying Semantic Kernel-powered agents. Every engagement is scoped around measurable business outcomes — not technology exploration.',
    skills: ['Azure OpenAI Service (GPT-4o, embeddings)', 'Copilot Studio & M365 Copilot extensibility', 'Semantic Kernel (C# / Python)', 'Azure AI Search (RAG pipelines)', 'Azure AI Document Intelligence', 'Azure Machine Learning & MLOps', 'Python / LangChain / LlamaIndex'],
    deliverables: [
      'Copilot Studio agent design and deployment',
      'Custom Copilot extensions for Dynamics 365',
      'RAG pipeline build on Azure AI Search + OpenAI',
      'Document parsing and classification with Azure AI',
      'AI-powered process automation with Power Automate + GPT',
      'LLMOps setup: monitoring, cost tracking, evaluation',
    ],
    seniority: [
      { level: 'AI Engineer', yoe: '2–4 yrs', rate: 'From £550 / day' },
      { level: 'Senior AI / ML Engineer', yoe: '5–8 yrs', rate: 'From £700 / day' },
      { level: 'AI Solutions Architect', yoe: '8+ yrs', rate: 'From £900 / day' },
    ],
    faqs: [
      { q: 'Do you have experience with Azure OpenAI in regulated industries?', a: 'Yes. We have delivered AI solutions in financial services and healthcare where data residency and audit trails were mandatory requirements.' },
      { q: 'Can you build Copilot extensions for our existing D365 modules?', a: 'Absolutely. Copilot Studio plugins and Microsoft Graph connectors for D365 are a core capability of our AI team.' },
      { q: 'How do you measure AI project success?', a: 'We define KPIs upfront: time saved per workflow, accuracy rates, cost-per-query, and adoption metrics — not just model benchmarks.' },
    ],
    color: '#F59E0B',
    metaTitle: 'Hire Azure AI & Copilot Engineers | Aplica Technology',
    metaDescription: 'Hire specialist AI engineers for Azure OpenAI, Copilot Studio, RAG pipelines, and Semantic Kernel. Production-ready AI for Microsoft Dynamics 365 environments.',
  },
}

export async function generateStaticParams() {
  return (Object.keys(roleData) as Role[]).map((role) => ({ role }))
}

export async function generateMetadata({ params }: { params: Promise<{ role: string }> }): Promise<Metadata> {
  const { role } = await params
  const data = roleData[role as Role]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://aplicatech.com/hire/${role}` },
  }
}

export default async function HireRolePage({ params }: { params: Promise<{ role: string }> }) {
  const { role } = await params
  const data = roleData[role as Role]
  if (!data) notFound()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-32 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-30" />
        <div className="container-xl relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-300">{data.subtitle}</p>
          <h1 className="font-display text-display-xl text-white">{data.heroHeadline}</h1>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">{data.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact#hire"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)', boxShadow: '0 4px 20px rgba(0,108,247,0.30)' }}
            >
              Request a shortlist
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/hire"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/40 hover:text-white"
            >
              View all roles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-white/5 bg-slate-900 py-8">
        <div className="container-xl">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: Clock, text: 'Shortlist within 48 hours' },
              { icon: Award, text: 'Verified certifications' },
              { icon: Users, text: 'Dedicated, not shared resources' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-slate-400">
                <Icon size={15} className="text-brand-400" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills + Deliverables */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-brand-300">Technical skills</p>
            <ul className="space-y-3">
              {data.skills.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle size={15} className="mt-0.5 shrink-0 text-brand-400" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-brand-300">What they deliver</p>
            <ul className="space-y-3">
              {data.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle size={15} className="mt-0.5 shrink-0 text-brand-400" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Seniority / rates */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">Engagement options</p>
          <h2 className="mb-10 font-display text-display-sm text-white">Transparent indicative rates</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {data.seniority.map((s) => (
              <div
                key={s.level}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="mb-3 h-1 w-8 rounded-full" style={{ backgroundColor: data.color }} />
                <h3 className="mb-1 text-sm font-semibold text-white">{s.level}</h3>
                <p className="mb-4 text-xs text-slate-500">{s.yoe} experience</p>
                <p className="text-lg font-bold text-white">{s.rate}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            Rates are indicative. Final pricing depends on seniority, engagement duration, and timezone requirements. All rates exclude VAT where applicable.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-slate-950">
        <div className="container-xl max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand-300">FAQs</p>
          <h2 className="mb-10 font-display text-display-sm text-white">Common questions</h2>
          <div className="space-y-6">
            {data.faqs.map((f) => (
              <div key={f.q} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="mb-2 text-sm font-semibold text-white">{f.q}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-slate-900">
        <div className="container-xl max-w-2xl text-center">
          <h2 className="font-display text-display-md text-white">Ready to hire a {data.title.replace('Hire ', '')}?</h2>
          <p className="mt-4 text-slate-400">
            Share your brief and our talent delivery team will come back with a matched shortlist within 48 hours.
          </p>
          <Link
            href="/contact#hire"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)', boxShadow: '0 4px 20px rgba(0,108,247,0.30)' }}
          >
            Request a shortlist
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
