import { ArrowRight } from 'lucide-react'
import { Reveal } from './reveal'

export function CTA() {
  return (
    <section className="relative px-5 py-16 sm:px-8 md:py-24">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-10 md:py-24">
          <div className="absolute inset-0 -z-10 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -top-24 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[120px]" />
          <div className="absolute -bottom-24 right-10 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />

          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Have an Idea?{' '}
            <span className="text-gradient">Let&apos;s Turn It Into Reality.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
            Whether you need a business website, web application, dashboard or a
            complete digital product, let&apos;s build something that makes an
            impact.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px] hover:shadow-primary/60 sm:w-auto"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
