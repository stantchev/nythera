'use client'

export const metadata = {
  title: 'Start a Project',
  description: 'Start a brand collaboration with NYTHERA. Editorial direction, brand identity, and campaign architecture for alternative fashion. Limited engagements per season.',
  alternates: { canonical: 'https://nythera.com/studio' },
}


import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function StudioPage() {
  const [form, setForm]         = useState({ brand:'', name:'', email:'', type:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  const update = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const services = [
    { id:'editorial',   num:'01', title:'Editorial Direction',   time:'8–12 wks' },
    { id:'identity',    num:'02', title:'Brand Identity',        time:'10–16 wks' },
    { id:'collection',  num:'03', title:'Collection Concept',    time:'6–10 wks' },
    { id:'campaign',    num:'04', title:'Campaign Architecture',  time:'4–8 wks' },
  ]

  return (
    <>
      <main style={{ backgroundColor:'var(--bg-primary)', minHeight:'100svh', paddingTop:'4rem' }}>

        {/* Page header */}
        <section style={{ padding:'8rem 1.5rem 5rem', textAlign:'center', borderBottom:'1px solid var(--border-subtle)', position:'relative', overflow:'hidden' }}>
          <div aria-hidden style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,0,0,0.05) 0%, transparent 70%)' }} />
          <motion.p className="label-tag" style={{ marginBottom:'1rem' }}
            initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7 }}>
            The Studio
          </motion.p>
          <motion.h1 className="section-title"
            style={{ fontSize:'clamp(2.5rem,6vw,4.5rem)', marginBottom:'1rem' }}
            initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.85, delay:0.1, ease:[0.25,0.46,0.45,0.94] }}>
            Start a Project
          </motion.h1>
          <motion.div style={{ height:'1px', backgroundColor:'var(--accent-red)', width:'60px', margin:'0 auto 1.5rem' }}
            initial={{ scaleX:0, opacity:0 }} animate={{ scaleX:1, opacity:1 }}
            transition={{ duration:0.9, delay:0.35 }} />
          <motion.p style={{ fontFamily:'var(--font-inter)', fontSize:'0.88rem', fontWeight:300, color:'var(--text-secondary)', maxWidth:'30rem', margin:'0 auto', lineHeight:1.85 }}
            initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.5 }}>
            We accept a limited number of new projects per season.
            Every engagement starts with a conversation.
          </motion.p>
        </section>

        {/* Services */}
        <section style={{ maxWidth:'72rem', margin:'0 auto', padding:'5rem 1.5rem' }}>
          <motion.p className="label-tag" style={{ marginBottom:'1.5rem', textAlign:'center' }}
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ duration:0.6 }}>
            What We Offer
          </motion.p>
          <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit, minmax(min(100%,16rem),1fr))',
            gap:'1px', backgroundColor:'var(--border-subtle)',
            marginBottom:'5rem',
          }}>
            {services.map((s,i) => (
              <motion.div key={s.id} style={{ backgroundColor:'var(--bg-secondary)', padding:'1.75rem' }}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ duration:0.65, delay:i*0.09 }}>
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.2em', color:'var(--accent-red)' }}>{s.num}</span>
                <h3 style={{ fontFamily:'var(--font-cinzel)', fontSize:'0.82rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--text-primary)', margin:'0.75rem 0 0.4rem' }}>{s.title}</h3>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.12em', color:'var(--accent-red)', opacity:0.8 }}>{s.time}</p>
              </motion.div>
            ))}
          </div>

          {/* Inquiry form */}
          <motion.p className="label-tag" style={{ marginBottom:'2.5rem', textAlign:'center' }}
            initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }}>
            Begin an Inquiry
          </motion.p>

          {submitted ? (
            <motion.div style={{ border:'1px solid var(--border-subtle)', padding:'5rem 2rem', textAlign:'center' }}
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
              <div style={{ width:'2rem', height:'1px', backgroundColor:'var(--accent-red)', margin:'0 auto 2rem' }} />
              <p style={{ fontFamily:'var(--font-cinzel)', fontSize:'0.85rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--text-primary)', marginBottom:'1rem' }}>Inquiry Received</p>
              <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.85rem', fontWeight:300, color:'var(--text-secondary)', maxWidth:'26rem', margin:'0 auto', lineHeight:1.8 }}>
                We review every inquiry personally. If your project aligns with our current direction, you will hear from us within 7–10 business days.
              </p>
            </motion.div>
          ) : (
            <motion.form onSubmit={onSubmit}
              style={{ border:'1px solid var(--border-subtle)' }}
              initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }} transition={{ duration:0.7, delay:0.15 }}>

              {[
                { label:'Brand / Company', name:'brand', type:'text' },
                { label:'Your Name',       name:'name',  type:'text' },
                { label:'Email Address',   name:'email', type:'email' },
              ].map(f => (
                <div key={f.name} style={{ display:'flex', flexDirection:'row', borderBottom:'1px solid var(--border-subtle)' }}>
                  <label htmlFor={f.name} className="label-tag"
                    style={{ padding:'1.25rem 1.5rem', width:'14rem', flexShrink:0, borderRight:'1px solid var(--border-subtle)', display:'flex', alignItems:'center' }}>
                    {f.label}
                  </label>
                  <input id={f.name} name={f.name} type={f.type} required value={form[f.name]} onChange={update}
                    style={{ flex:1, background:'transparent', border:'none', outline:'none', padding:'1.25rem 1.5rem', fontFamily:'var(--font-inter)', fontSize:'0.85rem', fontWeight:300, color:'var(--text-primary)' }}
                    placeholder={`Enter ${f.label.toLowerCase()}`}
                  />
                </div>
              ))}

              {/* Service select */}
              <div style={{ display:'flex', borderBottom:'1px solid var(--border-subtle)' }}>
                <label htmlFor="type" className="label-tag"
                  style={{ padding:'1.25rem 1.5rem', width:'14rem', flexShrink:0, borderRight:'1px solid var(--border-subtle)', display:'flex', alignItems:'center' }}>
                  Service
                </label>
                <select id="type" name="type" value={form.type} onChange={update}
                  style={{ flex:1, background:'transparent', border:'none', outline:'none', padding:'1.25rem 1.5rem', fontFamily:'var(--font-inter)', fontSize:'0.85rem', fontWeight:300, color: form.type ? 'var(--text-primary)' : 'var(--text-secondary)', appearance:'none' }}>
                  <option value="" disabled style={{ background:'#141416' }}>Select a service</option>
                  {services.map(s => <option key={s.id} value={s.id} style={{ background:'#141416' }}>{s.num} — {s.title}</option>)}
                </select>
              </div>

              {/* Message */}
              <div style={{ display:'flex', borderBottom:'1px solid var(--border-subtle)' }}>
                <label htmlFor="message" className="label-tag"
                  style={{ padding:'1.25rem 1.5rem', width:'14rem', flexShrink:0, borderRight:'1px solid var(--border-subtle)', display:'flex', alignItems:'flex-start', paddingTop:'1.25rem' }}>
                  Your Vision
                </label>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={update}
                  placeholder="Describe your brand and what you're trying to achieve."
                  style={{ flex:1, background:'transparent', border:'none', outline:'none', padding:'1.25rem 1.5rem', fontFamily:'var(--font-inter)', fontSize:'0.85rem', fontWeight:300, color:'var(--text-primary)', resize:'none' }}
                />
              </div>

              {/* Submit */}
              <div style={{ padding:'1.5rem', display:'flex', justifyContent:'flex-end', alignItems:'center', gap:'1rem' }}>
                <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.55rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-secondary)', opacity:0.4 }}>
                  NDA available on request
                </p>
                <button type="submit" className="btn-primary">
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </motion.form>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
