'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, X } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Real-World <span className="text-gradient">Projects</span>
            </>
          }
          description="Real-world projects I've designed and developed for businesses and platforms."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard
                project={project}
                large={project.featured && i < 2}
                onOpen={() => setActive(project)}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}

function ProjectCard({
  project,
  large,
  onOpen,
}: {
  project: Project
  large?: boolean
  onOpen: () => void
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      data-cursor="view"
      className={`group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 text-left transition-all duration-300 hover:border-primary/40 ${
        large ? 'lg:col-span-1' : ''
      }`}
    >
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 font-mono text-[10px] tracking-widest text-primary uppercase backdrop-blur-sm">
            Featured
          </span>
        )}
        <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 transition-transform duration-300 group-hover:-translate-y-1">
        <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
        <p className="mt-1 text-sm text-primary">{project.subtitle}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </button>
  )
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="glass relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-border sm:rounded-3xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-20 inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-secondary"
            >
              <X className="size-5" />
            </button>

            <div className="relative aspect-16/10 overflow-hidden rounded-t-3xl">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="p-6 sm:p-9">
              <p className="font-mono text-xs tracking-widest text-primary uppercase">
                Case Study
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold">
                {project.title}
              </h3>
              <p className="text-primary">{project.subtitle}</p>

              <div className="mt-7 space-y-6">
                <CaseBlock label="Challenge" text={project.challenge} />
                <CaseBlock label="Solution" text={project.solution} />
                <CaseBlock label="My Role" text={project.role} />

                <div>
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Technologies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    Key Features
                  </p>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <CaseBlock label="Result" text={project.result} />
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_24px_-4px] hover:shadow-primary/60"
                >
                  Visit Live Website
                  <ExternalLink className="size-4" />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CaseBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-2 leading-relaxed text-foreground/90">{text}</p>
    </div>
  )
}
