'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

// Brand data for the hub grid
const brands = [
  {
    slug:     'killstar',
    name:     'Killstar',
    category: 'Alternative Fashion',
    year:     '2024',
    accent:   '#6E00FF',
    logotype: 'K',
    idea:     'Occult visual systems. Identity at the edge of the mainstream.',
    tags:     ['Identity', 'Editorial', 'Campaign'],
    status:   'Ongoing study',
  },
  {
    slug:     'demonia',
    name:     'Demonia',
    category: 'Alternative Footwear',
    year:     '2024',
    accent:   '#8B0000',
    logotype: 'D',
    idea:     'Platform as architecture. Objects divorced from function.',
    tags:     ['Product', 'Space', 'Form'],
    status:   'Complete',
  },
  {
    slug:     'newrock',
    name:     'New Rock',
    category: 'Gothic Footwear',
    year:     '2023',
    accent:   '#5A5A5A',
    logotype: 'NR',
    idea:     'Industrial heritage as visual language. Weight made deliberate.',
    tags:     ['Heritage', 'Material', 'Editorial'],
    status:   'Complete',
  },
  {
    slug:     'drmartens',
    name:     'Dr. Martens',
    category: 'Heritage Footwear',
    year:     '2023',
    accent:   '#C8A800',
    logotype: 'DM',
    idea:     'Subculture as archaeology. Objects that accumulate meaning.',
    tags:     ['Archive', 'Culture', 'Identity'],
    status:   'Complete',
  },
  {
    slug:     'vans',
    name:     'Vans',
    category: 'Skate / Streetwear',
    year:     '2022',
    accent:   '#CC0000',
    logotype: 'V',
    idea:     'The everyday object re-examined. Familiarity as creative constraint.',
    tags:     ['Repositioning', 'Editorial', 'Tone'],
    status:   'Complete',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function CollabHubClient() {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <main
        style={{
          backgroundColor: 'var(--bg-primary)',
          minHeight: '100svh',
          paddingTop: '4rem',
          overflowX: 'hidden',
        }}
      >
        {/* ── Page header ─────────────────────────────────────────────────── */}
        <section
          style={{
            position: 'relative',
            padding: 'clamp(5rem, 10vw, 8rem) 1.5rem clamp(3rem, 6vw, 5rem)',
            borderBottom: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}
        >
          {/* Atmosphere */}
          <div aria-hidden style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 55% 45% at 50% 60%, rgba(139,0,0,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div aria-hidden style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(192,192,192,0.014) 0px, transparent 1px, transparent 80px)',
          }} />

          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 28rem), 1fr))',
              gap: '3rem',
              alignItems: 'end',
            }}>
              {/* Left: title block */}
              <div>
                <motion.p
                  className="label-tag"
                  style={{ marginBottom: '1.25rem' }}
                  {...fadeUp(0)}
                >
                  Conceptual Explorations
                </motion.p>

                <motion.h1
                  className="section-title"
                  style={{ fontSize: 'clamp(2.8rem, 7vw, 5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}
                  {...fadeUp(0.08)}
                >
                  Concepts
                </motion.h1>

                <motion.div
                  style={{ height: '1px', backgroundColor: 'var(--accent-red)', transformOrigin: 'left', marginBottom: '1.75rem' }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />

                <motion.p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                    fontWeight: 300,
                    color: 'var(--text-secondary)',
                    lineHeight: 1.85,
                    maxWidth: '36rem',
                  }}
                  {...fadeUp(0.15)}
                >
                  Selected conceptual explorations for fashion brands.
                  Each study examines a brand's visual potential — not as a client brief,
                  but as a creative question.
                </motion.p>
              </div>

              {/* Right: index count + year range */}
              <motion.div
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                {...fadeUp(0.22)}
              >
                <div style={{ display: 'flex', gap: '3rem' }}>
                  {[
                    { value: '05', label: 'Studies' },
                    { value: '3', label: 'Years' },
                    { value: '∞', label: 'Ongoing' },
                  ].map(s => (
                    <div key={s.label}>
                      <p style={{
                        fontFamily: 'var(--font-cinzel)',
                        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                        letterSpacing: '0.04em',
                        color: 'var(--text-primary)',
                        lineHeight: 1,
                        marginBottom: '0.35rem',
                      }}>
                        {s.value}
                      </p>
                      <p className="label-tag">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Brand grid ──────────────────────────────────────────────────── */}
        <section
          style={{ maxWidth: '72rem', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) 1.5rem' }}
          aria-label="Brand concept studies"
        >
          {/* List layout — editorial, not card grid */}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
            {brands.map((brand, i) => (
              <BrandRow
                key={brand.slug}
                brand={brand}
                index={i}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </div>
        </section>

        {/* ── Large brand grid (visual) ────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: 'clamp(4rem, 8vw, 6rem) 1.5rem',
          }}
        >
          <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
            <motion.p
              className="label-tag"
              style={{ marginBottom: '3rem' }}
              {...fadeUp(0)}
            >
              Visual Index
            </motion.p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
              gap: '1px',
              backgroundColor: 'var(--border-subtle)',
            }}>
              {brands.map((brand, i) => (
                <BrandCard key={brand.slug} brand={brand} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Philosophy block ────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 1.5rem' }}>
          <div style={{ maxWidth: '52rem', margin: '0 auto' }}>
            <motion.div {...fadeUp(0)} style={{ marginBottom: '4rem' }}>
              <p className="label-tag" style={{ marginBottom: '1.5rem' }}>
                The Approach
              </p>
              <blockquote style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                letterSpacing: '0.06em',
                color: 'var(--text-primary)',
                lineHeight: 1.55,
                borderLeft: '2px solid var(--accent-red)',
                paddingLeft: '1.75rem',
                margin: 0,
              }}>
                "We explore visual identity through motion, tone, and digital space.
                Each study is a proposition — not a pitch."
              </blockquote>
            </motion.div>

            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
              {...fadeUp(0.12)}
            >
              {[
                { num: '01', text: 'We choose brands that raise interesting visual questions.' },
                { num: '02', text: 'We study them through the lens of motion and editorial language.' },
                { num: '03', text: 'We document what we find — as concepts, not proposals.' },
              ].map((item, i) => (
                <div
                  key={item.num}
                  style={{
                    display: 'flex', gap: '1.5rem', alignItems: 'flex-start',
                    padding: '1.5rem 0',
                    borderBottom: i < 2 ? '1px solid var(--border-subtle)' : 'none',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
                    letterSpacing: '0.2em', color: 'var(--accent-red)',
                    flexShrink: 0, marginTop: '0.2rem',
                  }}>
                    {item.num}
                  </span>
                  <p style={{
                    fontFamily: 'var(--font-inter)', fontSize: '0.92rem',
                    fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8,
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Footnote / disclaimer ────────────────────────────────────────── */}
        <section
          style={{
            borderTop: '1px solid var(--border-subtle)',
            padding: '2.5rem 1.5rem',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <div style={{ maxWidth: '72rem', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '1.5rem', height: '1px', backgroundColor: 'var(--accent-red)', flexShrink: 0, opacity: 0.6 }} />
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.78rem',
              fontWeight: 300, color: 'var(--text-secondary)',
              lineHeight: 1.7, opacity: 0.65,
            }}>
              These are independent conceptual studies. They are not official collaborations,
              commissioned work, or partnerships with the brands featured. All brand names
              are used for reference purposes within speculative creative research.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

// ── Brand row — editorial list item ──────────────────────────────────────────
function BrandRow({ brand, index, hovered, setHovered }) {
  const isHovered = hovered === brand.slug
  const isOtherHovered = hovered !== null && !isHovered

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={`/collab/${brand.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setHovered(brand.slug)}
        onMouseLeave={() => setHovered(null)}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2.5rem 1fr auto',
            gap: '1.5rem',
            alignItems: 'center',
            padding: '1.75rem 0',
            borderBottom: '1px solid var(--border-subtle)',
            transition: 'opacity 0.3s ease',
            opacity: isOtherHovered ? 0.35 : 1,
          }}
        >
          {/* Index number */}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.56rem',
            letterSpacing: '0.2em', color: isHovered ? brand.accent : 'var(--accent-red)',
            transition: 'color 0.3s',
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>

          {/* Brand name + idea */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
              <h2 style={{
                fontFamily: 'var(--font-cinzel)',
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: isHovered ? brand.accent : 'var(--text-primary)',
                transition: 'color 0.35s ease',
                lineHeight: 1,
              }}>
                {brand.name}
              </h2>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--text-secondary)', opacity: 0.6,
              }}>
                {brand.category}
              </span>
            </div>
            <p style={{
              fontFamily: 'var(--font-inter)', fontSize: '0.82rem',
              fontWeight: 300, color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '38rem',
              transition: 'color 0.3s',
            }}>
              {brand.idea}
            </p>
          </div>

          {/* Right: tags + arrow */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {brand.tags.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.48rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `1px solid ${isHovered ? brand.accent + '55' : 'var(--border-dim)'}`,
                  color: 'var(--text-secondary)', padding: '0.18rem 0.45rem',
                  transition: 'border-color 0.3s',
                }}>
                  {t}
                </span>
              ))}
            </div>
            <span style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '0.68rem',
              letterSpacing: '0.15em',
              color: isHovered ? brand.accent : 'var(--text-secondary)',
              transition: 'color 0.3s, transform 0.3s',
              display: 'inline-block',
              transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
            }}>
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// ── Brand card — visual grid tile ────────────────────────────────────────────
function BrandCard({ brand, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.7, delay: index * 0.09 }}
    >
      <Link
        href={`/collab/${brand.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            aspectRatio: '1/1',
            backgroundColor: 'var(--bg-primary)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.25rem',
            transition: 'background-color 0.4s',
          }}
        >
          {/* Brand accent atmosphere */}
          <div
            aria-hidden
            style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(circle at 50% 60%, ${brand.accent}22 0%, transparent 70%)`,
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />

          {/* Logotype mark */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{
              fontFamily: 'var(--font-cinzel)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '0.06em',
              color: isHovered ? brand.accent : 'rgba(192,192,192,0.12)',
              transition: 'color 0.45s ease',
              lineHeight: 1,
            }}>
              {brand.logotype}
            </span>
          </div>

          {/* Bottom: name + year */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p className="label-tag" style={{ marginBottom: '0.3rem', color: isHovered ? brand.accent : 'var(--accent-red)' }}>
              {brand.year}
            </p>
            <h3 style={{
              fontFamily: 'var(--font-cinzel)', fontSize: '0.7rem',
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
              transition: 'color 0.35s',
            }}>
              {brand.name}
            </h3>
          </div>

          {/* Corner detail */}
          <div aria-hidden style={{
            position: 'absolute', bottom: '1.25rem', right: '1.25rem',
            width: 14, height: 14, opacity: isHovered ? 0.4 : 0.1,
            transition: 'opacity 0.35s',
          }}>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: '1px', background: 'var(--accent-silver)' }} />
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '1px', height: '100%', background: 'var(--accent-silver)' }} />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
