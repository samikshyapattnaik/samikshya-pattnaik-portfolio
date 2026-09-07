import { ScrollProgress } from '@/components/site/scroll-progress'
import { CustomCursor } from '@/components/site/custom-cursor'
import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { Stats } from '@/components/site/stats'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Projects } from '@/components/site/projects'
import { Skills } from '@/components/site/skills'
import { Marquee } from '@/components/site/marquee'
import { Process } from '@/components/site/process'
import { WhyMe } from '@/components/site/why-me'
import { Testimonials } from '@/components/site/testimonials'
import { CTA } from '@/components/site/cta'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Marquee />
        <Process />
        <WhyMe />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
