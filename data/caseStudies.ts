import { CaseStudy } from '@/types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sdpl-manufacturing-mrp-d365',
    title: 'Smart MRP on D365 F&O Eliminates Production Delays for Automotive Parts Manufacturer',
    client: 'SJS Decoplast Pvt. Ltd.',
    country: 'India',
    industry: 'Manufacturing',
    image: '/images/case-studies/meridian-build.jpg',
    challenge:
      'SDPL, a high-volume automotive decorative components manufacturer, had core D365 Finance and Operations modules in place but no Master Planning. Planners managed capacity manually, subcontracting decisions were reactive, and production delays were a recurring operational risk.',
    solution:
      'We implemented a full MRP rollout on D365 Finance and Operations, covering finite capacity planning, demand forecasting, and a bespoke Smart Outsourcing engine that automatically converts delayed production orders into managed subcontractor purchase orders with vendor prioritisation and raw material shipment tracking.',
    results:
      'Production delays fell significantly. Smart Outsourcing replaced days of manual planner intervention with automated nightly batch processing. SDPL now runs daily MRP cycles with automated order firming and exception-based management.',
    metrics: [
      { label: 'Manual Planning Effort', value: '70', suffix: '% saved' },
      { label: 'Outsourcing Decisions', value: '100', suffix: '% automated' },
      { label: 'MRP Cycle', value: 'Daily', suffix: '' },
    ],
    testimonial: {
      quote:
        'What used to take our planners days to manage now runs automatically overnight. The Smart Outsourcing feature alone changed how we handle capacity peaks entirely.',
      author: 'Rajesh Kumar',
      role: 'Operations Director, SDPL',
    },
    tags: ['Manufacturing', 'D365 Finance and Operations', 'MRP', 'Supply Chain', 'India'],
  },
  {
    slug: 'food-manufacturer-d365-bc-traceability',
    title: 'D365 Business Central Delivers 20% Profitability Gain and Full Traceability for Food Manufacturer',
    client: 'Leading Coffee Manufacturer',
    country: 'India',
    industry: 'Food and Beverage',
    image: '/images/case-studies/seven-tides.jpg',
    challenge:
      'A high-volume coffee manufacturer running mixed Make-to-Stock and Make-to-Order production had no real-time profitability visibility. Reporting relied on Excel, quality was tracked manually across five production stages, and production variances only surfaced after month-end close.',
    solution:
      'We deployed Microsoft Dynamics 365 Business Central with food manufacturing enhancements covering the complete production flow: Raw Material intake, QC, Roasting, Grinding, Blending, Packaging, and Dispatch, with integrated cost control, inbound quality management, and automated analytics at every stage.',
    results:
      'The business achieved a 20% improvement in profitability visibility, reporting that previously took days now runs in hours, and 100% stage-wise traceability across all production lines with zero reliance on spreadsheets.',
    metrics: [
      { label: 'Profitability Visibility', value: '20', suffix: '% gain' },
      { label: 'Reporting Speed', value: '2x', suffix: ' faster' },
      { label: 'Production Traceability', value: '100', suffix: '%' },
    ],
    testimonial: {
      quote:
        'We finally have real-time visibility into profitability at every production stage. The decision-making confidence this gives our leadership team is something we could not have imagined before.',
      author: 'Suresh Nair',
      role: 'Managing Director',
    },
    tags: ['Food and Beverage', 'D365 Business Central', 'Manufacturing', 'Traceability', 'India'],
  },
  {
    slug: 'gne-after-sales-service-d365-bc',
    title: 'Gajra New Energy Digitises End-to-End After-Sales Service on D365 Business Central',
    client: 'Gajra New Energy',
    country: 'India',
    industry: 'Renewable Energy',
    image: '/images/case-studies/awj-holding.jpg',
    challenge:
      'Gajra New Energy managed the complete after-sales service lifecycle for thousands of Growatt inverters using Excel spreadsheets. Tracking faulty units, spare parts consumed, engineer assignments, and manufacturer billing reconciliation was error-prone, slow, and entirely manual.',
    solution:
      'We designed and implemented a structured after-sales service solution within standard D365 Business Central, covering the full cycle: customer inward, engineer transfer, spare parts issue, post-repair dispatch, zero-value service invoicing, and automated manufacturer billing with a system-generated statement of account.',
    results:
      'Every step of the service lifecycle is now tracked inside D365. Manual effort and errors dropped sharply. Finance gained full visibility into service costs, spare consumption, and profitability per service order with all data centralised in a single system.',
    metrics: [
      { label: 'Process Visibility', value: '100', suffix: '% in ERP' },
      { label: 'Manual Errors', value: 'Near', suffix: ' zero' },
      { label: 'Reporting', value: 'Real', suffix: '-time' },
    ],
    testimonial: {
      quote:
        'Before Aplica, our service team was working from spreadsheets and chasing engineers by phone. Now the entire process runs inside Business Central and the billing to our manufacturer reconciles automatically.',
      author: 'Vikram Joshi',
      role: 'Service Operations Manager, Gajra New Energy',
    },
    tags: ['Renewable Energy', 'D365 Business Central', 'After-Sales Service', 'India'],
  },
  {
    slug: 'seven-tides-property-uae',
    title: 'Five-Year ERP Partnership Transforms Property Management Operations',
    client: 'Seven Tides International',
    country: 'UAE',
    industry: 'Real Estate',
    image: '/images/case-studies/seven-tides.jpg',
    challenge:
      'Seven Tides managed a multi-hundred-million luxury property portfolio across Dubai using disconnected spreadsheets and a legacy system, resulting in manual lease renewals, billing errors, and no portfolio-wide visibility.',
    solution:
      'We implemented E-Property 365 on Dynamics 365 Finance and Operations, automating lease lifecycle management, utility charge invoicing, and portfolio reporting across all assets.',
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
    tags: ['Real Estate', 'D365 Finance', 'UAE'],
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
      'AWJ now closes monthly group accounts in 2 days and the CFO has real-time P&L across all brands from a single dashboard.',
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
      'A mid-sized UK construction contractor was holding excess inventory across three sites with no real-time visibility into stock levels, leading to duplicate purchasing and project delays.',
    solution:
      'Implemented D365 Supply Chain Management with site-level warehouse management, mobile scanning, and AI-driven demand planning integrated with project timelines.',
    results:
      'Inventory carrying costs fell 32%, stockouts dropped to near zero, and procurement lead times were cut by 40%.',
    metrics: [
      { label: 'Inventory Cost Reduction', value: '32', suffix: '%' },
      { label: 'Procurement Lead Time', value: '40', suffix: '% faster' },
      { label: 'Stockout Incidents', value: '94', suffix: '% reduction' },
    ],
    tags: ['Construction', 'D365 SCM', 'UK'],
  },
  {
    slug: 'bank-integration-d365-bc',
    title: 'Automated API Bank Integration Eliminates 70% of Manual Reconciliation Effort',
    client: 'Leading Multinational Services Company',
    country: 'India',
    industry: 'Financial Services',
    image: '/images/case-studies/seven-tides.jpg',
    challenge:
      'The client was manually processing high-volume bank transactions, including vendor payment uploads and bank statement reconciliation. This led to operational bottlenecks, payment delays, critical manual errors, and a complete lack of real-time visibility into bank balances and transaction statuses across multiple accounts.',
    solution:
      'We designed and deployed an end-to-end automated bank integration using secure API-based communication and SFTP folders between Dynamics 365 Business Central and leading corporate banks (HDFC and ICICI). The solution automates the generation and transmission of secure payment files from payment journals, automates inbound MT940 bank statement imports, and executes automated multi-factor reconciliation with custom exception handling and audit logging.',
    results:
      'Manual effort in processing vendor payments and monthly reconciliation dropped by 70%. Data accuracy reached near 100% with the elimination of duplicate postings. Transaction cycles were reduced to real-time, giving treasury immediate visibility into consolidated cash flows and strengthening internal controls.',
    metrics: [
      { label: 'Manual Reconciliation', value: '70', suffix: '% eliminated' },
      { label: 'Transaction Postings', value: '100', suffix: '% validated' },
      { label: 'Reconciliation Speed', value: 'Daily', suffix: ' automated' },
    ],
    testimonial: {
      quote:
        'Aplica developed a secure custom bank integration that completely transformed our treasury operations. Reconciling high-volume vendor payments used to take days of manual checking; now it runs automatically daily inside Business Central with high precision.',
      author: 'Bhadrajeet Sen',
      role: 'Finance & Accounts Manager',
    },
    tags: ['D365 Business Central', 'Bank Integration', 'APIs', 'Finance', 'India'],
  },
]
