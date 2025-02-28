import React from 'react'
import gif from '../assets/emoji.gif'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <div className='flex flex-col items-center justify-center pt-10'>
      <h2 className='lg:text-5xl text-2xl text-center font-family-sans text-[#b6a45e]'>{t('FooterQuestion')}</h2>
      <span className='w-80 h-80 lg:w-auto lg:h-auto'>
        <img src={gif} alt="" className=''/>
      </span>
      <h3 className='text-white lg:text-2xl text-sm text-center font-family-sans my-5'>{t('ContactMe')}<span className='text-emerald-600'> mategurrea@gmail.com</span></h3>
      <h3 className='text-white lg:text-2xl text-sm text-center font-family-sans my-5'>{t('AlsoPrivateMessage')} <a href="https://www.linkedin.com/in/mateogurrea/" target="_blank" className="mx-1 hover:-translate-y-1 duration-1000 text-emerald-600">Linkedin</a> 
      </h3>
    </div>
  )
}
