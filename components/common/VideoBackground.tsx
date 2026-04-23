'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface VideoBackgroundProps {
  src?: string
  poster?: string
  overlayClassName?: string
  className?: string
  children?: React.ReactNode
}

export function VideoBackground({
  src,
  poster = '/images/hero-poster.jpg',
  overlayClassName,
  className,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Ensure play is called after mount in case autoPlay is blocked by browser policy
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.play().catch(() => {
      // Autoplay blocked — poster image remains visible as fallback
    })
  }, [])

  return (
    <div className={cn('relative overflow-hidden', className)}>

      {/* Poster — next/image with priority so the browser preload scanner fetches it immediately (LCP) */}
      <Image
        src={poster}
        alt=""
        fill
        priority
        className="object-cover object-center"
        style={{ zIndex: 0 }}
        aria-hidden
      />

      {/* Video */}
      {src && (
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 1 }}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Overlay gradient — matches #131313 design system */}
      <div
        className={cn('absolute inset-0', overlayClassName)}
        style={{
          background:
            'linear-gradient(to bottom, rgba(19,19,19,0.55) 0%, rgba(19,19,19,0.35) 40%, rgba(19,19,19,0.82) 100%)',
          zIndex: 2,
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 10 }}>
        {children}
      </div>
    </div>
  )
}
