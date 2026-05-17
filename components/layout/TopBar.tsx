import Link from 'next/link'
import { Phone, Star } from 'lucide-react'

const badges = [
  'Microsoft Solutions Partner',
  'AI Cloud Partner',
  'Certified CSP',
]

export function TopBar() {
  return (
    <div
      className="hidden lg:block w-full"
      style={{ backgroundColor: '#0f172a' }}
    >
      <div className="container-xl flex items-center justify-between py-2.5">
        {/* Left: partner badges */}
        <div className="flex items-center gap-5">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-1.5">
              <Star
                size={11}
                className="fill-yellow-400 text-yellow-400"
                aria-hidden
              />
              <span className="text-xs font-medium text-slate-300">{badge}</span>
            </div>
          ))}
        </div>

        {/* Right: phone */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+442000000000"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 transition-colors hover:text-white"
          >
            <Phone size={11} aria-hidden />
            UK: +44 20 0000 0000
          </a>
          <Link
            href="/contact"
            className="rounded-full px-3.5 py-1 text-xs font-semibold text-white"
            style={{ background: 'rgba(0,108,247,0.80)', backdropFilter: 'blur(4px)' }}
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>
  )
}
