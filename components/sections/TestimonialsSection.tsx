'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from '@/components/common/TestimonialCard'
import { testimonials } from '@/data/testimonials'
import { cn } from '@/lib/utils'

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)

  const visible = [
    testimonials[idx % testimonials.length],
    testimonials[(idx + 1) % testimonials.length],
    testimonials[(idx + 2) % testimonials.length],
  ]

  return (
    <section className="section-padding" style={{ backgroundColor: '#141414' }}>
      <div className="container-xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-4">Client Voices</p>
            <h2
              className="font-display font-extrabold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              Real words from the people
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #93c5fd 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                who drove the transformation.
              </span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 max-w-md">
              UAE, UK &amp; GCC enterprise leaders on working with Aplica.
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)', color: '#94a3b8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-all"
              style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)', color: '#94a3b8' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.id}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className={cn(i === 2 && 'hidden lg:block')}
              >
                <TestimonialCard testimonial={t} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          className="mt-10 flex justify-center gap-1"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setIdx(i)}
              className="flex h-11 w-11 items-center justify-center"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === idx}
            >
              <span
                className="block h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? '1.5rem' : '0.375rem',
                  backgroundColor: i === idx ? '#006CF7' : 'rgba(255,255,255,0.18)',
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
