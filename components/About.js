'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const pillars = [
  {
    num: '01',
    title: 'Visual Direction',
    body: 'Studying how brands occupy space — editorial, digital, physical. The logic that holds a visual system together.',
  },
  {
    num: '02',
    title: 'Motion Research',
    body: 'Exploring how time-based media changes the way identity is perceived. Not animation — motion as language.',
  },
  {
    num: '03',
    title: 'Identity Study',
    body: 'Examining what makes a mark, a typeface, a colour choice feel inevitable. The difference between designed and decided.',
  },
  {
    num: '04',
    title: 'Editorial Exploration',
    body: 'Photography and concept direction approached as research. The image as proposition, not product.',
  },
]

const stats = [
  { value: '40+', label: 'Projects' },
  { value: '18',  label: 'Brand Partners' },
  { value: '7',   label: 'Editorials' },
  { value: '4',   label: 'Collections' },
]

export default function About() {
  return (
    <section
      aria-label="About NYTHERA"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 1.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Vertical rule grid */}
      <div aria-hidden style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'repeating-linear-gradient(90deg, rgba(192,192,192,0.018) 0px, transparent 1px, transparent 120px)',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '72rem', margin: '0 auto' }}>

        {/* Section header */}
        <motion.div
          style={{ marginBottom: '5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp} custom={0}
        >
          <p className="label-tag" style={{ marginBottom: '1rem' }}>About</p>
          <h2 className="section-title">The Practice</h2>
          <div style={{ marginTop: '1rem', width: '4rem', height: '1px', backgroundColor: 'var(--accent-red)', opacity: 0.75 }} />
        </motion.div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left: agency statement */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp} custom={0.1}
          >
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontSize: 'clamp(1.05rem, 2vw, 1.18rem)',
              fontWeight: 300,
              color: 'var(--text-primary)',
              lineHeight: 1.75,
            }}>
              NYTHERA is a dark fashion creative agency. We design motion-driven
              brand experiences for alternative fashion companies.
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
              fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.85,
            }}>
              Editorial direction. Brand identity. Campaign architecture.
              Collection concepts. Every service delivered to a single standard:
              work that is precise, purposeful, and built to last.
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.95rem',
              fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.85,
            }}>
              We work with a small number of brands per season. Not because
              of capacity — because quality requires it.
            </p>
          </motion.div>

          {/* Right: service pillars */}
          <motion.div
            style={{ border: '1px solid var(--border-subtle)' }}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp} custom={0.22}
          >
            {pillars.map((p, i) => (
              <PillarRow key={i} pillar={p} last={i === pillars.length - 1} />
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          style={{
            marginTop: '6rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
            border: '1px solid var(--border-subtle)',
          }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp} custom={0.3}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '2rem',
                textAlign: 'center',
                borderRight: i < stats.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                marginBottom: '0.4rem',
              }}>
                {s.value}
              </p>
              <p className="label-tag">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function PillarRow({ pillar, last }) {
  return (
    <div
      className="group"
      style={{
        display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
        padding: '1.5rem',
        borderBottom: last ? 'none' : '1px solid var(--border-subtle)',
        transition: 'background-color 0.3s',
        cursor: 'default',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        letterSpacing: '0.2em', color: 'var(--accent-red)',
        marginTop: '0.15rem', flexShrink: 0,
      }}>
        {pillar.num}
      </span>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-cinzel)', fontSize: '0.72rem',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--text-primary)', marginBottom: '0.4rem',
        }}>
          {pillar.title}
        </h3>
        <p style={{
          fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
          fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.75,
        }}>
          {pillar.body}
        </p>
      </div>
    </div>
  )
}
