import { ServiceItem } from '@/types'

export const services: ServiceItem[] = [
  // ── ERP Solutions ────────────────────────────────────────────────────────
  {
    id: 'implementation',
    icon: 'Layers',
    category: 'erp',
    title: 'D365 Implementation',
    excerpt:
      'Full-cycle Dynamics 365 deployments delivered on time, on budget, with a proven 100-day Fast Track methodology.',
    description:
      'From requirements scoping to go-live, our certified architects deploy Finance, Supply Chain, Sales, and Customer Service modules across your organisation — reducing risk with pre-built industry configurations.',
    benefits: [
      'Fixed-scope, fixed-price engagements available',
      'Pre-built industry accelerators cut configuration time',
      '100-day Fast Track methodology for SMBs',
      'Dedicated project manager throughout',
    ],
    href: '/solutions#implementation',
  },
  {
    id: 'crm-automation',
    icon: 'BarChart3',
    category: 'erp',
    title: 'CRM Automation',
    excerpt:
      'Unify sales, marketing, and customer service with Dynamics 365 Sales and Customer Service.',
    description:
      'Eliminate manual follow-ups, automate lead scoring, and give your sales team real-time pipeline visibility — all inside Microsoft 365.',
    benefits: [
      'AI-driven lead scoring and next-best-action',
      'Seamless Outlook & Teams integration',
      'Omnichannel customer service hub',
      'Power BI dashboards out of the box',
    ],
    href: '/solutions#crm-automation',
  },
  {
    id: 'finance-operations',
    icon: 'TrendingUp',
    category: 'erp',
    title: 'Finance & Operations',
    excerpt:
      'Streamline financial consolidation, compliance, and reporting with D365 Finance.',
    description:
      'Replace disconnected spreadsheets with real-time financial intelligence — multi-currency, multi-entity, and compliant with UK Making Tax Digital, EU VAT, and IFRS.',
    benefits: [
      'UK MTD, EU VAT and IFRS compliant',
      'Multi-currency and multi-entity consolidation',
      'Automated bank reconciliation',
      'Real-time financial dashboards',
    ],
    href: '/solutions#finance-operations',
  },
  {
    id: 'supply-chain',
    icon: 'GitBranch',
    category: 'erp',
    title: 'Supply Chain Management',
    excerpt:
      'End-to-end supply chain visibility from procurement through fulfilment with D365 SCM.',
    description:
      'Reduce inventory costs, improve demand forecasting accuracy, and gain real-time supplier visibility with Dynamics 365 Supply Chain Management.',
    benefits: [
      'Demand forecasting with AI-powered planning',
      'Vendor management and PO automation',
      'Warehouse management and mobile scanning',
      'EDI and 3PL integrations',
    ],
    href: '/solutions#supply-chain',
  },
  {
    id: 'integration-migration',
    icon: 'Shuffle',
    category: 'erp',
    title: 'Integration & Migration',
    excerpt:
      'Connect Dynamics 365 to your existing systems, or migrate from AX, NAV, or GP cleanly.',
    description:
      'Our integration architects build robust, documented connections between D365 and your ERP, e-commerce, payroll, and BI platforms — with zero data loss migration paths.',
    benefits: [
      'Legacy AX, NAV, GP, and Salesforce migrations',
      'Power Automate and Azure Logic Apps connectors',
      'Clean data migration with validation gates',
      'Post-migration hypercare support',
    ],
    href: '/solutions#integration-migration',
  },
  {
    id: 'support',
    icon: 'Headphones',
    category: 'erp',
    title: 'Managed Support',
    excerpt:
      'Post-go-live support, training, and continuous optimisation — your partner for the long term.',
    description:
      'Annual Maintenance Contracts covering bug fixes, security patches, user training, minor enhancements, and strategic roadmap reviews — so you get maximum ROI from your investment.',
    benefits: [
      'Dedicated account manager',
      'SLA-backed response times (2h critical)',
      'Quarterly roadmap reviews',
      'User training and change management',
    ],
    href: '/solutions#support',
  },

  // ── Microsoft Power BI ────────────────────────────────────────────────────
  {
    id: 'power-bi',
    icon: 'PieChart',
    category: 'powerbi',
    title: 'Microsoft Power BI',
    excerpt:
      'Transform your D365 data into executive-grade dashboards and real-time insight across every business unit.',
    description:
      'We design and deploy Power BI reporting layers directly on top of your Dynamics 365 and Azure data estate — giving leadership clear, real-time visibility into finance, operations, and sales performance.',
    benefits: [
      'Pre-built D365 Finance & SCM report packs',
      'Role-specific dashboards (CFO, Ops, Sales)',
      'Azure Synapse / Dataverse integration',
      'Self-service analytics training',
    ],
    href: '/solutions#power-bi',
  },
  {
    id: 'power-bi-analytics',
    icon: 'Activity',
    category: 'powerbi',
    title: 'Data & Analytics Strategy',
    excerpt:
      'From data modelling to governed data lakehouse — we architect your Microsoft analytics estate end to end.',
    description:
      'We help mid-market and enterprise teams build a scalable analytics foundation on Azure — connecting ERP, CRM, HR, and e-commerce data into a single, governed source of truth.',
    benefits: [
      'Azure Data Factory & Synapse pipelines',
      'Semantic model design and governance',
      'KPI framework workshops',
      'Ongoing BAU report management',
    ],
    href: '/solutions#analytics',
  },

  // ── Web & Mobile Development ──────────────────────────────────────────────
  {
    id: 'power-apps',
    icon: 'Smartphone',
    category: 'webmobile',
    title: 'Power Apps & Portals',
    excerpt:
      'Custom low-code business apps and customer portals built on Microsoft Power Platform.',
    description:
      'Extend your Dynamics 365 investment with custom Power Apps — from mobile field-service tools to self-service customer portals that connect directly to your D365 data.',
    benefits: [
      'Canvas and model-driven app development',
      'D365 Customer Portal configuration',
      'Offline-capable mobile field apps',
      'Power Automate workflow integration',
    ],
    href: '/solutions#power-apps',
  },
  {
    id: 'web-development',
    icon: 'Globe',
    category: 'webmobile',
    title: 'Web & Mobile Development',
    excerpt:
      'Enterprise web and mobile applications built on Azure — designed to integrate natively with your D365 ecosystem.',
    description:
      'Our engineering team builds bespoke web and mobile applications on the Microsoft Azure stack — React frontends, .NET APIs, and Azure-hosted backends — all designed to speak natively with your Dynamics 365 environment.',
    benefits: [
      'React / Next.js web applications',
      'React Native cross-platform mobile apps',
      'Azure App Service + API Management',
      'D365 / Dataverse API integration',
    ],
    href: '/solutions#web-development',
  },
]
