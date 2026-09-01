'use client'

import Header from '@/components/layout/Header'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import {
  Hero,
  Problems,
  Services,
  Projects,
  Process,
  About,
  Testimonials,
  FAQ,
  Contact,
  Footer,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problems />
        <Services />
        <Projects />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
