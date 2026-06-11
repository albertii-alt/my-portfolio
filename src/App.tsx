import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import AskJayar from './components/sections/AskJayar'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    window.history.replaceState(null, '', '/')
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-bg-base">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AskJayar />
        <Contact />
      </main>
    </div>
  )
}

export default App