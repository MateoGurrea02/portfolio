import { useTranslation } from 'react-i18next';
import CvEs from '../assets/cv/CV-MATEO-GURREA-ES.pdf'
import CvEn from '../assets/cv/CV-MATEO-GURREA-EN.pdf'
import IndividualSkill from './IndividualSkill'
import { useEffect, useState } from 'react';

export default function AboutMe() {
  const { t, i18n } = useTranslation();
  const [cv , setCv] = useState(CvEn)

  useEffect(() => {
    if(i18n.language === 'en'){
      setCv(CvEn)
    }else{
      setCv(CvEs)
    }
  }, [i18n.language])

  return (
    <div>
      <div className='flex lg:flex-row flex-col ml-[12%] mr-[10%] mt-30 '>
        <div className='flex flex-col items-left lg:w-7xl'>
          <h2 id='about' className='lg:text-5xl text-2xl text-left font-family-sans text-[#b6a45e]'>{t('AboutMe')}</h2>

          <h3 className='lg:text-2xl text-sm text-left mt-5 lg:mt-10 text-white'>{t('AboutMeDescription')}</h3>
          <div className='mt-10'>
            <a href={cv} download className='hover:bg-emerald-700 bg-emerald-600 text-white px-8 py-5 rounded-lg text-lg'>{t('DownloadCV')}</a>
          </div>
        </div>
        <div className='flex flex-wrap flex-col lg:ml-20 lg:mt-0 mt-10'>
          <h2 className='lg:text-5xl text-2xl text-left font-family-sans text-[#b6a45e]'>{t('Skills')}</h2>
          <div className='flex flex-wrap mt-10 justify-start'>
            <IndividualSkill icon="fa-brands fa-html5" title='HTML'/>
            <IndividualSkill icon="fa-brands fa-css3-alt" title='CSS'/>
            <IndividualSkill icon="fa-brands fa-js-square" title='Js'/>
            <IndividualSkill icon="fa-brands fa-react" title='React'/>
            <IndividualSkill icon="fa-brands fa-node-js" title='Node'/>
            <IndividualSkill icon="fa-brands fa-git-alt" title='Git'/>
            <IndividualSkill icon="fa-brands fa-github" title='Github'/>
            <IndividualSkill icon="fa-solid fa-database" title='MySQL'/>
            <IndividualSkill icon="fa-solid fa-pen-ruler"title='Tailwindcss'/>
            <IndividualSkill icon="fa-brands fa-python" title='Python'/>
            <IndividualSkill icon="fa-brands fa-sass" title='Sass'/>
            <IndividualSkill icon="fa-solid fa-language" title={`${t('English')} B1/B2`}/>
          </div>
        </div>
      </div>

      <div className='flex lg:flex-row flex-col mx-[10%] mt-30 text-7xl text-white'>
        <div className='flex flex-col items-center aos-item' data-aos="fade-up" data-aos-duration="500" >  
          <span className='w-52 h-52 flex items-center justify-center rounded-full m-10  bg-emerald-600'>
            <i className="fa-brands fa-steam-symbol"></i>
          </span>
          <h2 className='text-3xl mb-3'>{t('VideoGames')}</h2>
          <p className='text-lg w-4/5  text-center'>{t('VideoGamesDescription')}</p>
        </div>
        <div className='flex flex-col items-center aos-item' data-aos="fade-up" data-aos-duration="1000" >
          <span className='w-52 h-52 flex items-center justify-center rounded-full m-10  bg-emerald-600'>
            <i className="fa-solid fa-clapperboard"></i>
          </span>
          <h2 className='text-3xl mb-3'>{t('Movies')}</h2>
          <p className='text-lg w-4/5  text-center'>{t('MoviesDescription')}</p>
        </div>
        <div className='flex flex-col items-center aos-item' data-aos="fade-up" data-aos-duration="1500" >
          <span className='w-52 h-52 flex items-center justify-center rounded-full m-10  bg-emerald-600'>
            <i className="fa-solid fa-screwdriver-wrench"></i>
          </span>
          <h2 className='text-3xl mb-3'>{t('Karting')}</h2>
          <p className='text-lg w-4/5  text-center'>
          {t('KartingDescription')}
          </p>
        </div>
        <div className='flex flex-col items-center aos-item' data-aos="fade-up" data-aos-duration="2000" >
          <span className='w-52 h-52 flex items-center justify-center rounded-full m-10  bg-emerald-600'>
            <i className="fa-solid fa-baseball"></i>
          </span>
          <h2 className='text-3xl mb-3'>{t('Padel')}</h2>
          <p className='text-lg w-4/5  text-center'>
          {t('PadelDescription')}
          </p>
        </div>
      </div>
    </div>
  )
}
