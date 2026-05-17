'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/data/navigation'
import { NavItem } from '@/types'


export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 48)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-[#131313] backdrop-blur-xl'
          : 'bg-[#131313] backdrop-blur-md'
      )}
      style={{ boxShadow: 'inset 0 -1px 0 rgba(255,255,255,0.07)' }}
    >
      <nav
        className="container-xl flex h-16 items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="group flex shrink-0 items-center" aria-label="Aplica homepage">
          <Image
            src="/logo.png"
            alt="Aplica Technology"
            width={1486}
            height={567}
            style={{ height: '2rem', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navigation.map((item) => (
            <NavLink
              key={item.href + item.label}
              item={item}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
            />
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            Contact
          </Link>
          <Link
            href="/contact#book"
            className="btn-primary text-sm"
            data-cta="header-book-call"
            aria-label="Book a free discovery call"
          >
            Book a Free Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-[#131313] lg:hidden"
            style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}
          >
            <div className="container-xl py-5">
              <ul className="space-y-1" role="list">
                {navigation.map((item) => (
                  <li key={item.href + item.label}>
                    {item.children ? (
                      <MobileAccordion item={item} />
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-col gap-3 pt-5" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07)' }}>
                <Link
                  href="/contact"
                  className="rounded-xl px-4 py-3 text-center text-sm font-semibold text-white/70 hover:text-white"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.12)' }}
                >
                  Talk to Our Team
                </Link>
                <Link
                  href="/contact#book"
                  className="btn-primary text-center text-sm"
                  data-cta="mobile-book-call"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  item,
  activeDropdown,
  setActiveDropdown,
}: {
  item: NavItem
  activeDropdown: string | null
  setActiveDropdown: (v: string | null) => void
}) {
  const pathname = usePathname()
  const isActive = item.href === '/'
    ? pathname === '/'
    : pathname === item.href || pathname.startsWith(item.href + '/')
  const isOpen = activeDropdown === item.label

  if (!item.children) {
    return (
      <li>
        <Link
          href={item.href}
          className={cn(
            'relative block rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors',
            isActive ? 'text-cta' : 'text-white/75 hover:text-white'
          )}
        >
          {item.label}
          {isActive && (
            <span
              className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full"
              style={{ background: '#006CF7' }}
            />
          )}
        </Link>
      </li>
    )
  }

  const isMegaMenu = item.label === 'Services'
  const isOutcomesMenu = item.label === 'Solutions'

  return (
    <li
      className="relative"
      onMouseEnter={() => setActiveDropdown(item.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className={cn(
          'flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors',
          isActive ? 'text-cta' : 'text-white/75 hover:text-white'
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={13}
          className={cn('text-white/40 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            className={cn(
              'absolute left-0 top-full mt-2 rounded-2xl bg-white shadow-xl',
              isMegaMenu ? 'w-[560px]' : isOutcomesMenu ? 'w-72' : 'w-60'
            )}
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.07)' }}
            role="menu"
          >
            {isMegaMenu ? (
              <div className="p-2">
                <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  What we do
                </p>
                <div className="grid grid-cols-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                      role="menuitem"
                    >
                      <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                        {child.label}
                      </span>
                      <ArrowRight
                        size={11}
                        className="shrink-0 text-slate-300 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </Link>
                  ))}
                </div>
                <div className="mt-1 border-t border-slate-100 px-3 pt-3 pb-2">
                  <Link
                    href="/contact#book"
                    className="flex items-center gap-2 text-xs font-semibold text-cta hover:underline"
                    data-cta="nav-book-call"
                  >
                    Book a free discovery call
                    <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            ) : isOutcomesMenu ? (
              <div className="p-2">
                <p className="px-3 pb-2 pt-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  Outcomes
                </p>
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-slate-50"
                    role="menuitem"
                  >
                    <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-slate-900">
                      {child.label}
                    </span>
                    <ArrowRight
                      size={11}
                      className="shrink-0 text-slate-300 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0"
                    />
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-2">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    role="menuitem"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

function MobileAccordion({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/5 hover:text-white"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={16}
          className={cn('text-white/40 transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden pl-4"
            role="list"
          >
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/60 hover:bg-white/5 hover:text-white"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
