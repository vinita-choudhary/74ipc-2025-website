import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import KeyFeatures from '@/components/sections/KeyFeatures'
import Speakers from '@/components/sections/Speakers'
import Schedule from '@/components/sections/Schedule'
import Registration from '@/components/sections/Registration'
import Sponsors from '@/components/sections/Sponsors'
import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the 74th Indian Pharmaceutical Congress 2025 - The premier pharmaceutical conference in India.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <KeyFeatures />
      <Speakers />
      <Schedule />
      <Registration />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  )
}