import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BackToTopBar } from '@/components/common/BackToTopBar'
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
    default: 'Aplica: Microsoft Dynamics 365 ERP Partner | 18 Years Experience | UK and Europe',
    template: '%s | Aplica D365 ERP Partner',
  },
  description:
    '18 years of Microsoft Dynamics 365 ERP implementation expertise, proven across India and the GCC, now serving the UK and Europe. 200+ go-lives, Microsoft Solutions Partner, certified D365 CSP. Business Central, Finance and Operations, CRM.',
  keywords: [
    'Microsoft Dynamics 365 partner Europe',
    'D365 ERP implementation UK',
    'Dynamics 365 Business Central UK',
    'D365 Finance Operations Europe',
    'Microsoft ERP partner UK',
    'Dynamics 365 implementation partner',
    'ERP implementation company UK',
    'Microsoft Dynamics 365 partner India',
    'D365 partner GCC',
    'ERP consultant UK Europe',
    'Dynamics 365 Business Central Europe',
    'Microsoft Dynamics CRM partner UK',
    'offshore ERP implementation Europe',
    'D365 partner Germany Netherlands France',
    'Microsoft Cloud Solutions Provider ERP',
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
        alt: 'Aplica: Microsoft Dynamics 365 Partner UK and Europe',
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
  themeColor: '#ffffff',
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
            <BackToTopBar />
            <Footer />
          </SmoothScrollProvider>
      </body>
    </html>
  )
}
