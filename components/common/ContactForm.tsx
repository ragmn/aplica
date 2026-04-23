'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Loader2, CheckCircle, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid work email'),
  company: z.string().min(1, 'Please enter your company name'),
  message: z.string().min(10, 'Please describe how we can help (min 10 characters)'),
})

type FormData = z.infer<typeof schema>

interface ContactFormProps {
  showCalendly?: boolean
  className?: string
}

export function ContactForm({ showCalendly = true, className }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/aplica/30min'

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20">
              <CheckCircle size={28} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Message received!</h3>
            <p className="text-sm text-slate-400">
              A senior consultant will reach out within 24 hours.
            </p>
            {showCalendly && (
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-brand-500/40 px-5 py-2.5 text-sm font-medium text-brand-400 hover:border-brand-500 hover:text-brand-300 transition-colors"
              >
                <Calendar size={16} />
                Or book a slot now
              </a>
            )}
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* Row: Name + Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cf-name" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Full name *
                </label>
                <input
                  id="cf-name"
                  {...register('name')}
                  type="text"
                  autoComplete="name"
                  className={cn(
                    'w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400',
                    'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950 outline-none',
                    errors.name ? 'border-red-500' : 'border-white/10'
                  )}
                  placeholder="Jane Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-slate-400">
                  Work email *
                </label>
                <input
                  id="cf-email"
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  className={cn(
                    'w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400',
                    'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950 outline-none',
                    errors.email ? 'border-red-500' : 'border-white/10'
                  )}
                  placeholder="jane@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="cf-company" className="mb-1.5 block text-xs font-medium text-slate-400">
                Company name *
              </label>
              <input
                id="cf-company"
                {...register('company')}
                type="text"
                autoComplete="organization"
                className={cn(
                  'w-full rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400',
                  'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950 outline-none',
                  errors.company ? 'border-red-500' : 'border-white/10'
                )}
                placeholder="Acme Corporation"
              />
              {errors.company && (
                <p className="mt-1 text-xs text-red-400">{errors.company.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium text-slate-400">
                How can we help? *
              </label>
              <textarea
                id="cf-message"
                {...register('message')}
                rows={4}
                className={cn(
                  'w-full resize-none rounded-lg border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-400',
                  'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-slate-950 outline-none',
                  errors.message ? 'border-red-500' : 'border-white/10'
                )}
                placeholder="Tell us about your current system, goals, and timeline…"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            {status === 'error' && (
              <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                Something went wrong. Please email{' '}
                <a href="mailto:hello@aplicatech.com" className="underline">
                  hello@aplicatech.com
                </a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition-all hover:brightness-110 hover:shadow-brand-500/40 disabled:opacity-60 active:scale-95"
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Send size={16} />
              )}
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {showCalendly && (
              <p className="text-center text-sm text-slate-400">
                Prefer a call?{' '}
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-400 hover:text-brand-300"
                >
                  Book a 30-min consultation →
                </a>
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
