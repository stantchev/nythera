// Footer — SERVER COMPONENT
import Link from 'next/link'
import FooterSocial from './FooterSocial'

const navCols = [
  {
    heading: 'Studio',
    links: [
      { href: '/',         label: 'Index'    },
      { href: '/studio',   label: 'Contact'  },
      { href: '/approach', label: 'Approach' },
    ],
  },
  {
    heading: 'Work',
    links: [
      { href: '/work',   label: 'Portfolio' },
      { href: '/collab', label: 'Concepts'  },
    ],
  },
  {
    heading: 'Studies',
    links: [
      { href: '/collab/killstar',   label: 'Killstar'    },
      { href: '/collab/demonia',    label: 'Demonia'     },
      { href: '/collab/drmartens',  label: 'Dr. Martens' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:'linear-gradient(to right, transparent, rgba(139,0,0,0.35), transparent)' }} />

      <div style={{ maxWidth:'72rem', margin:'0 auto', padding:'0 1.5rem' }}>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 14rem), 1fr))',
          gap:'3rem',
          padding:'5rem 0',
          borderBottom:'1px solid var(--border-subtle)',
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily:'var(--font-cinzel)', fontSize:'1.3rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--text-primary)', marginBottom:'1rem' }}>
              NYTHERA
            </p>
            <div style={{ width:'2rem', height:'1px', backgroundColor:'var(--accent-red)', marginBottom:'1.25rem', opacity:0.8 }} />
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.84rem', fontWeight:300, color:'var(--text-secondary)', lineHeight:1.8, maxWidth:'18rem' }}>
              Dark luxury creative agency. We design editorial direction, brand identity,
              and campaign architecture for alternative fashion.
            </p>
            {/* Social — client component for hover states */}
            <FooterSocial />
          </div>

          {/* Nav cols */}
          {navCols.map(col => (
            <div key={col.heading}>
              <p className="label-tag" style={{ marginBottom:'1.5rem' }}>{col.heading}</p>
              <nav style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {col.links.map(({ href, label }) => (
                  <Link key={label} href={href} className="underline-reveal"
                    style={{ fontFamily:'var(--font-inter)', fontSize:'0.84rem', fontWeight:300, color:'var(--text-secondary)', textDecoration:'none', transition:'color 0.3s', width:'fit-content' }}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Contact */}
          <div>
            <p className="label-tag" style={{ marginBottom:'1.5rem' }}>Contact</p>
            <a href="mailto:studio@nythera.com" className="underline-reveal"
              style={{ fontFamily:'var(--font-inter)', fontSize:'0.84rem', fontWeight:300, color:'var(--text-secondary)', textDecoration:'none', display:'block', marginBottom:'0.5rem' }}>
              studio@nythera.com
            </a>
            <p style={{ fontFamily:'var(--font-inter)', fontSize:'0.78rem', fontWeight:300, color:'var(--text-secondary)', opacity:0.5 }}>
              By appointment only
            </p>
          </div>
        </div>

        <div style={{ padding:'1.5rem 0', display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', gap:'0.75rem' }}>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-secondary)', opacity:0.28 }}>
            © {new Date().getFullYear()} NYTHERA. All rights reserved.
          </p>
          <p style={{ fontFamily:'var(--font-mono)', fontSize:'0.58rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-secondary)', opacity:0.18 }}>
            Dark Fashion Creative Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
