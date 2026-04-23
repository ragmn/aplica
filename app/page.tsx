import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'

// Below-fold sections are dynamically imported to split them into separate JS chunks.
// This reduces initial bundle size and defers loading of GSAP pinning / Framer Motion
// carousel code until after the above-fold content is interactive.
const CaseStudiesPreview = dynamic(() =>
  import('@/components/sections/CaseStudiesPreview').then((m) => ({ default: m.CaseStudiesPreview }))
)
const ScrollStorytelling = dynamic(() =>
  import('@/components/sections/ScrollStorytelling').then((m) => ({ default: m.ScrollStorytelling }))
)
const ServicesGrid = dynamic(() =>
  import('@/components/sections/ServicesGrid').then((m) => ({ default: m.ServicesGrid }))
)
const SMBEnterpriseSection = dynamic(() =>
  import('@/components/sections/SMBEnterpriseSection').then((m) => ({ default: m.SMBEnterpriseSection }))
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
  title: 'Microsoft Dynamics 365 Partner UK & Europe | D365 CSP — Aplica',
  description:
    'Implement Microsoft Dynamics 365 30% faster. Certified CSP partner serving SMBs and Enterprises across the UK and Europe. D365 offshoring delivery from India and UAE. Fixed scope. 100-day Fast Track. 200+ go-lives.',
  alternates: {
    canonical: 'https://aplicatech.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      {/* Case studies lead — "we solved Y" before "we do X" */}
      <CaseStudiesPreview />
      <ScrollStorytelling />
      <ServicesGrid />
      <SMBEnterpriseSection />
      <TestimonialsSection />
      <LeadMagnetsSection />
      <FinalCTASection />
    </>
  )
}
