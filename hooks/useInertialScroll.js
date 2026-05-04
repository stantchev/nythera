'use client'

// hooks/useInertialScroll.js
// ─────────────────────────────────────────────────────────────────────────────
// Returns a smoothed scroll progress value that lags slightly behind actual
// scroll, creating the "inertia" illusion of a heavier, premium page feel.
// Uses a single passive window listener + rAF lerp — no Lenis/locomotive needed.
//
// Returns:
//   scrollY       — raw window.scrollY (MotionValue)
//   smoothProgress — 0→1 lerped progress for viewport (plain state)
//
// Usage (in a Client Component):
//   const { smoothY } = useInertialScroll()
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'

export function useInertialScroll({ ease = 0.08 } = {}) {
  const rawRef      = useRef(0)
  const smoothRef   = useRef(0)
  const frameRef    = useRef(null)
  const [smoothY, setSmoothY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      rawRef.current = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const tick = () => {
      const diff = rawRef.current - smoothRef.current
      // Only lerp when meaningful — saves CPU
      if (Math.abs(diff) > 0.5) {
        smoothRef.current += diff * ease
        setSmoothY(smoothRef.current)
      }
      frameRef.current = requestAnimationFrame(tick)
    }

    frameRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [ease])

  return { smoothY }
}
