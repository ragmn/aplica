import { NavItem } from '@/types'

export const navigation: NavItem[] = [
  {
    label: 'Services',
    href: '/solutions',
    children: [
      // Dynamics 365 ERP & CRM
      { label: 'D365 Implementation', href: '/solutions#implementation' },
      { label: 'Finance & Operations', href: '/solutions#finance-operations' },
      { label: 'Supply Chain Management', href: '/solutions#supply-chain' },
      { label: 'CRM Automation', href: '/solutions#crm-automation' },
      // Power Platform & Power BI
      { label: 'Microsoft Power BI', href: '/solutions#power-bi' },
      { label: 'Power Apps & Portals', href: '/solutions#power-apps' },
      { label: 'Data & Analytics Strategy', href: '/solutions#analytics' },
      // Cloud & Custom Integrations
      { label: 'Integration & Migration', href: '/solutions#integration-migration' },
      { label: 'Custom Web & Mobile Dev', href: '/solutions#web-development' },
      { label: 'Managed Support', href: '/solutions#support' },
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
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Who We Are', href: '/about' },
      { label: 'Our Offices', href: '/about#offices' },
      { label: 'Careers and Open Roles', href: '/hire' },
    ],
  },
]

export const footerLinks = {
  services: [
    { label: 'D365 ERP Implementation', href: '/solutions#implementation' },
    { label: 'Finance & Operations', href: '/solutions#finance-operations' },
    { label: 'Supply Chain Management', href: '/solutions#supply-chain' },
    { label: 'CRM Automation', href: '/solutions#crm-automation' },
    { label: 'Microsoft Power BI', href: '/solutions#power-bi' },
    { label: 'Integration & Migration', href: '/solutions#integration-migration' },
    { label: 'Managed Support', href: '/solutions#support' },
  ],
  solutions: [
    { label: 'Manufacturing & SCM', href: '/industries#construction' },
    { label: 'Food & Beverage', href: '/case-studies/food-manufacturer-d365-bc-traceability' },
    { label: 'Real Estate & Property', href: '/case-studies/seven-tides-property-uae' },
    { label: 'Hospitality & Leisure', href: '/case-studies/awj-holding-digital-transformation' },
    { label: 'Renewable Energy Systems', href: '/case-studies/gne-after-sales-service-d365-bc' },
    { label: 'Automotive & Decoplast', href: '/case-studies/sdpl-manufacturing-mrp-d365' },
    { label: 'API Bank Integrations', href: '/case-studies/bank-integration-d365-bc' },
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
