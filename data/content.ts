import { Stat, ProcessStep, LeadMagnet } from '@/types'

export const stats: Stat[] = [
  { value: 200, suffix: '+', label: 'Implementations Delivered' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 94, suffix: ' days', label: 'Average Go-Live (Fast Track)' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
]

export const implementationSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Scoping',
    description:
      'We map your current processes, identify gaps, and define a fixed-scope statement of work — no surprises.',
  },
  {
    number: '02',
    title: 'Configuration & Build',
    description:
      'Our architects configure Dynamics 365 using pre-built industry accelerators, cutting configuration time by 40%.',
  },
  {
    number: '03',
    title: 'Data Migration & Testing',
    description:
      'Clean, validated data migration with automated reconciliation checks. User Acceptance Testing with your team.',
  },
  {
    number: '04',
    title: 'Training & Change Management',
    description:
      'Role-based training programmes ensuring adoption. Change champions embedded within your team.',
  },
  {
    number: '05',
    title: 'Go-Live & Hypercare',
    description:
      'Supported go-live with on-site/remote hypercare for the first 30 days. Zero disruption to operations.',
  },
]

export const leadMagnets: LeadMagnet[] = [
  {
    id: 'cost-guide',
    icon: 'BookOpen',
    title: 'Dynamics 365 Cost Guide (UK & Europe)',
    description:
      'Pricing benchmarks, licensing options, and total cost of ownership for SMBs through to enterprise.',
    fileName: 'D365_SCM_Licensing_Guide.pdf',
    category: 'guide',
  },
  {
    id: 'roi-calculator',
    icon: 'Calculator',
    title: 'ERP ROI Calculation Template',
    description:
      'A structured Excel template to build your internal business case — with pre-populated industry benchmarks.',
    fileName: 'D365_SCM_Licensing_Guide.pdf',
    category: 'calculator',
  },
  {
    id: 'migration-checklist',
    icon: 'ClipboardCheck',
    title: 'D365 Migration Readiness Checklist',
    description:
      '47-point checklist covering data readiness, team skills, integration requirements, and go-live criteria.',
    fileName: 'D365_SCM_Licensing_Guide.pdf',
    category: 'checklist',
  },
]
