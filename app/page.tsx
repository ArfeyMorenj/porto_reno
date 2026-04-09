import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ProofBar from '@/components/ProofBar'
import Disciplines from '@/components/Disciplines'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Certificates from '@/components/Certificates'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      <Hero />
      <ProofBar />
      <Disciplines />
      <Projects />
      <About />
      <Skills />
      <Certificates />
      <Footer />
    </main>
  )
}
