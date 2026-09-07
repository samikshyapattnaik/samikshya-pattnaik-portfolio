import { PROCESS_STEPS } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

export function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="My Process"
          title={
            <>
              From Idea to <span className="text-gradient">Launch</span>
            </>
          }
          description="A clear, proven process that takes your project from concept to a deployed, supported product."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-colors hover:border-primary/40">
                <span className="font-display text-5xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-border)] transition-all duration-300 group-hover:[-webkit-text-stroke:1px_var(--color-primary)]">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
