import { useTranslation } from 'react-i18next';
import image from '../assets/personaje.svg'
import Container from './Container'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react';

export default function HeroHomePage() {
  const { t,i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language)

  useEffect(() => {
    setLanguage(i18n.language)
  }, [i18n.language])

  return (
    <Container>
      {console.log(i18n.language)}
      <div className="w-full text-center h-dvh grid lg:grid-cols-5 grid-cols-1 place-items-center lg:gap-12 lg:pt-0 pt-40">
        <span className="col-start-1 lg:col-span-3 font-family-sans text-[#b6a45e]">
          {language === 'en' ? 
            <TypeAnimation
            repeat={Infinity}
            className="font-family-sans lg:text-5xl text-2xl text-[#b6a45e]"
            cursor={true}
            sequence={[
              'Hello, I am Mateo Gurrea',
              3000,
              'Hello, I am Web Developer',
              5000,
            ]}
            />
           : ''}
           {language === 'es' ?
            <TypeAnimation
            repeat={Infinity}
            className="font-family-sans lg:text-5xl text-2xl text-[#b6a45e]"
            cursor={true}
            sequence={[
              'Hola, soy Mateo Gurrea',
              3000,
              'Hola, soy Desarrollador Web',
              5000,
            ]}
            />
            : ''}
        </span>
        <div className="relative overflow-hidden bg-[#b6a45e] h-64 lg:h-96 w-64 lg:w-96 rounded-full bottom-20 lg:bottom-0 lg:col-start-4 lg:col-span-2 drop-shadow-lg">
          <img
            className="animate-fade-up animate-once animate-delay-[3000ms] animate-duration-[2000ms] absolute top-3 drop-shadow-2xl  rounded-full"
            src={image}
          ></img>
        </div>
      </div>
    </Container>
  );
}
