'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Loader2, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const schema = z.object({
  firstname: z.string().min(2, 'Please enter your first name'),
  email:     z.string().email('Please enter a valid work email'),
  company:   z.string().min(1, 'Please enter your company name'),
})

type FormData = z.infer<typeof schema>

interface LeadMagnetFormProps {
  assetId: string
  assetTitle: string
  fileName: string
  className?: string
}

export function LeadMagnetForm({
  assetId,
  assetTitle,
  fileName,
  className,
}: LeadMagnetFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, assetId }),
      })
      if (!res.ok) throw new Error()
      const json = await res.json()
      setDownloadUrl(json.downloadUrl)
      setStatus('success')
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
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-3 text-center"
          >
            <CheckCircle size={32} className="text-emerald-600" />
            <p className="text-sm font-medium text-slate-900">
              Your download is ready!
            </p>
            <a
              href={downloadUrl ?? `/downloads/${fileName}`}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-500 transition-colors"
            >
              <Download size={16} />
              Download {assetTitle}
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
            noValidate
          >
            {/* First name */}
            <div>
              <input
                {...register('firstname')}
                type="text"
                placeholder="First name"
                autoComplete="given-name"
                className={cn(
                  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400',
                  'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-white outline-none',
                  errors.firstname ? 'border-red-500' : 'border-slate-300'
                )}
              />
              {errors.firstname && (
                <p className="mt-1 text-xs text-red-600">{errors.firstname.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Work email"
                autoComplete="email"
                className={cn(
                  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400',
                  'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-white outline-none',
                  errors.email ? 'border-red-500' : 'border-slate-300'
                )}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <input
                {...register('company')}
                type="text"
                placeholder="Company name"
                autoComplete="organization"
                className={cn(
                  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400',
                  'transition-colors focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1 focus-visible:ring-offset-white outline-none',
                  errors.company ? 'border-red-500' : 'border-slate-300'
                )}
              />
              {errors.company && (
                <p className="mt-1 text-xs text-red-600">{errors.company.message}</p>
              )}
            </div>

            {status === 'error' && (
              <p className="text-xs text-red-600">
                Something went wrong. Please email hello@aplicatech.com
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-500 disabled:opacity-60"
            >
              {status === 'loading' ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <Download size={16} />
              )}
              {status === 'loading' ? 'Sending…' : 'Download Free'}
            </button>

            <p className="text-center text-xs text-slate-500">
              No spam. Unsubscribe anytime.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
