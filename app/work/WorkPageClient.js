'use client'

export const metadata = {
  title: 'Work & Portfolio',
  description: 'Selected editorial projects, brand identities, and campaign direction. Dark fashion creative work by NYTHERA agency.',
  alternates: { canonical: 'https://nythera.com/work' },
}


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '@/components/Footer'

const filters = ['All', 'Editorial', 'Identity', 'Campaign', 'Collection', 'Lookbook']

const projects = [
  { id:'w1',  category:'Editorial',  title:'Nocturne I',       year:'2024', bg:'#0D0D0F', hl:'#8B0000'  },
  { id:'w2',  category:'Lookbook',   title:'Ashen Court',      year:'2024', bg:'#111113', hl:'#C0C0C0'  },
  { id:'w3',  category:'Campaign',   title:'Veil Series',      year:'2024', bg:'#0F0F11', hl:'#5a0000'  },
  { id:'w4',  category:'Collection', title:'Ossuary',          year:'2023', bg:'#0C0C0E', hl:'#8B0000'  },
  { id:'w5',  category:'Editorial',  title:'Sable',            year:'2023', bg:'#101012', hl:'#C0C0C0'  },
  { id:'w6',  category:'Identity',   title:'The Quiet',        year:'2022', bg:'#0E0E10', hl:'#4a4a50'  },
  { id:'w7',  category:'Editorial',  title:'Nocturne II',      year:'2023', bg:'#0B0B0D', hl:'#8B0000'  },
  { id:'w8',  category:'Campaign',   title:'Memento Mori',     year:'2023', bg:'#100F11', hl:'#5a0000'  },
  { id:'w9',  category:'Identity',   title:'Vessel',           year:'2022', bg:'#0D0D10', hl:'#C0C0C0'  },
]

export default function WorkPage() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <main style={{ backgroundColor:'var(--bg-primary)', minHeight:'100svh', paddingTop:'4rem' }}>

        {/* Header */}
        <section style={{ padding:'8rem 1.5rem 4rem', textAlign:'center', borderBottom:'1px solid var(--border-subtle)' }}>
          <motion.p className="label-tag" style={{ marginBottom:'1rem' }}
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            Selected Work
          </motion.p>
          <motion.h1 className="section-title" style={{ fontSize:'clamp(2.5rem,6vw,4.5rem)', marginBottom:'1rem' }}
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.85, delay:0.1, ease:[0.25,0.46,0.45,0.94] }}>
            Portfolio
          </motion.h1>
          <motion.div style={{ height:'1px', backgroundColor:'var(--accent-red)', width:'60px', margin:'0 auto' }}
            initial={{ scaleX:0, opacity:0 }} animate={{ scaleX:1, opacity:1 }}
            transition={{ duration:0.9, delay:0.35 }} />
        </section>

        {/* Filters */}
        <div style={{ maxWidth:'72rem', margin:'0 auto', padding:'2.5rem 1.5rem', display:'flex', gap:'0.5rem', flexWrap:'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setActive(f)}
              style={{
                fontFamily:'var(--font-cinzel)', fontSize:'0.6rem', letterSpacing:'0.2em',
                textTransform:'uppercase', padding:'0.5rem 1.1rem', cursor:'pointer',
                border: active === f ? '1px solid var(--accent-red)' : '1px solid var(--border-dim)',
                color: active === f ? 'var(--text-primary)' : 'var(--text-secondary)',
                background: active === f ? 'rgba(139,0,0,0.08)' : 'transparent',
                transition:'all 0.3s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ maxWidth:'72rem', margin:'0 auto', padding:'0 1.5rem 8rem' }}>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fill, minmax(min(100%, 22rem), 1fr))',
            gap:'1px', backgroundColor:'var(--border-subtle)',
          }}>
            <AnimatePresence mode="popLayout">
              {visible.map((p, i) => (
                <motion.div key={p.id} style={{ backgroundColor:'var(--bg-primary)' }}
                  initial={{ opacity:0, scale:0.97 }} animate={{ opacity:1, scale:1 }} exit={{ opacity:0, scale:0.97 }}
                  transition={{ duration:0.45, delay: i * 0.06 }}>
                  <WorkCard item={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

function WorkCard({ item }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      style={{ position:'relative', aspectRatio:'4/3', backgroundColor:item.bg, cursor:'pointer', overflow:'hidden' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice" aria-label={item.title}
        style={{ display:'block', transform: hovered ? 'scale(1.05)' : 'scale(1)', transition:'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)' }}>
        <defs>
          <radialGradient id={`wg-${item.id}`} cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor={item.hl} stopOpacity="0.28" />
            <stop offset="100%" stopColor={item.bg} stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="800" height="600" fill={item.bg} />
        <rect width="800" height="600" fill={`url(#wg-${item.id})`} />
        <ellipse cx="400" cy="360" rx="70" ry="190" fill={item.hl} opacity="0.04" />
      </svg>
      <div style={{
        position:'absolute', inset:0, background:'rgba(11,11,12,0.45)',
        opacity: hovered ? 1 : 0, transition:'opacity 0.4s',
      }} />
      <div style={{
        position:'absolute', bottom:0, left:0, right:0, padding:'1.25rem',
        background:'linear-gradient(to top, rgba(11,11,12,0.9), transparent)',
        transform: hovered ? 'translateY(0)' : 'translateY(6px)',
        transition:'transform 0.4s ease',
      }}>
        <p className="label-tag" style={{ marginBottom:'0.3rem' }}>{item.category}</p>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end' }}>
          <h3 style={{ fontFamily:'var(--font-cinzel)', fontSize:'0.82rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-primary)' }}>
            {item.title}
          </h3>
          <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', color:'var(--text-secondary)' }}>
            {item.year}
          </span>
        </div>
      </div>
    </div>
  )
}
