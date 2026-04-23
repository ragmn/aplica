'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Layers, BarChart3, TrendingUp, GitBranch, Shuffle, Headphones,
  PieChart, Activity, Smartphone, Globe,
  ArrowRight, type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { ServiceItem } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Layers, BarChart3, TrendingUp, GitBranch, Shuffle, Headphones,
  PieChart, Activity, Smartphone, Globe,
}

interface ServiceCardProps {
  service: ServiceItem
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Layers

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brand-500/30 hover:bg-white/[0.06]"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-card-glow" />

      {/* Icon */}
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-500/20 transition-all duration-300 group-hover:from-brand-500/30 group-hover:to-violet-500/30">
        <Icon
          size={22}
          className="text-brand-400 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-white">{service.title}</h3>

      {/* Excerpt */}
      <p className="flex-1 text-sm leading-relaxed text-slate-400">{service.excerpt}</p>

      {/* Link */}
      <Link
        href={service.href}
        className={cn(
          'mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-400',
          'transition-all duration-200 hover:gap-3 hover:text-brand-300'
        )}
      >
        Learn more about {service.title}
        <ArrowRight size={14} aria-hidden />
      </Link>
    </motion.article>
  )
}
