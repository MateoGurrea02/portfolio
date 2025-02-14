import { useState, useEffect } from 'react'
import LoaderPage from './components/LoaderPage'
import Header from './components/Header'
import HeroHomePage from './components/HeroHomePage'
import ProjectsSection from './components/ProjectsSection'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
 

export default function App() {
  AOS.init();
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
    <div className='bg-gray-800 scroll-smooth'>
      {loading && <LoaderPage />}
      <Header />
      <HeroHomePage />
      <h2 id='projects' className='lg:text-5xl text-2xl text-left ml-[12%] font-family-sans text-[#b6a45e]'>Mis Proyectos</h2>
      <ProjectsSection />
      <AboutMe />
      <Footer/>
    </div>
  )
}
