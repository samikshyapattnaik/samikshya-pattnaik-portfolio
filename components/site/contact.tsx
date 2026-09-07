'use client'

import { useState } from 'react'
import { ArrowRight, Check, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const PROJECT_TYPES = [
  'Business Website',
  'E-Commerce',
  'Web Application',
  'Admin Dashboard',
  'Website Redesign',
  'Bug Fixing',
  'Other',
]

const BUDGETS = ['₹5K – ₹10K', '₹10K – ₹25K', '₹25K – ₹50K', '₹50K+']

const fieldClass =
  'w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-primary/20'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let&apos;s Build Something{' '}
              <span className="text-gradient">Great Together.</span>
            </>
          }
          description="Tell me about your project and I'll get back to you with next steps."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal direction="right" className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold">
                    Inquiry sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out. This is a demo form — connect it to
                    your email or a backend to receive real submissions.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="projectType"
                        className="mb-2 block text-sm font-medium"
                      >
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select a type
                        </option>
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium"
                      >
                        Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        defaultValue=""
                        className={fieldClass}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {BUDGETS.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-4px] hover:shadow-primary/60"
                  >
                    Send Project Inquiry
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-card/50 p-6 sm:p-8">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Prefer a direct line?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Reach out through any of these channels and I&apos;ll respond
                  as soon as possible.
                </p>

                <div className="mt-6 space-y-3">
                  <ContactLink
                    href={SOCIALS.email}
                    label="Email"
                    value="hello@samikshya.dev"
                    icon={<Mail className="size-5" />}
                  />
                  <ContactLink
                    href={SOCIALS.linkedin}
                    label="LinkedIn"
                    value="Connect with me"
                    icon={<LinkedinIcon className="size-5" />}
                    external
                  />
                  <ContactLink
                    href={SOCIALS.github}
                    label="GitHub"
                    value="View my code"
                    icon={<GithubIcon className="size-5" />}
                    external
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
                <div className="flex items-center gap-2 font-mono text-xs text-primary">
                  <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/60" />
                  Currently available
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Taking on new freelance projects for 2026.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactLink({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string
  label: string
  value: string
  icon: React.ReactNode
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-secondary/30 p-4 transition-all hover:border-primary/40"
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </a>
  )
}
