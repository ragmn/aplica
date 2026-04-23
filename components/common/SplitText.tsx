'use client'

import { useRef, useEffect, ElementType } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

interface SplitTextProps {
  /** Must be a plain string — SplitText splits it into animated spans */
  children: string
  className?: string
  delay?: number
  splitBy?: 'words' | 'chars'
  triggerStart?: string
  as?: ElementType
}

export function SplitText({
  children,
  className,
  delay = 0,
  splitBy = 'words',
  triggerStart = 'top 88%',
  as: Tag = 'span',
}: SplitTextProps) {
  const containerRef = useRef<HTMLElement>(null)
  const spansRef = useRef<(HTMLSpanElement | null)[]>([])

  // Split the string at render time — React owns all DOM nodes, no innerHTML mutation
  const units = splitBy === 'chars' ? children.split('') : children.split(' ')

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const spans = spansRef.current.filter(Boolean) as HTMLSpanElement[]
    if (!spans.length || !containerRef.current) return

    // gsap.context scopes all tweens/ScrollTriggers; ctx.revert() cleans them all up safely
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: splitBy === 'chars' ? 0.025 : 0.07,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: triggerStart,
            toggleActions: 'play none none none',
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [children, delay, splitBy, triggerStart])

  return (
    // aria-label gives screen readers the whole string; visual spans are hidden from AT
    <Tag
      ref={containerRef}
      className={cn('inline', className)}
      aria-label={children}
    >
      {units.map((unit, i) => (
        <span
          key={i}
          ref={(el) => { spansRef.current[i] = el }}
          className="split-char inline-block"
          style={{ willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          {unit}
          {splitBy === 'words' && i < units.length - 1 ? '\u00A0' : null}
        </span>
      ))}
    </Tag>
  )
}
