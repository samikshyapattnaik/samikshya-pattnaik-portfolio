import { MARQUEE_ITEMS } from '@/lib/portfolio-data'

export function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <section
      aria-label="Technology stack"
      className="relative overflow-hidden border-y border-border bg-secondary/20 py-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max marquee-track">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-medium text-muted-foreground/70 transition-colors hover:text-foreground sm:text-3xl">
              {item}
            </span>
            <span className="text-primary/50">/</span>
          </div>
        ))}
      </div>
    </section>
  )
}
