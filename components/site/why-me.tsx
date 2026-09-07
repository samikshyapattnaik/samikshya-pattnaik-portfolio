import { WHY_ME } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'
import { ICONS } from './icon-map'

export function WhyMe() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Work With Me"
          title={
            <>
              Why Clients <span className="text-gradient">Choose Me</span>
            </>
          }
          description="I combine clean engineering with a focus on real business outcomes and clear communication."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ME.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <StaggerItem key={item.title}>
                <div className="group flex h-full gap-4 rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    {Icon && <Icon className="size-5" />}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
