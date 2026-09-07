import { STATS } from '@/lib/portfolio-data'
import { Stagger, StaggerItem } from './reveal'

export function Stats() {
  return (
    <section className="relative border-y border-border bg-secondary/20">
      <Stagger className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="group flex flex-col items-center px-6 py-10 text-center transition-colors hover:bg-primary/5 sm:py-14">
              <span className="font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
