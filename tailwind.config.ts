import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        // Design system: Fluid Monolith surfaces
        surface: {
          DEFAULT: '#ffffff',
          bg:      '#131313',
          container: {
            lowest:  '#0e0e0e',
            low:     '#1b1b1b',
            DEFAULT: '#242424',
            high:    '#2c2c2c',
            highest: '#353535',
          },
        },
        // CTA "Pulse" blue — use only for primary actions
        cta: {
          DEFAULT: '#006CF7',
          light:   '#b0c6ff',
          dark:    '#004dbf',
        },
        // Brand (indigo — supporting UI elements, gradients)
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        violet: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Semantic
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['4.5rem',  { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-xl':  ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg':  ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.025em' }],
        'display-md':  ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-sm':  ['1.875rem',{ lineHeight: '1.2',  letterSpacing: '-0.015em' }],
      },
      borderRadius: {
        sm:   'calc(var(--radius) - 4px)',
        md:   'calc(var(--radius) - 2px)',
        lg:   'var(--radius)',
        xl:   '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        island: '3rem',   // "Signature Curve" from Fluid Monolith spec
        full: '9999px',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(0,108,247,0)' },
          '50%':       { opacity: '0.8', boxShadow: '0 0 32px 4px rgba(0,108,247,0.3)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '-200% 0' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out both',
        'fade-in':    'fade-in 0.4s ease-out both',
        marquee:      'marquee 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer:      'shimmer 2s linear infinite',
        'bounce-y':   'bounce-y 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Hero radial glow — uses CTA blue instead of indigo
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,108,247,0.25), transparent)',
        'card-glow':
          'radial-gradient(ellipse 200% 100% at 50% 100%, rgba(0,108,247,0.10), transparent)',
        shimmer:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        // Primary CTA gradient (gem-like, per Fluid Monolith spec)
        'cta-gradient':
          'linear-gradient(135deg, #b0c6ff 0%, #006CF7 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        // "Ambient Bloom" — spec: blur 60px, spread 0, opacity 6%
        ambient: '0 0 60px 0 rgba(0,0,0,0.06)',
        // CTA glow
        cta: '0 8px 32px rgba(0,108,247,0.35)',
        'cta-hover': '0 12px 40px rgba(0,108,247,0.50)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
