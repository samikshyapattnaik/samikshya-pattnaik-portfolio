import { SKILL_CATEGORIES } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Stagger, StaggerItem } from './reveal'
import { ICONS } from './icon-map'

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              My Technical <span className="text-gradient">Arsenal</span>
            </>
          }
          description="The technologies and tools I use to design, build and ship reliable products."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = ICONS[category.icon]
            return (
              <StaggerItem key={category.name}>
                <div className="h-full rounded-2xl border border-border bg-card/50 p-7">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {Icon && <Icon className="size-5" />}
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        data-cursor="hover"
                        title={skill.desc}
                        className="group relative cursor-default rounded-lg border border-border bg-secondary/40 px-3 py-2 text-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                      >
                        {skill.name}
                        <span className="pointer-events-none absolute -top-9 left-1/2 z-10 w-max max-w-[180px] -translate-x-1/2 rounded-md border border-border bg-popover px-2.5 py-1 text-xs text-muted-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                          {skill.desc}
                        </span>
                      </span>
                    ))}
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
