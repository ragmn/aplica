import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Compress responses with gzip/br
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    // Lazy-load images at 75% viewport intersection
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Experimental: ship smaller React client runtime
  experimental: {
    optimizePackageImports: ['lucide-react', 'gsap', 'framer-motion'],
  },

  async headers() {
    return [
      {
        // Static assets: long-lived immutable cache
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Public images: cache for 1 week
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        // Public videos: cache for 1 week (video assets change rarely)
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      {
        // Page routes: allow bfcache (do NOT use no-store)
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
          // Required for bfcache in Firefox/Safari on Vary-based headers
          { key: 'Vary', value: 'Accept-Encoding' },
        ],
      },
    ]
  },
}

export default nextConfig
