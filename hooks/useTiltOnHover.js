'use client'

// hooks/useTiltOnHover.js
// ─────────────────────────────────────────────────────────────────────────────
// Adds a soft 3D tilt effect that follows cursor position within an element.
// Creates the "physical depth" sensation premium editorial sites use.
// All motion is transform-only — GPU composited, zero layout.
//
// Usage:
//   const { ref, style } = useTiltOnHover({ maxTilt: 4, scale: 1.015 })
//   <div ref={ref} style={{ ...style, transformStyle: 'preserve-3d' }}>...</div>
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useCallback } from 'react'

export function useTiltOnHover({ maxTilt = 5, scale = 1.02, ease = 0.1 } = {}) {
  const ref        = useRef(null)
  const frameRef   = useRef(null)
  const currentRef = useRef({ rx: 0, ry: 0, scale: 1 })
  const targetRef  = useRef({ rx: 0, ry: 0, scale: 1 })
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)')

  const lerp = (a, b, t) => a + (b - a) * t

  const animate = useCallback(() => {
    const c = currentRef.current
    const t = targetRef.current

    c.rx    = lerp(c.rx, t.rx, ease)
    c.ry    = lerp(c.ry, t.ry, ease)
    c.scale = lerp(c.scale, t.scale, ease)

    const dist = Math.abs(t.rx - c.rx) + Math.abs(t.ry - c.ry) + Math.abs(t.scale - c.scale)

    if (dist > 0.005) {
      setTransform(
        `perspective(900px) rotateX(${c.rx.toFixed(3)}deg) rotateY(${c.ry.toFixed(3)}deg) scale(${c.scale.toFixed(4)})`
      )
      frameRef.current = requestAnimationFrame(animate)
    } else {
      setTransform(
        `perspective(900px) rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.scale})`
      )
      frameRef.current = null
    }
  }, [ease])

  const onMouseMove = useCallback((e) => {
    if (!ref.current) return
    const rect  = ref.current.getBoundingClientRect()
    const normX = (e.clientX - rect.left)  / rect.width  - 0.5   // -0.5 → 0.5
    const normY = (e.clientY - rect.top)   / rect.height - 0.5

    // Invert Y so moving up tilts toward viewer (natural feel)
    targetRef.current = { rx: -normY * maxTilt, ry: normX * maxTilt, scale }

    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animate)
    }
  }, [maxTilt, scale, animate])

  const onMouseLeave = useCallback(() => {
    targetRef.current = { rx: 0, ry: 0, scale: 1 }
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
      transformStyle: 'preserve-3d',
    },
  }
}
