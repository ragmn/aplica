import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { JsonLd } from '@/components/common/JsonLd'
import { organizationSchema } from '@/lib/schema'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aplicatech.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aplica — Microsoft Dynamics 365 Partner UK & Europe | D365 CSP | ERP Implementation',
    template: '%s | Aplica — Microsoft Dynamics 365 Partner',
  },
  description:
    'Expert Microsoft Dynamics 365 implementation for SMBs and Enterprises across the UK and Europe. Certified Microsoft CSP and D365 partner. ERP, CRM, Finance & Operations. Offshoring delivery from India. Fast Track go-live in 100 days.',
  keywords: [
    'Microsoft Dynamics 365 partner UK',
    'D365 CSP partner Europe',
    'Microsoft Dynamics 365 partner Europe',
    'ERP implementation UK',
    'D365 implementation partner Europe',
    'Microsoft Dynamics 365 offshoring',
    'D365 Business Central Europe',
    'D365 Finance Operations UK',
    'ERP offshoring services Europe',
    'Microsoft Dynamics consultant UK',
    'D365 partner Germany',
    'D365 partner Netherlands',
    'D365 partner France',
    'Microsoft Cloud Solutions Provider Europe',
  ],
  authors: [{ name: 'Aplica Technology', url: siteUrl }],
  creator: 'Aplica Technology',
  publisher: 'Aplica Technology',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Aplica Technology',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Aplica — Microsoft Dynamics 365 Partner UK & Europe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@aplicatech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <JsonLd data={organizationSchema()} />
      </head>
      <body>
        <SmoothScrollProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
      </body>
    </html>
  )
}
