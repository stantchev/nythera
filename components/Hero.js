'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Link from 'next/link'
import MagneticButton from '@/components/motion/MagneticButton'

export default function Hero() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const mq = window.matchMedia(
      '(max-width: 767px), (hover: none), (prefers-reduced-motion: reduce)'
    )
    setIsMobile(mq.matches)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 300 : 60,
    damping:   isMobile ? 40  : 20,
    mass:      isMobile ? 0.1 : 0.8,
  })

  const bgY     = useTransform(smoothProgress, [0, 1], ['0%', isMobile ? '6%'  : '20%'])
  const midY    = useTransform(smoothProgress, [0, 1], ['0%', isMobile ? '0%'  : '38%'])
  const fgOpacity = useTransform(smoothProgress, [0, 0.55], [1, isMobile ? 0.92 : 0])
  const fgY       = useTransform(smoothProgress, [0, 0.55], ['0%', isMobile ? '0%' : '-3%'])

  return (
    <section
      ref={containerRef}
      aria-label="Hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Layer 1 — Background (slowest drift) */}
      <motion.div
        aria-hidden
        style={{ position: 'absolute', inset: '-12%', y: bgY, willChange: 'transform' }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(139,0,0,0.06) 0%, transparent 65%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`,
          backgroundSize: '300px 300px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(11,11,12,0.92) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(192,192,192,0.014) 0px, transparent 1px, transparent 90px)',
        }} />
      </motion.div>

      {/* Layer 2 — Mid structural lines */}
      <motion.div
        aria-hidden
        style={{ position: 'absolute', inset: '-12%', y: midY, willChange: 'transform', pointerEvents: 'none' }}
      >
        <div style={{ position: 'absolute', left: '8%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(192,192,192,0.08), transparent)' }} />
        <div style={{ position: 'absolute', right: '8%', top: 0, bottom: 0, width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(192,192,192,0.08), transparent)' }} />
        <CornerMarks />
      </motion.div>

      {/* Layer 3 — Foreground content */}
      <motion.div
        style={{
          position: 'relative', zIndex: 20,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 1.5rem',
          opacity: fgOpacity,
          y: fgY,
          willChange: 'opacity, transform',
        }}
      >
        {/* Studio label */}
        <motion.p
          className="label-tag"
          style={{ marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Conceptual Studio
        </motion.p>

        {/* Wordmark — simple motion, no clip/overflow */}
        <motion.h1
          className="hero-logo"
          aria-label="NYTHERA"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
        >
          N<span className="carved">Y</span>THERA
        </motion.h1>

        {/* Red rule */}
        <motion.div
          style={{
            marginTop: '1.75rem', marginBottom: '1.75rem',
            height: '1px', backgroundColor: 'var(--accent-red)',
            transformOrigin: 'center',
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: 'clamp(0.7rem, 2vw, 0.82rem)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '28rem',
            fontWeight: 300,
            lineHeight: 1.9,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3}}
        >
          Motion, identity, and visual direction — explored through the lens of fashion.
        </motion.p>

        {/* CTAs */}
        <motion.div
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <MagneticButton strength={0.2}>
            <Link href="/collab" className="btn-primary">
              <span>Explore Concepts</span>
            </Link>
          </MagneticButton>
          <MagneticButton strength={0.15}>
            <Link href="/work" className="btn-ghost">
              View Work
            </Link>
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute', bottom: '-42vh',
            left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
        >
          <span className="label-tag" style={{ fontSize: '0.5rem', letterSpacing: '0.34em' }}>
            Scroll
          </span>
          <motion.div
            style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, var(--accent-silver), transparent)', opacity: 0.28 }}
            animate={{ scaleY: [1, 0.4, 1], opacity: [0.28, 0.55, 0.28] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      <div className="grain-overlay" aria-hidden />
    </section>
  )
}

function CornerMarks() {
  const corners = [
    { top: '8%', left: '8%' },
    { top: '8%', right: '8%' },
    { bottom: '8%', left: '8%' },
    { bottom: '8%', right: '8%' },
  ]
  return (
    <>
      {corners.map((pos, i) => (
        <div key={i} style={{ position: 'absolute', width: 18, height: 18, opacity: 0.15, ...pos }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'var(--accent-silver)' }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '100%', background: 'var(--accent-silver)' }} />
        </div>
      ))}
    </>
  )
}
