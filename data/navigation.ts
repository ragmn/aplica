import { NavItem } from '@/types'

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  {
    label: 'Services',
    href: '/solutions',
    children: [
      // ERP Solutions
      { label: 'D365 Implementation', href: '/solutions#implementation' },
      { label: 'CRM Automation', href: '/solutions#crm-automation' },
      { label: 'Finance & Operations', href: '/solutions#finance-operations' },
      { label: 'Supply Chain Management', href: '/solutions#supply-chain' },
      { label: 'Integration & Migration', href: '/solutions#integration-migration' },
      { label: 'Managed Support', href: '/solutions#support' },
      // Microsoft Azure & DevOps
      { label: 'Microsoft Azure & DevOps', href: '/solutions#azure-devops' },
      // Custom App Design & Development
      { label: 'Custom App Design & Development', href: '/solutions#custom-development' },
      { label: 'Power Apps & Portals', href: '/solutions#web-development' },
      // Resources Augmentation
      { label: 'Resources Augmentation', href: '/solutions#resources-augmentation' },
      // Power BI
      { label: 'Microsoft Power BI', href: '/solutions#power-bi' },
      // AI Solutions
      { label: 'AI Consulting & Strategy', href: '/solutions#ai-consulting' },
      { label: 'Copilot for Dynamics 365', href: '/solutions#copilot-d365' },
      { label: 'Azure OpenAI Services', href: '/solutions#azure-ai' },
      { label: 'AI Process Automation', href: '/solutions#ai-automation' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about#story' },
      { label: 'Leadership Team', href: '/about#team' },
      { label: 'ERP Practice', href: '/about#erp-practice' },
      { label: 'Resources Augmentation', href: '/about#resources' },
      { label: 'Microsoft Azure Practice', href: '/about#azure-practice' },
      { label: 'Custom App Design & Dev', href: '/about#custom-dev' },
      { label: 'Careers', href: '/about#careers' },
    ],
  },
  {
    label: 'Hire Us',
    href: '/hire',
    children: [
      { label: 'Hire ERP Engineers', href: '/hire/erp-engineers' },
      { label: 'Hire DevOps Engineers', href: '/hire/devops-engineers' },
      { label: 'Hire Frontend Developers', href: '/hire/frontend-developers' },
      { label: 'Hire Backend Developers', href: '/hire/backend-developers' },
      { label: 'Hire AI Engineers', href: '/hire/ai-engineers' },
    ],
  },
  { label: 'Blog', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  solutions: [
    { label: 'D365 Implementation', href: '/solutions#implementation' },
    { label: 'CRM Automation', href: '/solutions#crm-automation' },
    { label: 'Finance & Operations', href: '/solutions#finance-operations' },
    { label: 'Supply Chain', href: '/solutions#supply-chain' },
    { label: 'Managed Support', href: '/solutions#support' },
    { label: 'Microsoft Power BI', href: '/solutions#power-bi' },
    { label: 'Microsoft Azure & DevOps', href: '/solutions#azure-devops' },
    { label: 'Custom App Design & Dev', href: '/solutions#custom-development' },
    { label: 'Resources Augmentation', href: '/solutions#resources-augmentation' },
    { label: 'AI Consulting & Strategy', href: '/solutions#ai-consulting' },
    { label: 'Copilot for Dynamics 365', href: '/solutions#copilot-d365' },
    { label: 'Azure OpenAI Services', href: '/solutions#azure-ai' },
  ],
  industries: [
    { label: 'Construction', href: '/industries#construction' },
    { label: 'Distribution', href: '/industries#distribution' },
    { label: 'Property Management', href: '/industries#real-estate' },
    { label: 'E-Commerce', href: '/industries#ecommerce' },
    { label: 'Financial Services', href: '/industries#financial-services' },
  ],
  hire: [
    { label: 'Hire ERP Engineers', href: '/hire/erp-engineers' },
    { label: 'Hire DevOps Engineers', href: '/hire/devops-engineers' },
    { label: 'Hire Frontend Developers', href: '/hire/frontend-developers' },
    { label: 'Hire Backend Developers', href: '/hire/backend-developers' },
    { label: 'Hire AI Engineers', href: '/hire/ai-engineers' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Blog', href: '/insights' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Contact', href: '/contact' },
  ],
}
