'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/data/navigation'
import { NavItem } from '@/types'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled
            ? 'border-b border-white/5 backdrop-blur-xl'
            : 'bg-transparent'
        )}
        style={scrolled ? { backgroundColor: 'rgba(19,19,19,0.88)' } : undefined}
      >
        <nav className="container-xl flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <Image
              src="/logo.png"
              alt="Aplica Technology"
              width={1486}
              height={567}
              style={{ height: '2.25rem', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-2 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
              />
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact#book"
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)',
                boxShadow: '0 4px 20px rgba(0,108,247,0.30)',
              }}
            >
              Book a Demo
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 hover:text-white lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-white/5 backdrop-blur-xl lg:hidden"
            style={{ backgroundColor: 'rgba(19,19,19,0.97)' }}
          >
            <div className="container-xl py-6">
              <ul className="space-y-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    {item.children ? (
                      <MobileAccordion item={item} />
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6">
                <Link
                  href="/contact"
                  className="rounded-lg border border-white/20 px-4 py-3 text-center text-sm font-medium text-slate-200 hover:border-white/40 hover:text-white"
                >
                  Talk to Our Team
                </Link>
                <Link
                  href="/contact#book"
                  className="rounded-full px-4 py-3 text-center text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #6eaaff 0%, #006CF7 100%)' }}
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Desktop nav link with dropdown
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
          className="relative block px-3 py-2 text-base font-semibold text-white"
        >
          {item.label}
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white"
            initial={false}
            animate={{ scaleX: isActive ? 1 : 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ originX: 0 }}
          />
        </Link>
      </li>
    )
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setActiveDropdown(item.label)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className="relative flex items-center gap-1 px-3 py-2 text-base font-semibold text-white"
      >
        {item.label}
        <ChevronDown
          size={14}
          className={cn('transition-transform duration-200', isOpen && 'rotate-180')}
        />
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-white"
          initial={false}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0 }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className={cn(
              'absolute left-0 top-full mt-2 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl',
              item.children.length > 8 ? 'w-[500px]' : 'w-64'
            )}
          >
            <div className={cn(item.children.length > 8 && 'grid grid-cols-2 gap-x-1')}>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {child.label}
              </Link>
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

// Mobile accordion for items with children
function MobileAccordion({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
      >
        {item.label}
        <ChevronDown
          size={16}
          className={cn('transition-transform duration-200', open && 'rotate-180')}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden pl-4"
          >
            {item.children?.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block rounded-lg px-4 py-2.5 text-sm text-slate-400 hover:text-white"
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
