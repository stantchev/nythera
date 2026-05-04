'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section
      aria-label="Begin a project"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        padding: '10rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background atmosphere */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 55% 45% at 50% 50%, rgba(139,0,0,0.045) 0%, transparent 70%)',
      }} />
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(192,192,192,0.01) 40px, rgba(192,192,192,0.01) 41px)',
      }} />

      {/* Side rails */}
      {['15%', null].map((left, i) => (
        <div key={i} aria-hidden style={{
          position: 'absolute',
          left: left ?? undefined,
          right: !left ? '15%' : undefined,
          top: 0, bottom: 0, width: '1px',
          background: 'linear-gradient(to bottom, transparent, var(--border-subtle), transparent)',
          opacity: 0.6,
        }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>

        <motion.p
          className="label-tag" style={{ marginBottom: '1.5rem' }}
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          New Engagements
        </motion.p>

        <motion.h2
          className="section-title"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem' }}
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Ready to build
        </motion.h2>

        <motion.h2
          style={{
            fontFamily: 'var(--font-cinzel)', fontWeight: 600,
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--accent-red)', marginBottom: '2rem',
          }}
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          something specific?
        </motion.h2>

        {/* Red rule */}
        <motion.div
          style={{ margin: '0 auto 2rem', height: '1px', backgroundColor: 'var(--accent-red)', transformOrigin: 'center' }}
          initial={{ width: 0, opacity: 0 }} whileInView={{ width: '60px', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
        />

        <motion.p
          style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
            fontWeight: 300, color: 'var(--text-secondary)',
            maxWidth: '30rem', margin: '0 auto 3.5rem',
            lineHeight: 1.85,
          }}
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          NYTHERA operates primarily as an independent studio.
          Occasional collaborations are considered when the visual question is interesting enough.
        </motion.p>

        <motion.div
          className="cta-buttons"
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          <Link href="/collab" className="btn-primary">
            <span>Explore the concepts</span>
          </Link>
        </motion.div>

        <motion.p
          style={{
            marginTop: '4rem', fontFamily: 'var(--font-mono)',
            fontSize: '0.58rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--text-secondary)', opacity: 0.3,
          }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.75 }}
        >
          All current brand partnerships operate under NDA
        </motion.p>
      </div>
    </section>
  )
}
