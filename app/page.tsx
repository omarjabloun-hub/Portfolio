import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Achievements from "./components/Achievements"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white pt-16">
      <Header />
      <Hero />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  )
}

