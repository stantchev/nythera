'use client'

export const metadata = {
  title: 'Our Approach',
  description: 'NYTHERA creative methodology: immersion, concept architecture, production, refinement. How we build dark fashion editorial campaigns and brand identities.',
  alternates: { canonical: 'https://nythera.com/approach' },
}


import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

const phases = [
  {
    num: '01', title: 'Immersion',
    body: 'We begin by refusing to begin. Before strategy, before concepts, before deliverables — we listen. We examine your existing visual language, your competitive context, your audience, and your ambitions. We identify what you are saying versus what you intend to say.',
    duration: '1–2 weeks',
  },
  {
    num: '02', title: 'Concept Architecture',
    body: 'We build the conceptual framework that will govern all creative decisions. This is not a mood board — it is a system. Rules for what can and cannot exist within the creative world we are constructing together.',
    duration: '2–3 weeks',
  },
  {
    num: '03', title: 'Production',
    body: 'We execute with obsessive precision. Every casting decision, location choice, lighting setup, and typographic selection is tested against the concept architecture. Nothing proceeds without intent.',
    duration: '3–6 weeks',
  },
  {
    num: '04', title: 'Refinement',
    body: 'We do not ship until the work is right. Post-production, art direction review, and brand integration are handled with the same rigour as the original concept. The final deliverable is the concept made real.',
    duration: '1–3 weeks',
  },
]

const principles = [
  'We do not work fast. We work correctly.',
  'We do not follow trends. We establish the standard by which future work is judged.',
  'We do not produce volume. We produce work that lasts.',
  'We do not compromise the concept. Every deviation weakens the whole.',
]

export default function ApproachPage() {
  return (
    <>
      <main style={{ backgroundColor:'var(--bg-primary)', minHeight:'100svh', paddingTop:'4rem' }}>

        {/* Header */}
        <section style={{ padding:'8rem 1.5rem 5rem', textAlign:'center', borderBottom:'1px solid var(--border-subtle)', position:'relative', overflow:'hidden' }}>
          <div aria-hidden style={{ position:'absolute', inset:0, backgroundImage:'repeating-linear-gradient(90deg, rgba(192,192,192,0.016) 0px, transparent 1px, transparent 80px)' }} />
          <motion.p className="label-tag" style={{ marginBottom:'1rem' }}
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            Methodology
          </motion.p>
          <motion.h1 className="section-title" style={{ fontSize:'clamp(2.5rem,6vw,4.5rem)', marginBottom:'1rem' }}
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.85, delay:0.1, ease:[0.25,0.46,0.45,0.94] }}>
            Our Approach
          </motion.h1>
          <motion.div style={{ height:'1px', backgroundColor:'var(--accent-red)', width:'60px', margin:'0 auto 1.5rem' }}
            initial={{ scaleX:0, opacity:0 }} animate={{ scaleX:1, opacity:1 }}
            transition={{ duration:0.9, delay:0.35 }} />
          <motion.p style={{ fontFamily:'var(--font-inter)', fontSize:'0.9rem', fontWeight:300, color:'var(--text-secondary)', maxWidth:'32rem', margin:'0 auto', lineHeight:1.85 }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.5 }}>
            We design everything — process included. Every engagement follows
            a methodology built around clarity, craft, and the refusal to rush.
          </motion.p>
        </section>

        {/* Process phases */}
        <section style={{ maxWidth:'72rem', margin:'0 auto', padding:'6rem 1.5rem' }}>
          <div style={{ borderTop:'1px solid var(--border-subtle)' }}>
            {phases.map((phase, i) => (
              <motion.div key={phase.num}
                style={{
                  display:'grid',
                  gridTemplateColumns:'auto 1fr auto',
                  gap:'2rem',
                  padding:'3rem 0',
                  borderBottom:'1px solid var(--border-subtle)',
                  alignItems:'start',
                }}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:'-50px' }}
                transition={{ duration:0.75, delay: i * 0.1, ease:[0.25,0.46,0.45,0.94] }}
              >
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.6rem', letterSpacing:'0.2em', color:'var(--accent-red)', marginTop:'0.2rem', minWidth:'2rem' }}>
                  {phase.num}
                </span>
                <div>
                  <h2 style={{ fontFamily:'var(--font-cinzel)', fontSize:'clamp(1rem,2.5vw,1.4rem)', letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--text-primary)', marginBottom:'1rem' }}>
                    {phase.title}
                  </h2>
                  <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.9rem', fontWeight:300, color:'var(--text-secondary)', lineHeight:1.85, maxWidth:'42rem' }}>
                    {phase.body}
                  </p>
                </div>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.56rem', letterSpacing:'0.12em', color:'var(--accent-red)', opacity:0.7, marginTop:'0.2rem', whiteSpace:'nowrap' }}>
                  {phase.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Principles */}
        <section style={{ backgroundColor:'var(--bg-secondary)', padding:'6rem 1.5rem', borderTop:'1px solid var(--border-subtle)' }}>
          <div style={{ maxWidth:'56rem', margin:'0 auto' }}>
            <motion.p className="label-tag" style={{ marginBottom:'3rem', textAlign:'center' }}
              initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
              Non-Negotiables
            </motion.p>
            <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
              {principles.map((p, i) => (
                <motion.p key={i}
                  style={{
                    fontFamily:'var(--font-cinzel)',
                    fontSize:'clamp(0.95rem, 2vw, 1.2rem)',
                    letterSpacing:'0.06em',
                    color: i % 2 === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                    padding:'2rem 0',
                    borderBottom:'1px solid var(--border-subtle)',
                    lineHeight:1.5,
                  }}
                  initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true, margin:'-30px' }}
                  transition={{ duration:0.65, delay:i*0.1 }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div style={{ textAlign:'center', marginTop:'4rem' }}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7 }}>
              <Link href="/studio" className="btn-primary">
                <span>Start a Project</span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
