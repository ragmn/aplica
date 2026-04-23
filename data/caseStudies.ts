import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'seven-tides-property-uae',
    title: 'Five-Year ERP Partnership Transforms Property Management Operations',
    client: 'Seven Tides International',
    country: 'UAE',
    industry: 'Real Estate',
    image: '/images/case-studies/seven-tides.jpg',
    challenge:
      'Seven Tides managed a £400M+ luxury property portfolio across Dubai using disconnected spreadsheets and a legacy system, resulting in manual lease renewals, billing errors, and no portfolio-wide visibility.',
    solution:
      'We implemented E-Property 365 on Dynamics 365 Finance & Operations, automating lease lifecycle management, utility charge invoicing, and portfolio reporting across all assets.',
    results:
      'Seven Tides achieved real-time portfolio visibility, eliminated billing disputes, and reduced month-end close from 12 days to 3 days.',
    metrics: [
      { label: 'Month-End Close', value: '75', suffix: '% faster' },
      { label: 'Billing Disputes', value: '90', suffix: '% reduction' },
      { label: 'Partnership Length', value: '5', suffix: ' years' },
    ],
    testimonial: {
      quote:
        'Aplica stood out as being knowledgeable, flexible, nimble and cost effective. Their implementation exceeded our expectations.',
      author: 'Mohammed Al-Shariff',
      role: 'Head of IT, Seven Tides International',
    },
    tags: ['Real Estate', 'D365 Finance', 'E-Property 365', 'UAE'],
  },
  {
    slug: 'awj-holding-digital-transformation',
    title: 'Multi-Entity ERP Transformation Across 12 Hospitality Brands',
    client: 'AWJ Holding',
    country: 'UAE',
    industry: 'Hospitality',
    image: '/images/case-studies/awj-holding.jpg',
    challenge:
      'AWJ Holding operated 12 restaurant brands with separate, siloed accounting systems. Consolidation took weeks and provided no real-time cross-entity visibility for leadership.',
    solution:
      'Deployed D365 Finance across all 12 legal entities with a unified chart of accounts, inter-company posting, and consolidated Power BI reporting.',
    results:
      'AWJ now closes monthly group accounts in 2 days and CFO has real-time P&L across all brands from a single dashboard.',
    metrics: [
      { label: 'Group Close Time', value: '85', suffix: '% faster' },
      { label: 'Entities Unified', value: '12', suffix: ' brands' },
      { label: 'Data Accuracy', value: '99.8', suffix: '%' },
    ],
    testimonial: {
      quote:
        'The consolidation capability alone justified the entire investment. Our CFO now has answers in seconds, not days.',
      author: 'Ahmad Hariri',
      role: 'Group CFO, AWJ Holding',
    },
    tags: ['Hospitality', 'D365 Finance', 'Multi-Entity', 'UAE'],
  },
  {
    slug: 'uk-construction-d365-scm',
    title: 'D365 Supply Chain Reduces Inventory Costs by 32% for UK Contractor',
    client: 'Meridian Build Group',
    country: 'UK',
    industry: 'Construction',
    image: '/images/case-studies/meridian-build.jpg',
    challenge:
      'A mid-sized UK construction contractor was holding £2.1M in excess inventory across three sites with no real-time visibility into stock levels, leading to duplicate purchasing and project delays.',
    solution:
      'Implemented D365 Supply Chain Management with site-level warehouse management, mobile scanning, and AI-driven demand planning integrated with project timelines.',
    results:
      'Inventory carrying costs fell 32%, stockouts dropped to near zero, and procurement lead times were cut by 40%.',
    metrics: [
      { label: 'Inventory Cost Reduction', value: '32', suffix: '%' },
      { label: 'Procurement Lead Time', value: '40', suffix: '% faster' },
      { label: 'Stockout Incidents', value: '94', suffix: '% reduction' },
    ],
    tags: ['Construction', 'D365 SCM', 'UK', 'E-Construct 365'],
  },
]
