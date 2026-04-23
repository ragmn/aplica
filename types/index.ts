// ─── Core Types ──────────────────────────────────────────────────────────────

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ServiceItem {
  id: string
  icon: string // lucide icon name
  title: string
  excerpt: string
  description: string
  benefits: string[]
  href: string
  category: 'erp' | 'powerbi' | 'webmobile'
}

export interface Industry {
  id: string
  title: string
  subtitle: string
  description: string
  icon: string
  image: string
  challenges: string[]
  solutions: string[]
  cta: string
}

export interface CaseStudy {
  slug: string
  title: string
  client: string
  country: 'UK' | 'US' | 'UAE' | 'India'
  industry: string
  image: string
  logoSrc?: string
  challenge: string
  solution: string
  results: string
  metrics: {
    label: string
    value: string
    suffix?: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  tags: string[]
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  country: 'UK' | 'US' | 'UAE' | 'India'
  logoSrc?: string
  avatarSrc?: string
}

export interface LeadMagnet {
  id: string
  icon: string
  title: string
  description: string
  fileName: string // file in /public/downloads/
  category: 'guide' | 'calculator' | 'checklist'
}

export interface InsightPost {
  slug: string
  title: string
  excerpt: string
  category: 'TOFU' | 'MOFU' | 'BOFU'
  readingTime: number // minutes
  publishedAt: string // ISO date
  author: string
  coverImage: string
  tags: string[]
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}
