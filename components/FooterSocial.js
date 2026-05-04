'use client'

const socials = [
  { abbr: 'IG', label: 'Instagram', href: '#' },
  { abbr: 'BE', label: 'Behance',   href: '#' },
  { abbr: 'PT', label: 'Pinterest', href: '#' },
]

export default function FooterSocial() {
  return (
    <div style={{ display:'flex', gap:'0.75rem', marginTop:'2rem' }}>
      {socials.map(({ abbr, label, href }) => (
        <a
          key={abbr} href={href} aria-label={label}
          style={{
            width:36, height:36,
            border:'1px solid var(--border-dim)',
            display:'flex', alignItems:'center', justifyContent:'center',
            textDecoration:'none',
            fontFamily:'var(--font-mono)', fontSize:'0.52rem',
            letterSpacing:'0.1em', color:'var(--text-secondary)',
            transition:'border-color 0.3s, color 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'var(--accent-red)'
            e.currentTarget.style.color = 'var(--accent-silver)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--border-dim)'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
        >
          {abbr}
        </a>
      ))}
    </div>
  )
}
