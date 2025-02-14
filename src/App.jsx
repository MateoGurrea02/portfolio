import { useState, useEffect } from 'react'
import LoaderPage from './components/LoaderPage'
import Header from './components/Header'
import HeroHomePage from './components/HeroHomePage'
import ProjectsSection from './components/ProjectsSection'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next'
 

export default function App() {
  const { t } = useTranslation();
  AOS.init();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
     window.scrollTo(-1, 0)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <div className='bg-gray-800'>
      {loading && <LoaderPage />}
      <Header />
      <HeroHomePage />
      <h2 id='projects' className='lg:text-5xl text-2xl text-left ml-[12%] font-family-sans text-[#b6a45e]'>{t('MyProjects')}</h2>
      <ProjectsSection />
      <AboutMe />
      <Footer/>
    </div>
  )
}
