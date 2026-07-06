import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import FreeTime from './components/FreeTime'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import FloatingElements from './components/FloatingElements'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  // Vite HMR trigger
  return (
    <ThemeProvider>
      <div className="min-h-screen relative transition-colors duration-300">
        <ParticleBackground />
        <FloatingElements />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <FreeTime />
          <Projects />
        </div>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  )
}

export default App

