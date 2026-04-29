import { Testimonial } from '@/types'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  testimonial: Testimonial
  className?: string
}

const countryFlag: Record<string, string> = {
  UK: '🇬🇧',
  US: '🇺🇸',
  UAE: '🇦🇪',
  India: '🇮🇳',
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn('flex h-full flex-col justify-between rounded-3xl p-7 md:p-8', className)}
      style={{
        backgroundColor: '#1f1f1f',
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.07)',
      }}
    >
      {/* Accent line + quote mark — "Editorial Quote" component from spec */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start">
        <div
          className="mt-1 w-1 shrink-0 rounded-full"
          style={{ height: '2.25rem', backgroundColor: '#006CF7', opacity: 0.7 }}
          aria-hidden
        />
        {testimonial.avatarSrc ? (
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-slate-950 sm:mt-0">
            <img
              src={testimonial.avatarSrc}
              alt={testimonial.author}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
        {/* Opening quote — large, Plus Jakarta Sans weight */}
        <span
          className="font-display font-extrabold leading-none select-none"
          style={{ fontSize: '3.5rem', color: '#006CF7', opacity: 0.25, lineHeight: 0.8, marginTop: '-0.1rem' }}
          aria-hidden
        >
          &ldquo;
        </span>
      </div>

      {/* Quote text */}
      <blockquote
        className="flex-1 font-display font-medium leading-relaxed text-slate-200"
        style={{ fontSize: '1.0625rem', letterSpacing: '-0.005em' }}
      >
        {testimonial.quote}
      </blockquote>

      {/* Attribution */}
      <figcaption className="mt-7 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-white">{testimonial.author}</p>
          <p className="mt-0.5 text-xs text-slate-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
        <div
          className="flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs text-slate-400"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
        >
          <span>{countryFlag[testimonial.country]}</span>
          <span className="font-medium">{testimonial.country}</span>
        </div>
      </figcaption>
    </figure>
  )
}
