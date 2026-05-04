'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const items = [
  { id:'p1', category:'Editorial',   title:'Nocturne I',   year:'2024', bg:'#0D0D0F', hl:'#8B0000',  span: 8 },
  { id:'p2', category:'Lookbook',    title:'Ashen Court',  year:'2024', bg:'#111113', hl:'#C0C0C0',  span: 4 },
  { id:'p3', category:'Campaign',    title:'Veil Series',  year:'2024', bg:'#0F0F11', hl:'#5a0000',  span: 4 },
  { id:'p4', category:'Collection',  title:'Ossuary',      year:'2023', bg:'#0C0C0E', hl:'#8B0000',  span: 4 },
  { id:'p5', category:'Editorial',   title:'Sable',        year:'2023', bg:'#101012', hl:'#C0C0C0',  span: 4 },
  { id:'p6', category:'Identity',    title:'The Quiet',    year:'2022', bg:'#0E0E10', hl:'#4a4a50',  span: 4 },
]

export default function Portfolio() {
  return (
    <section
      aria-label="Selected Work"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        padding: '8rem 1.5rem',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          style={{ marginBottom: '5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="label-tag" style={{ marginBottom: '1rem' }}>Selected Work</p>
          <h2 className="section-title">Portfolio</h2>
          <div style={{ marginTop: '1rem', width: '4rem', height: '1px', backgroundColor: 'var(--accent-red)', opacity: 0.75 }} />
        </motion.div>

        {/* CSS grid: 12-col, 1px gap on bg to act as separator lines */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1px',
          backgroundColor: 'var(--border-subtle)',
        }}>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              style={{ gridColumn: `span ${item.span}` }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: i * 0.08 }}
            >
              <PortfolioBlock item={item} tall={item.span >= 8} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          style={{ marginTop: '3.5rem', textAlign: 'center' }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/work" className="btn-ghost">
            View Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function PortfolioBlock({ item, tall }) {
  return (
    <div
      className="img-zoom"
      style={{
        position: 'relative',
        aspectRatio: tall ? '3/2' : '4/3',
        backgroundColor: item.bg,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* SVG atmospheric placeholder — no external images needed */}
      <svg
        width="100%" height="100%"
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-label={item.title}
        style={{ display: 'block', transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}
      >
        <defs>
          <radialGradient id={`g-${item.id}`} cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor={item.hl} stopOpacity="0.28" />
            <stop offset="100%" stopColor={item.bg} stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill={item.bg} />
        <rect width="800" height="600" fill={`url(#g-${item.id})`} />
        <ellipse cx="400" cy="360" rx="70" ry="190" fill={item.hl} opacity="0.045" />
        <line x1="200" y1="0" x2="200" y2="600" stroke="#C0C0C0" strokeWidth="0.4" opacity="0.045" />
        <line x1="600" y1="0" x2="600" y2="600" stroke="#C0C0C0" strokeWidth="0.4" opacity="0.045" />
      </svg>

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: 'var(--bg-primary)',
        opacity: 0, transition: 'opacity 0.5s',
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.42'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0'}
      />

      {/* Caption */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '1.25rem',
        background: 'linear-gradient(to top, rgba(11,11,12,0.85), transparent)',
      }}>
        <p className="label-tag" style={{ marginBottom: '0.3rem' }}>{item.category}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h3 style={{
            fontFamily: 'var(--font-cinzel)', fontSize: '0.8rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-primary)',
          }}>
            {item.title}
          </h3>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
            letterSpacing: '0.1em', color: 'var(--text-secondary)',
          }}>
            {item.year}
          </span>
        </div>
      </div>

      {/* Corner detail */}
      <div style={{
        position: 'absolute', top: '0.75rem', right: '0.75rem',
        width: '14px', height: '14px', opacity: 0.22,
      }}>
        <div style={{ position:'absolute', top:0, right:0, width:'100%', height:'1px', background:'var(--accent-silver)' }} />
        <div style={{ position:'absolute', top:0, right:0, width:'1px', height:'100%', background:'var(--accent-silver)' }} />
      </div>
    </div>
  )
}
