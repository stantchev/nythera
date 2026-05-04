'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/',        label: 'Index'    },
  { href: '/work',    label: 'Work'     },
  { href: '/collab',  label: 'Concepts' },
  { href: '/approach',label: 'Approach' },
]

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    const handler = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(11,11,12,0.96)' : 'transparent',
          backdropFilter:   scrolled ? 'blur(14px)' : 'none',
          borderBottom:     scrolled ? '1px solid rgba(30,30,33,0.9)' : '1px solid transparent',
        }}
      >
        <div
          style={{
            maxWidth: '80rem', margin: '0 auto',
            padding: '0 1.5rem', height: '4rem',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}
        >
          {/* Wordmark */}
          <Link
            href="/"
            aria-label="NYTHERA — Home"
            style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '0.82rem',
              letterSpacing: '0.32em', textTransform: 'uppercase',
              color: 'var(--text-primary)', textDecoration: 'none',
              transition: 'color 0.3s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-silver)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            NYTHERA
          </Link>

          {/* Desktop nav — hidden below md */}
          <nav
            aria-label="Primary navigation"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '2.5rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map(({ href, label }) => (
              <NavLink key={href} href={href} active={pathname === href || (href !== '/' && pathname.startsWith(href))}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA — hidden below md */}
          <div className="desktop-cta">
            <Link
              href="/studio"
              style={{
                fontFamily: 'var(--font-cinzel)', fontSize: '0.58rem',
                letterSpacing: '0.22em', textTransform: 'uppercase',
                padding: '0.5rem 1.3rem',
                border: '1px solid rgba(192,192,192,0.3)',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.3s, border-color 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)'
                e.currentTarget.style.borderColor = 'var(--accent-red)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)'
                e.currentTarget.style.borderColor = 'rgba(192,192,192,0.3)'
              }}
            >
              Open to collaboration
            </Link>
          </div>

          {/* Hamburger — hidden above md */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '0.5rem', display: 'flex', flexDirection: 'column',
              gap: '5px', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                aria-hidden
                style={{
                  display: 'block', height: '1px',
                  background: i === 2 ? 'var(--accent-red)' : 'var(--text-primary)',
                  width: i === 2 ? (menuOpen ? '24px' : '14px') : '24px',
                  transition: 'all 0.3s ease',
                  transform:
                    i === 0 && menuOpen ? 'translateY(6px) rotate(45deg)'   :
                    i === 2 && menuOpen ? 'translateY(-6px) rotate(-45deg)'  : 'none',
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay menu — only renders when open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="mobile-menu-overlay"
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'var(--bg-primary)',
            }}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="grain-overlay" aria-hidden />

            <nav
              className="relative z-10 flex flex-col items-center"
              style={{ gap: '2.5rem' }}
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.15, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Link
                    href={href}
                    style={{
                      fontFamily: 'var(--font-cinzel)',
                      fontSize: 'clamp(1.6rem, 7vw, 2.4rem)',
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: (pathname === href || (href !== '/' && pathname.startsWith(href)))
                        ? 'var(--accent-silver)' : 'var(--text-primary)',
                      textDecoration: 'none',
                      display: 'block',
                    }}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.48, duration: 0.5 }}
                style={{ marginTop: '1rem' }}
              >
                <Link
                  href="/studio"
                  style={{
                    fontFamily: 'var(--font-cinzel)', fontSize: '0.65rem',
                    letterSpacing: '0.22em', textTransform: 'uppercase',
                    padding: '0.875rem 2rem',
                    border: '1px solid rgba(139,0,0,0.5)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none', display: 'inline-block',
                  }}
                >
                  Open to collaboration
                </Link>
              </motion.div>
            </nav>

            {/* Footer mark inside mobile menu */}
            <motion.p
              style={{
                position: 'absolute', bottom: '2rem',
                fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', opacity: 0.25,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.25 }}
              transition={{ delay: 0.55 }}
            >
              NYTHERA — Conceptual Studio
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className="underline-reveal"
      aria-current={active ? 'page' : undefined}
      style={{
        fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: active ? 'var(--accent-silver)' : 'var(--text-secondary)',
        textDecoration: 'none', transition: 'color 0.3s',
        display: 'inline-block',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-primary)' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)' }}
    >
      {children}
    </Link>
  )
}
