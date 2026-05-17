'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
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
    <section
      className="section-padding section-alt"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="eyebrow mb-5">Client Voices</span>
            <h2
              id="testimonials-heading"
              className="mt-5 font-display font-extrabold text-slate-900"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}
            >
              What our clients say
              <span
                className="block"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1d4ed8 0%, #006CF7 60%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                after we deliver.
              </span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex gap-2" aria-label="Testimonial navigation">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:text-slate-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all hover:border-slate-300 hover:text-slate-800"
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
              <motion.article
                key={`${t.id}-${i}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={cn(
                  'flex flex-col rounded-3xl bg-white p-8',
                  i === 2 && 'hidden lg:flex'
                )}
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)' }}
              >
                {/* Stars */}
                <div className="mb-5 flex gap-1" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                      aria-hidden
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 flex-1">
                  <p className="text-base leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Author */}
                <footer className="flex items-center gap-4 border-t border-slate-100 pt-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-bold text-white text-sm"
                    style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)' }}
                    aria-hidden
                  >
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.author}</p>
                    <p className="text-xs text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                  {t.country && (
                    <span
                      className="ml-auto rounded-full px-2.5 py-1 text-[10px] font-semibold text-slate-500"
                      style={{ background: '#f8faff' }}
                    >
                      {t.country}
                    </span>
                  )}
                </footer>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          className="mt-10 flex justify-center gap-1.5"
          role="tablist"
          aria-label="Testimonial slides"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              onClick={() => setIdx(i)}
              className="flex h-9 w-9 items-center justify-center"
              aria-label={`Go to testimonial ${i + 1}`}
              aria-selected={i === idx}
            >
              <span
                className="block h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? '1.5rem' : '0.375rem',
                  backgroundColor: i === idx ? '#006CF7' : '#cbd5e1',
                }}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
