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
        // Design system: light surfaces
        surface: {
          DEFAULT: '#ffffff',
          bg:      '#ffffff',
          alt:     '#f8faff',
          container: {
            lowest:  '#f0f5ff',
            low:     '#f8faff',
            DEFAULT: '#ffffff',
            high:    '#eff6ff',
            highest: '#dbeafe',
          },
        },
        // CTA "Pulse" blue — use only for primary actions
        cta: {
          DEFAULT: '#006CF7',
          light:   '#eff6ff',
          mid:     '#bfdbfe',
          dark:    '#004dbf',
        },
        // Brand (blue — supporting UI elements)
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        // Neutral slate
        slate: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
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
        island: '3rem',
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
          '50%':       { opacity: '0.8', boxShadow: '0 0 32px 4px rgba(0,108,247,0.2)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '-200% 0' },
        },
        'bounce-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-8px) rotate(2deg)' },
        },
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out both',
        'fade-in':    'fade-in 0.4s ease-out both',
        marquee:      'marquee 35s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        shimmer:      'shimmer 2s linear infinite',
        'bounce-y':   'bounce-y 1.5s ease-in-out infinite',
        float:        'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // Hero gradient (light blue tint)
        'hero-light':
          'linear-gradient(135deg, #f0f7ff 0%, #fafcff 60%, #f8f4ff 100%)',
        // Soft blue radial for section accents
        'hero-glow':
          'radial-gradient(ellipse 60% 40% at 70% 50%, rgba(0,108,247,0.08), transparent)',
        'card-glow':
          'radial-gradient(ellipse 200% 100% at 50% 100%, rgba(0,108,247,0.05), transparent)',
        shimmer:
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
        'cta-gradient':
          'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)',
        'section-gradient':
          'linear-gradient(180deg, #ffffff 0%, #f8faff 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      boxShadow: {
        // Light card shadow
        card:       '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)',
        'card-hover':'0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.10)',
        // Ambient
        ambient:    '0 0 60px 0 rgba(0,0,0,0.04)',
        // CTA glow
        cta:        '0 4px 20px rgba(0,108,247,0.28)',
        'cta-hover':'0 8px 32px rgba(0,108,247,0.42)',
        // Inner border (no 1px rule — use box-shadow)
        'inner-border': 'inset 0 0 0 1px rgba(0,0,0,0.08)',
        'inner-border-blue': 'inset 0 0 0 1.5px rgba(0,108,247,0.20)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
