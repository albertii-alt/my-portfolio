import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'

function App() {
  return (
    <div className="bg-bg-base">
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App