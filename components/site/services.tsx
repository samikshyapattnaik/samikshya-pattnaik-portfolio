import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'
import { ICONS } from './icon-map'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What I Can <span className="text-gradient">Build For You</span>
            </>
          }
          description="From marketing sites to full-stack applications, I deliver solutions built around your business goals."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <StaggerItem key={service.number}>
                <article
                  data-cursor="hover"
                  className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card"
                >
                  <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      {Icon && <Icon className="size-5.5" />}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground/60">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
