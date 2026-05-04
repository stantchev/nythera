'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BrandAmbience from '@/components/motion/BrandAmbience'
import { getMicroEmotion } from '@/lib/microEmotions'

const fade = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-50px' },
  transition:  { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function BrandPageClient({ brand, theme }) {
  const emotion = getMicroEmotion(brand)
  const t       = emotion.transition

  return (
    <>
      <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100svh', paddingTop: '4rem', overflowX: 'hidden' }}>

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            padding: 'clamp(6rem, 12vw, 10rem) 1.5rem clamp(4rem, 8vw, 6rem)',
            borderBottom: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}
        >
          {/* Brand accent atmosphere */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${theme.accentMuted} 0%, transparent 70%)`,
          }} />
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(192,192,192,0.012) 0px, transparent 1px, transparent 80px)',
          }} />
          <BrandAmbience brand={brand} opacity={0.75} />

          <div style={{ position: 'relative', zIndex: 3, maxWidth: '72rem', margin: '0 auto' }}>

            {/* Breadcrumb */}
            <motion.div
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Link href="/collab" style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', textDecoration: 'none',
                transition: 'color 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                Concepts
              </Link>
              <span style={{ color: 'var(--border-dim)', fontSize: '0.6rem' }}>—</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: theme.accent,
              }}>
                {theme.name}
              </span>
            </motion.div>

            {/* Brand name */}
            <motion.p
              className="label-tag"
              style={{ marginBottom: '1rem', color: theme.accent }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {theme.category} — {theme.year}
            </motion.p>

            <motion.h1
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '1.75rem',
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: t.duration, delay: 0.18, ease: t.ease }}
            >
              {theme.name}
            </motion.h1>

            {/* Brand-coloured rule */}
            <motion.div
              style={{ height: '1px', backgroundColor: theme.accent, marginBottom: '2rem', transformOrigin: 'left' }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.42 }}
            />

            {/* Tagline */}
            <motion.p
              style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                letterSpacing: '0.06em',
                color: 'var(--text-secondary)',
                maxWidth: '40rem',
                lineHeight: 1.65,
                fontStyle: 'italic',
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.55 }}
            >
              "{theme.tagline}"
            </motion.p>

            {/* Study label */}
            <motion.div
              style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
            >
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                border: `1px solid ${theme.accent}55`,
                color: theme.accent, padding: '0.3rem 0.8rem',
              }}>
                Conceptual Direction Study
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', opacity: 0.5,
              }}>
                {theme.status}
              </span>
            </motion.div>
          </div>
        </section>

        {/* ── CONTEXT ──────────────────────────────────────────────────────── */}
        <section style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 22rem), 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            <motion.div {...fade(0)}>
              <p className="label-tag" style={{ marginBottom: '1.25rem' }}>
                {theme.context.heading}
              </p>
              <div style={{ width: '2rem', height: '1px', backgroundColor: theme.accent, marginBottom: '2rem', opacity: 0.7 }} />
            </motion.div>
            <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }} {...fade(0.1)}>
              {theme.context.body.map((para, i) => (
                <p key={i} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: i === 0 ? 'clamp(1rem, 2vw, 1.1rem)' : '0.92rem',
                  fontWeight: 300,
                  color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  lineHeight: 1.9,
                }}>
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── EXPLORATION ──────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(4rem, 8vw, 6rem) 1.5rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <motion.p className="label-tag" style={{ marginBottom: '3rem' }} {...fade(0)}>
              {theme.exploration.heading}
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
              gap: '4rem',
              alignItems: 'start',
              marginBottom: '4rem',
            }}>
              {/* Text */}
              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }} {...fade(0.08)}>
                {theme.exploration.body.map((para, i) => (
                  <p key={i} style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.92rem',
                    fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9,
                  }}>
                    {para}
                  </p>
                ))}
              </motion.div>

              {/* Direction matrix */}
              <motion.div
                style={{ border: '1px solid var(--border-subtle)', overflow: 'hidden' }}
                {...fade(0.16)}
              >
                {Object.entries(theme.exploration.direction).map(([key, val], i, arr) => (
                  <div key={key} style={{
                    display: 'grid',
                    gridTemplateColumns: '5rem 1fr',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  }}>
                    <div style={{
                      padding: '1.25rem 1rem',
                      borderRight: '1px solid var(--border-subtle)',
                      backgroundColor: 'var(--bg-primary)',
                      display: 'flex', alignItems: 'flex-start', paddingTop: '1.3rem',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: theme.accent,
                      }}>
                        {key}
                      </span>
                    </div>
                    <div style={{ padding: '1.25rem 1.25rem' }}>
                      <p style={{
                        fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
                        fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.7,
                      }}>
                        {val}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CONCEPTS ─────────────────────────────────────────────────────── */}
        <section style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(4rem, 8vw, 6rem) 1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <motion.p className="label-tag" style={{ marginBottom: '3rem' }} {...fade(0)}>
            Concept Directions
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 20rem), 1fr))', gap: '1px', backgroundColor: 'var(--border-subtle)' }}>
            {theme.concepts.map((concept, i) => (
              <motion.div
                key={concept.num}
                style={{ backgroundColor: 'var(--bg-primary)', padding: '2rem' }}
                {...fade(i * 0.1)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.2em', color: theme.accent }}>
                    {concept.num}
                  </span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-dim)' }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-cinzel)', fontSize: '0.88rem',
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--text-primary)', marginBottom: '0.9rem',
                }}>
                  {concept.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.84rem',
                  fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8,
                }}>
                  {concept.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── VISUAL LANGUAGE ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', padding: 'clamp(4rem, 8vw, 6rem) 1.5rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <motion.p className="label-tag" style={{ marginBottom: '3rem' }} {...fade(0)}>
              Visual Language
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 26rem), 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}>
              {/* Palette swatches */}
              <motion.div {...fade(0.08)}>
                <p style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--text-secondary)', marginBottom: '1.25rem', opacity: 0.7,
                }}>
                  Palette
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  {theme.visualLanguage.palette.map((color, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                      <div style={{
                        width: '3rem', height: '4rem',
                        backgroundColor: color,
                        border: '1px solid var(--border-subtle)',
                      }} />
                      <span style={{
                        fontFamily: 'var(--font-mono)', fontSize: '0.42rem',
                        letterSpacing: '0.08em', color: 'var(--text-secondary)', opacity: 0.5,
                      }}>
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
                <p style={{
                  fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
                  fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.75, fontStyle: 'italic',
                }}>
                  {theme.visualLanguage.colorNotes}
                </p>
              </motion.div>

              {/* Motion + Mood */}
              <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0' }} {...fade(0.16)}>
                {[
                  { label: 'Motion', val: theme.visualLanguage.motion },
                  { label: 'Mood',   val: theme.visualLanguage.mood   },
                  { label: 'Scope',  val: theme.scope.join(' — ')     },
                ].map((row, i, arr) => (
                  <div key={row.label} style={{
                    display: 'grid',
                    gridTemplateColumns: '4.5rem 1fr',
                    gap: '1rem',
                    padding: '1.25rem 0',
                    borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    alignItems: 'flex-start',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)', fontSize: '0.5rem',
                      letterSpacing: '0.16em', textTransform: 'uppercase',
                      color: theme.accent, paddingTop: '0.12rem',
                    }}>
                      {row.label}
                    </span>
                    <p style={{
                      fontFamily: 'var(--font-inter)', fontSize: '0.84rem',
                      fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.75,
                    }}>
                      {row.val}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── OTHER STUDIES ─────────────────────────────────────────────────── */}
        <section style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}>
          <motion.p className="label-tag" style={{ marginBottom: '2rem' }} {...fade(0)}>
            Other Studies
          </motion.p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['killstar', 'demonia', 'newrock', 'drmartens', 'vans']
              .filter(b => b !== brand)
              .map(b => {
                const labels = {
                  killstar: 'Killstar', demonia: 'Demonia',
                  newrock: 'New Rock', drmartens: 'Dr. Martens', vans: 'Vans',
                }
                return (
                  <Link key={b} href={`/collab/${b}`} style={{
                    fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    padding: '0.65rem 1.25rem',
                    border: '1px solid var(--border-dim)',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = theme.accent
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-dim)'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    {labels[b]}
                  </Link>
                )
              })}
          </div>
        </section>

        {/* ── SUBTLE CTA ───────────────────────────────────────────────────── */}
        <section style={{ borderTop: '1px solid var(--border-subtle)', padding: 'clamp(3rem, 6vw, 4rem) 1.5rem' }}>
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-cinzel)', fontSize: '0.68rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', marginBottom: '0.35rem',
              }}>
                Open to collaboration.
              </p>
              <p style={{
                fontFamily: 'var(--font-inter)', fontSize: '0.8rem',
                fontWeight: 300, color: 'var(--text-secondary)', opacity: 0.5,
              }}>
                These studies are independent. If you are the brand, or represent one like it —
              </p>
            </div>
            <Link href="/studio" style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '0.6rem',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '0.75rem 1.75rem',
              border: `1px solid ${theme.accent}55`,
              color: theme.accent, textDecoration: 'none',
              transition: 'border-color 0.3s, color 0.3s',
              flexShrink: 0,
              display: 'inline-block',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = theme.accent
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = `${theme.accent}55`
                e.currentTarget.style.color = theme.accent
              }}
            >
              Get in touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
