'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState<'default' | 'hover' | 'view'>(
    'default',
  )

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springX = useSpring(cursorX, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)')
      .matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || reduced) return
    setEnabled(true)

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor="view"]')) setVariant('view')
      else if (target.closest('a, button, [data-cursor="hover"]'))
        setVariant('hover')
      else setVariant('default')
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cursorX, cursorY])

  if (!enabled) return null

  const size = variant === 'view' ? 64 : variant === 'hover' ? 44 : 18

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[70] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full bg-white font-mono text-[10px] font-semibold tracking-wide text-black"
        animate={{ width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {variant === 'view' ? 'VIEW' : ''}
      </motion.div>
    </motion.div>
  )
}
