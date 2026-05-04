'use client'

// components/Concepts.js — ENHANCED (polish pass)
// Changes: TiltCard wraps each card, ScrollRevealSection for header stagger,
// useStaggerReveal for natural cascade. Layout UNCHANGED.

import { motion } from 'framer-motion'
import Link from 'next/link'
import TiltCard from '@/components/motion/TiltCard'
import ScrollRevealSection from '@/components/motion/ScrollRevealSection'
import { headlineVariant, itemVariant, fadeVariant, scaleInVariant } from '@/components/motion/ScrollRevealSection'

const concepts = [
  {
    id: '01', category: 'Editorial Series', title: 'Nocturne',
    description: 'We shoot in the hours that belong to no one. Available darkness. Absolute stillness. Garments that dissolve into negative space.',
    tags: ['Monochrome', 'Ambient', 'Night'],
  },
  {
    id: '02', category: 'Collection Direction', title: 'Memento Mori',
    description: 'We direct collections built around visible time — oxidised hardware, aged fabric, craft that carries memory rather than hiding it.',
    tags: ['Gothic', 'Tactile', 'Craft'],
  },
  {
    id: '03', category: 'Brand Collaboration', title: 'Ashen Court',
    description: 'We build creative languages for brands that inhabit grey. Power dressed without compromise. Tailoring as quiet dominance.',
    tags: ['Luxury', 'Restraint', 'Tailoring'],
  },
]

export default function Concepts() {
  return (
    <section
      aria-label="Concepts"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        padding: '8rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(180deg, rgba(192,192,192,0.02) 0px, transparent 1px, transparent 100px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto' }}>

        {/* Header — staggered reveal */}
        <ScrollRevealSection
          as="div"
          stagger={0.12}
          delayChildren={0}
          style={{ marginBottom: '5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.p variants={fadeVariant()} className="label-tag" style={{ marginBottom: '1rem' }}>
            Creative Direction
          </motion.p>
          <motion.h2 variants={headlineVariant()} className="section-title">
            Concepts
          </motion.h2>
          <motion.div
            variants={scaleInVariant({ origin: 'center' })}
            style={{ marginTop: '1rem', width: '4rem', height: '1px', backgroundColor: 'var(--accent-red)', opacity: 0.75 }}
          />
          <motion.p
            variants={fadeVariant()}
            style={{
              marginTop: '1.5rem', fontFamily: 'var(--font-inter)', fontSize: '0.88rem',
              fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '28rem', lineHeight: 1.8,
            }}
          >
            We build each concept as a self-contained world — its own rules, palette, and creative logic.
          </motion.p>
        </ScrollRevealSection>

        {/* Card grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
          gap: '1px',
          backgroundColor: 'var(--border-subtle)',
        }}>
          {concepts.map((c, i) => <ConceptCard key={c.id} concept={c} index={i} />)}
        </div>

        {/* View all */}
        <motion.div
          style={{ marginTop: '3.5rem', textAlign: 'center' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Link href="/work" className="btn-ghost">See All Work</Link>
        </motion.div>
      </div>
    </section>
  )
}

function ConceptCard({ concept, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.72, delay: index * 0.11, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <TiltCard
        maxTilt={3.5}
        scale={1.012}
        ease={0.09}
        style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '2rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: '22rem',
          border: '1px solid transparent',
          cursor: 'default',
          transition: 'border-color 0.4s ease',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.2em', color: 'var(--accent-red)' }}>
              {concept.id}
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-dim)' }} />
          </div>
          <p className="label-tag" style={{ marginBottom: '0.75rem' }}>{concept.category}</p>
          <h3 style={{
            fontFamily: 'var(--font-cinzel)', fontSize: '1.05rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-primary)', marginBottom: '1rem',
          }}>
            {concept.title}
          </h3>
          <p style={{
            fontFamily: 'var(--font-inter)', fontSize: '0.85rem',
            fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8,
          }}>
            {concept.description}
          </p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
            {concept.tags.map(t => (
              <span key={t} style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-dim)', padding: '0.2rem 0.5rem',
              }}>
                {t}
              </span>
            ))}
          </div>
          <Link href="/work" className="label-tag underline-reveal" style={{ color: 'var(--accent-red)', textDecoration: 'none' }}>
            Explore →
          </Link>
        </div>
      </TiltCard>
    </motion.div>
  )
}
