import Image from 'next/image'
import { Check } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const CAPABILITIES = [
  'React & Next.js',
  'Node.js & Express',
  'MongoDB',
  'REST APIs',
  'Responsive UI',
  'Deployment',
]

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="right">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
              <div className="glow-ring overflow-hidden rounded-3xl border border-border">
                <Image
                  src="/developer-portrait.png"
                  alt="Developer workspace with code on screen"
                  width={720}
                  height={880}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="glass absolute -bottom-5 -right-5 hidden rounded-2xl border border-border px-5 py-4 sm:block">
                <p className="font-display text-2xl font-semibold text-gradient">
                  2025
                </p>
                <p className="text-xs text-muted-foreground">
                  — Present · Full Stack
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="About Me"
              title={
                <>
                  More Than Just a{' '}
                  <span className="text-gradient">Developer.</span>
                </>
              }
              description="I build digital products that combine clean design, reliable functionality and a smooth user experience. With 1.5+ years of professional experience, I work across frontend and backend development to turn ideas into production-ready applications."
            />

            <Reveal delay={0.15}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CAPABILITIES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 px-4 py-3 text-sm"
                  >
                    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-8 flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5">
                <div className="flex flex-col items-center rounded-lg bg-primary/10 px-4 py-3 text-center">
                  <span className="font-mono text-xs text-primary">2025</span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    PRESENT
                  </span>
                </div>
                <div>
                  <p className="font-medium">Full Stack Development</p>
                  <p className="text-sm text-muted-foreground">
                    Building and shipping real-world web applications for
                    businesses.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
