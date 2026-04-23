import type { Variants } from 'framer-motion'

const cubicEase = 'easeOut' as const

// Animation variants for Framer Motion
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicEase, delay },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: cubicEase, delay },
  }),
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicEase, delay },
  }),
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: cubicEase, delay },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: cubicEase, delay },
  }),
}

// GSAP defaults
export const gsapDefaults = {
  ease: 'power3.out',
  duration: 0.8,
}

export const scrollTriggerDefaults = {
  start: 'top 85%',
  toggleActions: 'play none none none',
}
