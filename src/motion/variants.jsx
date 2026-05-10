import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// ── Variants ──────────────────────────────────────────────
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
})

export const cardHover = {
  rest:  { y: 0,  boxShadow: '0 0px 0px rgba(0,0,0,0)' },
  hover: { y: -6, boxShadow: '0 24px 56px rgba(0,0,0,0.5)', transition: { duration: 0.3, ease: 'easeOut' } },
}

// ── Components ────────────────────────────────────────────

/** Fades + slides up when scrolled into view */
export function FadeUp({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Staggered children — wraps a container */
export function Stagger({ children, stagger = 0.08, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Each item inside a Stagger */
export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div variants={fadeUp} className={className} style={style}>
      {children}
    </motion.div>
  )
}

/** Scale in */
export function ScaleIn({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      variants={scaleIn}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Slide from left */
export function SlideLeft({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      variants={slideLeft}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Slide from right */
export function SlideRight({ children, delay = 0, className = '', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      variants={slideRight}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      transition={{ delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** 3D tilt card — wraps children with perspective tilt on hover */
export function TiltCard({ children, className = '', style = {}, intensity = 8 }) {
  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', perspective: 1000, ...style }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width  - 0.5
        const y = (e.clientY - rect.top)  / rect.height - 0.5
        e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(8px)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
        e.currentTarget.style.transition = 'transform 0.5s ease'
      }}
    >
      {children}
    </motion.div>
  )
}

/** Page transition wrapper */
export function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

/** Floating animation */
export function Float({ children, duration = 6, y = 12, style = {} }) {
  return (
    <motion.div
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      style={style}
    >
      {children}
    </motion.div>
  )
}

/** Loading spinner for page loader */
export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'var(--bg)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 24,
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        style={{
          width: 48, height: 48, borderRadius: '50%',
          border: '2px solid rgba(255,255,255,.08)',
          borderTopColor: '#00f0ff',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 12, letterSpacing: '.14em',
          color: 'rgba(255,255,255,.4)',
          textTransform: 'uppercase',
        }}
      >
        Loading
      </motion.div>
    </motion.div>
  )
}
