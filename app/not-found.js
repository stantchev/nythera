// app/not-found.js — Server Component
import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100svh',
      backgroundColor: 'var(--bg-primary)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '2rem',
    }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent-red)', marginBottom: '2rem' }}>
        404
      </p>
      <h1 style={{ fontFamily: 'var(--font-cinzel)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-primary)', marginBottom: '1rem' }}>
        Not Found
      </h1>
      <div style={{ width: '3rem', height: '1px', backgroundColor: 'var(--accent-red)', margin: '0 auto 1.5rem' }} />
      <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', maxWidth: '24rem', lineHeight: 1.8, marginBottom: '3rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" style={{
        fontFamily: 'var(--font-cinzel)', fontSize: '0.68rem',
        letterSpacing: '0.25em', textTransform: 'uppercase',
        padding: '0.875rem 2.5rem',
        border: '1px solid var(--accent-silver)',
        color: 'var(--text-primary)',
        textDecoration: 'none',
        transition: 'border-color 0.3s',
      }}>
        Return Home
      </Link>
    </main>
  )
}
