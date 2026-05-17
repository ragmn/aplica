'use client'

import { ChevronUp } from 'lucide-react'

export function BackToTopBar() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="group w-full flex items-center justify-center gap-2 py-3.5 transition-opacity duration-200 hover:opacity-90"
      style={{
        background: 'linear-gradient(90deg, #6eaaff 0%, #006CF7 50%, #6eaaff 100%)',
      }}
    >
      <ChevronUp size={15} className="text-white transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden />
      <span className="text-xs font-bold uppercase tracking-widest text-white">Back to top</span>
    </button>
  )
}
