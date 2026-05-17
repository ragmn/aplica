import { NavItem } from '@/types'

export const navigation: NavItem[] = [
  { label: 'Why Us', href: '/about' },
  {
    label: 'Services',
    href: '/solutions',
    children: [
      // Strategy & Assessment
      { label: 'Discovery Workshop', href: '/solutions#discovery' },
      { label: 'M365 Readiness Assessment', href: '/solutions#readiness' },
      // Deployment & Migration
      { label: 'M365 Deployment & Migration', href: '/solutions#deployment' },
      { label: 'SharePoint & Teams Configuration', href: '/solutions#sharepoint-teams' },
      // Automation & Integration
      { label: 'Power Platform (Apps / Automate / BI)', href: '/solutions#power-platform' },
      { label: 'Azure Infrastructure & Cloud', href: '/solutions#azure-devops' },
      // AI
      { label: 'Microsoft Copilot Adoption', href: '/solutions#copilot-d365' },
      { label: 'AI Consulting & Strategy', href: '/solutions#ai-consulting' },
      // Support
      { label: 'Managed Support & Training', href: '/solutions#support' },
      { label: 'D365 Implementation (ERP/CRM)', href: '/solutions#implementation' },
      { label: 'Finance & Operations', href: '/solutions#finance-operations' },
      { label: 'Supply Chain Management', href: '/solutions#supply-chain' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Empower Your Workforce', href: '/solutions#workforce' },
      { label: 'Automate Business Processes', href: '/solutions#automation' },
      { label: 'Secure Your Data', href: '/solutions#security' },
      { label: 'Migrate to the Cloud', href: '/solutions#cloud-migration' },
      { label: 'Adopt AI & Copilot', href: '/solutions#ai-copilot' },
    ],
  },
  {
    label: 'Sectors',
    href: '/industries',
    children: [
      { label: 'Professional Services', href: '/industries#professional-services' },
      { label: 'Public Sector & Government', href: '/industries#public-sector' },
      { label: 'Financial Services', href: '/industries#financial-services' },
      { label: 'Healthcare & Life Sciences', href: '/industries#healthcare' },
      { label: 'SMB & Growing Businesses', href: '/industries#smb' },
      { label: 'Construction & Manufacturing', href: '/industries#construction' },
    ],
  },
  {
    label: 'Resources',
    href: '/insights',
    children: [
      { label: 'Blog & Insights', href: '/insights' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Free Guides & Templates', href: '/insights#guides' },
      { label: 'Webinars & Events', href: '/insights#webinars' },
      { label: 'Microsoft Licensing Guide', href: '/insights#licensing' },
      { label: 'FAQ', href: '/about#faq' },
    ],
  },
]

export const footerLinks = {
  services: [
    { label: 'M365 Deployment & Migration', href: '/solutions#deployment' },
    { label: 'SharePoint & Teams', href: '/solutions#sharepoint-teams' },
    { label: 'Power Platform', href: '/solutions#power-platform' },
    { label: 'Microsoft Copilot', href: '/solutions#copilot-d365' },
    { label: 'Azure & Cloud Strategy', href: '/solutions#azure-devops' },
    { label: 'D365 ERP / CRM', href: '/solutions#implementation' },
    { label: 'Managed Support', href: '/solutions#support' },
  ],
  solutions: [
    { label: 'Empower Your Workforce', href: '/solutions#workforce' },
    { label: 'Automate Processes', href: '/solutions#automation' },
    { label: 'Secure Your Data', href: '/solutions#security' },
    { label: 'Migrate to the Cloud', href: '/solutions#cloud-migration' },
    { label: 'Adopt AI & Copilot', href: '/solutions#ai-copilot' },
    { label: 'Professional Services', href: '/industries#professional-services' },
    { label: 'Financial Services', href: '/industries#financial-services' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog & Insights', href: '/insights' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Partners', href: '/about#partners' },
  ],
  resources: [
    { label: 'Free Guides', href: '/insights#guides' },
    { label: 'Webinars & Events', href: '/insights#webinars' },
    { label: 'Licensing Guide', href: '/insights#licensing' },
    { label: 'FAQ', href: '/about#faq' },
  ],
}
