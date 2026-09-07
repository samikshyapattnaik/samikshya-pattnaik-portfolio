import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <a
              href="#home"
              className="font-display text-xl font-semibold tracking-tight"
            >
              Samikshya<span className="text-primary">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Full Stack Developer building modern websites, web applications
              and business solutions with the MERN stack.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <GithubIcon className="size-4.5" />
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <LinkedinIcon className="size-4.5" />
              </a>
              <a
                href={SOCIALS.email}
                aria-label="Email"
                className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Mail className="size-4.5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 Samikshya Pattnaik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
