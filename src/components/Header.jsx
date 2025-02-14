import React, { useState } from 'react'
import image from '../assets/746402.svg'
import LinkHover from './LinkHover'
import { useTranslation } from 'react-i18next';


export default function Header() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState('en')
  const [show, setShow] = useState(false)

  const handleMenu = () => {
    setShow(!show)
  }

  const onChangeLang = (e) => {
    const lang_code = e.target.value
    i18n.changeLanguage(lang_code)
  }
  const propertiesShow = 'flex lg:mt-0 mt-40 lg:mx-0 mx-10'

  return (
    <>
    <div className='z-10 fixed w-full h-72 lg:h-40 flex justify-center items-center blur-[2px] bg-contain bg-center  bg-linear-to-b from-gray-800 to-transparent' >
    </div>
    <div className='z-10 fixed w-full h-64 lg:h-32 bg-contain bg-repeat blur-[1px] lg:blur-[0.7px]' style={{backgroundImage:`url(${image})`}}>
    </div>
    <button onClick={handleMenu} className='fixed z-20 right-0 lg:hidden text-2xl text-gray-300 p-5'>
      <i className="fa-solid fa-bars"></i>
    </button>
    <div className='z-10 fixed w-full h-20 flex justify-center items-center bg-cover bg-center'>
      <div className={`text-2xl text-gray-300 lg:flex lg:flex-row flex-col justify-around w-full lg:w-3/6 ${show ? propertiesShow : 'hidden'}`}>
        <LinkHover text={t('Home')} href='#' color='bg-emerald-600'/>
        <LinkHover text={t('AboutMe')} href='#about' color='bg-emerald-600'/>
        <LinkHover text={t('Projects')} href='#projects' color='bg-emerald-600'/>
        <select defaultValue={i18n.language} onChange={onChangeLang} className='focus:outline-0 -ml-1' >
          <option key={'en'} value={'en'} className='text-black'>English</option>
          <option key={'es'} value={'es'} className='text-black'>Español</option>
        </select>
        <a href='#'  className={`hidden relative after:bg-emerald-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000`}></a>
        <a href='#'  className={`hidden relative after:bg-white after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000`}></a>
      </div>
    </div>
    </> 
  )
}
