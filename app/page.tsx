import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'

const OutcomesGrid = dynamic(() =>
  import('@/components/sections/OutcomesGrid').then((m) => ({ default: m.OutcomesGrid }))
)
const CaseStudiesPreview = dynamic(() =>
  import('@/components/sections/CaseStudiesPreview').then((m) => ({ default: m.CaseStudiesPreview }))
)
const ServicesGrid = dynamic(() =>
  import('@/components/sections/ServicesGrid').then((m) => ({ default: m.ServicesGrid }))
)
const MethodologyTimeline = dynamic(() =>
  import('@/components/sections/MethodologyTimeline').then((m) => ({ default: m.MethodologyTimeline }))
)
const PartnerCredentials = dynamic(() =>
  import('@/components/sections/PartnerCredentials').then((m) => ({ default: m.PartnerCredentials }))
)
const SectorsSection = dynamic(() =>
  import('@/components/sections/SectorsSection').then((m) => ({ default: m.SectorsSection }))
)
const TestimonialsSection = dynamic(() =>
  import('@/components/sections/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
)
const LeadMagnetsSection = dynamic(() =>
  import('@/components/sections/LeadMagnetsSection').then((m) => ({ default: m.LeadMagnetsSection }))
)
const FinalCTASection = dynamic(() =>
  import('@/components/sections/FinalCTASection').then((m) => ({ default: m.FinalCTASection }))
)

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 ERP Partner UK and Europe | 18 Years Experience | Aplica',
  description:
    'Aplica brings 18 years of Dynamics 365 ERP implementation expertise from India and the GCC to Europe. 200+ go-lives, Microsoft Solutions Partner. Business Central, Finance and Operations, CRM, Power Platform, delivered on time.',
  alternates: {
    canonical: 'https://aplicatech.com',
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — benefit-first, with M365 ecosystem illustration */}
      <HeroSection />

      {/* 2. Trust bar — client marquee + partner badges */}
      <TrustBar />

      {/* 3. Outcomes — "What Changes When You Work With Us" */}
      <OutcomesGrid />

      {/* 4. Case Studies — transformation stories before services */}
      <CaseStudiesPreview />

      {/* 5. Services — tabbed, buyer-journey order */}
      <ServicesGrid />

      {/* 6. Methodology — "Our Proven Delivery Framework" */}
      <MethodologyTimeline />

      {/* 7. Partner Credentials — Microsoft partnership badges */}
      <PartnerCredentials />

      {/* 8. Sectors — who we help */}
      <SectorsSection />

      {/* 9. Testimonials — client voices carousel */}
      <TestimonialsSection />

      {/* 10. Resources — free guides and content hub */}
      <LeadMagnetsSection />

      {/* 11. Final CTA — contact form + reassurances */}
      <FinalCTASection />
    </>
  )
}
