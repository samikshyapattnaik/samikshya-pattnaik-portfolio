'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

const HEADLINE = [
  'I',
  'Build',
  'Digital',
  'Experiences',
  'That',
  'Help',
  'Businesses',
  'Grow.',
]

const FLOATING = [
  { label: 'React', className: 'left-[4%] top-[18%]', delay: 0 },
  { label: 'Next.js', className: 'right-[6%] top-[12%]', delay: 0.4 },
  { label: 'Node.js', className: 'left-[10%] bottom-[16%]', delay: 0.8 },
  { label: 'MongoDB', className: 'right-[8%] bottom-[22%]', delay: 1.2 },
  { label: 'JavaScript', className: 'right-[16%] top-[42%]', delay: 1.6 },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const wordVariants = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(50)
  const mouseY = useMotionValue(20)
  const glow = useMotionTemplate`radial-gradient(480px circle at ${mouseX}% ${mouseY}%, oklch(0.62 0.2 262 / 0.18), transparent 70%)`

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100)
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* backgrounds */}
      <div className="absolute inset-0 -z-20 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <motion.div className="absolute inset-0 -z-10" style={{ background: glow }} />
      <div className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-accent/15 blur-[130px]" />

      {/* floating tech badges (desktop) */}
      {FLOATING.map((item) => (
        <motion.span
          key={item.label}
          aria-hidden="true"
          className={`absolute z-0 hidden rounded-xl border border-border glass px-4 py-2 font-mono text-sm text-muted-foreground lg:block ${item.className}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.6, delay: 1 + item.delay },
            scale: { duration: 0.6, delay: 1 + item.delay },
            y: {
              duration: 5 + item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {item.label}
        </motion.span>
      ))}

      <div className="mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs tracking-widest text-primary uppercase"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available for Freelance Projects
        </motion.div>

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
        >
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span variants={wordVariants} className="inline-block">
                {word}
                {i < HEADLINE.length - 1 && '\u00A0'}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg"
        >
          I&apos;m Samikshya Pattnaik, a{' '}
          <span className="font-medium text-gradient">Full Stack Developer</span>{' '}
          with 1.5+ years of experience building modern websites, web
          applications and business solutions using React, Next.js and the MERN
          stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px] hover:shadow-primary/60 sm:w-auto"
          >
            Start a Project
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary sm:w-auto"
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-4">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <GithubIcon className="size-4.5" />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <LinkedinIcon className="size-4.5" />
            </a>
            <a
              href={SOCIALS.email}
              aria-label="Email"
              className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Mail className="size-4.5" />
            </a>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/60" />
            Available for freelance work
          </div>
        </motion.div>
      </div>
    </section>
  )
}
