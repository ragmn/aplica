// Organization JSON-LD schema
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aplica Technology',
    alternateName: 'Aplicatech',
    url: 'https://aplicatech.com',
    logo: 'https://aplicatech.com/images/logo.png',
    description:
      'Microsoft Dynamics 365 implementation partner serving SMBs and Enterprises across the UK, Europe, UAE, and India with ERP, CRM, and cloud consulting. Certified Microsoft CSP with offshoring delivery from India.',
    sameAs: [
      'https://www.linkedin.com/company/aplica-technology',
      'https://aplicatech.com',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+44-20-7946-0192',
        contactType: 'sales',
        areaServed: 'GB',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+44-20-7946-0192',
        contactType: 'sales',
        areaServed: 'EU',
        availableLanguage: 'English',
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressCountry: 'AE',
        addressLocality: 'Dubai',
      },
      {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressLocality: 'Bengaluru',
      },
    ],
  }
}

// FAQ JSON-LD schema
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

// Service JSON-LD schema
export function serviceSchema(service: {
  name: string
  description: string
  serviceType: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@type': 'Organization',
      name: 'Aplica Technology',
      url: 'https://aplicatech.com',
    },
    areaServed: [
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Germany' },
      { '@type': 'Country', name: 'Netherlands' },
      { '@type': 'Country', name: 'France' },
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'United Arab Emirates' },
      { '@type': 'Country', name: 'India' },
    ],
    availableLanguage: 'English',
  }
}

// Article JSON-LD schema
export function articleSchema(article: {
  title: string
  description: string
  url: string
  author: string
  publishedAt: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Aplica Technology',
      logo: {
        '@type': 'ImageObject',
        url: 'https://aplicatech.com/images/logo.png',
      },
    },
    datePublished: article.publishedAt,
    ...(article.image && { image: article.image }),
  }
}

// Breadcrumb JSON-LD schema
export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map(({ name, href }, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: `https://aplicatech.com${href}`,
    })),
  }
}

// Homepage FAQ content
export const homepageFaqs = [
  {
    question: 'How long does a Microsoft Dynamics 365 implementation take?',
    answer:
      'For SMBs using our Fast Track methodology, go-live typically takes 10–16 weeks. Enterprise implementations with complex integrations range from 4–9 months. We provide a fixed timeline in our Statement of Work before any engagement begins.',
  },
  {
    question: 'What is the cost of a D365 implementation?',
    answer:
      'Costs vary by scope: SMB Fast Track implementations typically range from £35,000–£120,000. Enterprise programmes with complex integrations range from £120,000–£500,000+. We provide transparent, fixed-price proposals with no hidden fees. Download our Cost Guide for detailed benchmarks.',
  },
  {
    question: 'Is Microsoft Dynamics 365 suitable for SMBs?',
    answer:
      'Yes. Dynamics 365 Business Central is purpose-built for SMBs with affordable per-user licensing and a fast deployment path. Our 100-day Fast Track methodology gets growing businesses live quickly without enterprise-scale cost or complexity.',
  },
  {
    question: 'Do you support multi-country and multi-entity rollouts?',
    answer:
      'Yes. Our global team has implemented D365 across 15+ countries with localisation expertise covering UK Making Tax Digital (MTD), EU VAT, UAE VAT, and GCC payroll compliance. We manage currency, taxation, and regulatory requirements per entity.',
  },
  {
    question: 'Can you migrate our data from an existing ERP system?',
    answer:
      'We have migrated from Dynamics AX, Dynamics NAV, Dynamics GP, Sage, SAP, and custom-built systems. Our data migration methodology includes automated validation gates and reconciliation checks to ensure zero data loss and 100% accuracy at go-live.',
  },
  {
    question: 'Do you provide ongoing support after go-live?',
    answer:
      'Yes. We offer Annual Maintenance Contracts (AMC) with SLA-backed response times (2-hour critical, 8-hour standard), user training, minor enhancements, and quarterly strategic roadmap reviews. Most clients engage us as their long-term Microsoft partner.',
  },
  {
    question: 'What Microsoft partner credentials does Aplica hold?',
    answer:
      'Aplica is a designated Microsoft Cloud Solutions Provider (CSP) and Microsoft AI Cloud Partner. Our architects hold individual certifications across D365 Finance, Supply Chain, Business Central, Sales, and Customer Service modules.',
  },
  {
    question: 'Do you serve clients in the UK and Europe, or only the Middle East?',
    answer:
      'We serve clients globally with strong presence in the UK, Europe, UAE, and India. Our delivery team operates across time zones with UK and European business hour support available. We are actively expanding our European practice, with expertise in UK and EU regulatory localisation for D365.',
  },
]
