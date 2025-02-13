import { useState, useEffect } from 'react'
import LoaderPage from './components/LoaderPage'
import Header from './components/Header'
import HeroHomePage from './components/HeroHomePage'
import ProjectsSection from './components/ProjectsSection'
import AboutMe from './components/AboutMe'
import Container from './components/Container'
import Footer from './components/Footer'


export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // cancelar el scroll
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      setLoading(false)
      document.body.style.overflow = 'auto'
    }, 4000)
  }, [])

  return (
    <div className='bg-gray-800 scroll-smooth '>
      {loading && <LoaderPage />}
      <Header />
      <HeroHomePage />
      <h2 id='projects' className='text-5xl text-left ml-[12%] mb-30 font-family-sans text-[#b6a45e]'>Mis Proyectos</h2>
      <ProjectsSection />
      <AboutMe />
      <Footer/>
    </div>
  )
}
