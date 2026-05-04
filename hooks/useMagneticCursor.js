'use client'

// hooks/useMagneticCursor.js
// ─────────────────────────────────────────────────────────────────────────────
// Adds a very subtle magnetic pull effect to any element.
// The element drifts slightly toward the cursor within its bounding box.
// Uses requestAnimationFrame + transform-only — zero layout reflow.
//
// Usage:
//   const { ref, style } = useMagneticCursor({ strength: 0.25 })
//   <button ref={ref} style={style}>...</button>
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useCallback } from 'react'

export function useMagneticCursor({ strength = 0.25, ease = 0.12 } = {}) {
  const ref        = useRef(null)
  const frameRef   = useRef(null)
  const currentRef = useRef({ x: 0, y: 0 })
  const targetRef  = useRef({ x: 0, y: 0 })
  const [transform, setTransform] = useState('translate(0px, 0px)')

  const animate = useCallback(() => {
    const c = currentRef.current
    const t = targetRef.current

    // Lerp toward target — creates the elastic "snap" feel
    c.x += (t.x - c.x) * ease
    c.y += (t.y - c.y) * ease

    // Only update DOM if movement is significant (avoids micro-jitter)
    if (Math.abs(t.x - c.x) > 0.01 || Math.abs(t.y - c.y) > 0.01) {
      setTransform(`translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px)`)
      frameRef.current = requestAnimationFrame(animate)
    } else {
      setTransform(`translate(${t.x.toFixed(2)}px, ${t.y.toFixed(2)}px)`)
      frameRef.current = null
    }
  }, [ease])

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect   = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width  / 2
    const centerY = rect.top  + rect.height / 2
    const deltaX  = (e.clientX - centerX) * strength
    const deltaY  = (e.clientY - centerY) * strength

    targetRef.current = { x: deltaX, y: deltaY }

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [strength, animate])

  const onMouseLeave = useCallback(() => {
    targetRef.current = { x: 0, y: 0 }
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [animate])

  return {
    ref,
    onMouseMove,
    onMouseLeave,
    style: {
      transform,
      willChange: 'transform',
      transition: 'none', // rAF handles easing, not CSS
    },
  }
}
