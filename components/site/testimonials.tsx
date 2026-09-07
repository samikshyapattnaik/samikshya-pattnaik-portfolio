import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Words From <span className="text-gradient">Clients</span>
            </>
          }
          description="Sample testimonials shown as placeholders — these will be replaced with real client feedback."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card/50 p-7">
                <span className="absolute right-6 top-6 rounded-full border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  Sample
                </span>
                <Quote className="size-8 text-primary/60" />
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {t.company} · {t.projectType}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
