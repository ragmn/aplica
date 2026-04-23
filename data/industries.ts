import { Industry } from '@/types'

export const industries: Industry[] = [
  {
    id: 'construction',
    title: 'Construction & Real Estate',
    subtitle: 'Built for project-driven businesses',
    description:
      'Manage BOQ creation, subcontractor payments, project cost tracking, and compliance with our E-Construct 365 accelerator — built on D365 Finance & Operations.',
    icon: 'Building2',
    image: '/images/industries/construction.jpg',
    challenges: [
      'Manual BOQ and subcontractor tracking in spreadsheets',
      'Cost overruns due to poor project visibility',
      'Complex multi-site payroll and compliance',
    ],
    solutions: [
      'E-Construct 365: industry-specific project module',
      'Real-time cost vs. budget dashboards',
      'Automated subcontractor invoice matching',
    ],
    cta: 'See E-Construct 365',
  },
  {
    id: 'distribution',
    title: 'Trade & Distribution',
    subtitle: 'Inventory precision at scale',
    description:
      'Gain real-time stock visibility across warehouses, automate replenishment, and shrink order cycle times with D365 Supply Chain Management.',
    icon: 'Truck',
    image: '/images/industries/distribution.jpg',
    challenges: [
      'Stockouts and excess inventory eating margin',
      'Manual order processing causing fulfilment delays',
      'Limited visibility across multiple warehouse locations',
    ],
    solutions: [
      'Warehouse Management with mobile scanning',
      'AI-driven demand forecasting',
      'Automated PO generation on reorder triggers',
    ],
    cta: 'Explore Distribution Solutions',
  },
  {
    id: 'real-estate',
    title: 'Property Management',
    subtitle: 'Lease-to-cash, automated',
    description:
      'Manage residential and commercial portfolios with E-Property 365 — covering lease management, utility charge invoicing, and occupancy reporting.',
    icon: 'Home',
    image: '/images/industries/real-estate.jpg',
    challenges: [
      'Manual lease renewals and rent escalations',
      'Utility billing errors and disputes',
      'Fragmented reporting across property portfolios',
    ],
    solutions: [
      'E-Property 365: end-to-end lease lifecycle',
      'Automated utility invoice generation',
      'Portfolio performance dashboards',
    ],
    cta: 'See E-Property 365',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    subtitle: 'Order-to-cash, unified',
    description:
      'Connect your online storefront to Dynamics 365 for real-time inventory, automated fulfilment, and unified customer 360 across channels.',
    icon: 'ShoppingCart',
    image: '/images/industries/ecommerce.jpg',
    challenges: [
      'Disconnected online and in-store inventory',
      'Manual order fulfilment causing shipping errors',
      'No unified customer view across channels',
    ],
    solutions: [
      'E-Comm 365: Shopify/WooCommerce connector',
      'Automated order routing and fulfilment',
      'Unified customer 360 with purchase history',
    ],
    cta: 'Explore Retail Solutions',
  },
  {
    id: 'financial-services',
    title: 'Financial Services',
    subtitle: 'Compliance-first architecture',
    description:
      'Deploy D365 Finance with UK MTD, GDPR, FCA, and EU regulatory-compliant configurations — multi-entity and IFRS reporting structures.',
    icon: 'Shield',
    image: '/images/industries/financial-services.jpg',
    challenges: [
      'Manual regulatory reporting consuming analyst time',
      'Audit trails scattered across disconnected systems',
      'Currency consolidation errors in multi-entity reports',
    ],
    solutions: [
      'Pre-configured UK MTD, EU VAT, and IFRS reporting',
      'Automated audit trail and document management',
      'Multi-currency, multi-entity consolidation',
    ],
    cta: 'Explore Finance Solutions',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    subtitle: 'Production floor to boardroom',
    description:
      'Connect your production floor to finance with D365 Manufacturing — MRP, production orders, quality control, and costing in one platform.',
    icon: 'Factory',
    image: '/images/industries/manufacturing.jpg',
    challenges: [
      'Disconnected production and financial systems',
      'Manual BOM management and costing errors',
      'Limited quality control visibility',
    ],
    solutions: [
      'MRP and production order automation',
      'Bill of Materials and routing management',
      'Quality control gates with non-conformance tracking',
    ],
    cta: 'Explore Manufacturing Solutions',
  },
]
