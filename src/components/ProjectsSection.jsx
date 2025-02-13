import Project from './Project'
import devtree1 from '../assets/devtree/devtree1.svg'
import devtree2 from '../assets/devtree/devtree2.svg'
import devtree3 from '../assets/devtree/devtree3.svg'
import devtree4 from '../assets/devtree/devtree4.svg'
import domus1 from '../assets/domus/domus1.svg'
import domus2 from '../assets/domus/domus2.svg'
import domus3 from '../assets/domus/domus3.svg'
import domus4 from '../assets/domus/domus4.svg'
import meli1 from '../assets/meli/meli1.svg'
import meli2 from '../assets/meli/meli2.svg'
import meli3 from '../assets/meli/meli3.svg'
import meli4 from '../assets/meli/meli4.svg'
import vida1 from '../assets/vidaserena/vida1.svg'
import vida2 from '../assets/vidaserena/vida2.svg'
import vida3 from '../assets/vidaserena/vida3.svg'
import vida4 from '../assets/vidaserena/vida4.svg'
import gifos1 from '../assets/gifos/gifos1.svg'
import gifos2 from '../assets/gifos/gifos2.svg'
import gifos3 from '../assets/gifos/gifos3.svg'
import gifos4 from '../assets/gifos/gifos4.svg'
import LinkHover from './LinkHover'
import { useTranslation } from 'react-i18next'

export default function ProjectsSection() {
  const {t} = useTranslation()
  return (
    <>
    <div data-aos="fade-up" data-aos-duration="5000" className='aos-item'>
      <Project
        imageList={[devtree1,devtree2,devtree3,devtree4]}
        title={'DevTree'}
        description={t('DevTreeDescription')}
      >
        <h3><LinkHover text="Frontend" href={'https://github.com/MateoGurrea02/DevTree-Front'} color={'bg-emerald-600'} target={'blank'}/></h3>      
        <h3 className='ml-2 mr-2'>-</h3>
        <h3><LinkHover text='Backend' href={'https://github.com/MateoGurrea02/DevTree-Back'} color={'bg-emerald-600'} target={'blank'}/></h3>
        <h3 className='ml-2 mr-2'>-</h3>
        <h3><LinkHover text='Deploy' href={'https://mateogurrea-devtree.netlify.app/'} color='bg-emerald-600' target={'blank'}/></h3>
      </Project>
    </div>
    <div data-aos="fade-up" data-aos-duration="5000" className='aos-item'>
      <Project
        imageList={[domus1,domus2,domus3,domus4]}
        title={'Domus'}
        description={t('DomusDescription')}
      >
        <h3><LinkHover text="Frontend" href={'https://github.com/MateoGurrea02/domus-frontend'} color={'bg-emerald-600'} target={'blank'}/></h3>      
        <h3 className='ml-2 mr-2'>-</h3>
        <h3><LinkHover text='Backend' href={'https://github.com/MateoGurrea02/domus-backend'} color={'bg-emerald-600'} target={'blank'}/></h3>
      </Project>
    </div>
    <div data-aos="fade-up" data-aos-duration="5000" className='aos-item'>
      <Project
        imageList={[meli1,meli2,meli3,meli4]}
        title={'Mercado Libre - con API'}
        description={t('MeliDescription')}
      >
        <h3><LinkHover text="Frontend" href={'https://github.com/MateoGurrea02/api_mercado_libre'} color={'bg-emerald-600'} target={'blank'}/></h3>
      </Project>
    </div>
    <div data-aos="fade-up" data-aos-duration="5000" className='aos-item'>
      <Project
        imageList={[vida1,vida2,vida3,vida4]}
        title={'Vida Serena'}
        description={t('VidaDescription')}
      >
        <h3><LinkHover text="Deploy" href={'https://www.grupovidaserena.com/'} color={'bg-emerald-600'} target={'blank'}/></h3>
      </Project>
    </div>
    <div data-aos="fade-up" data-aos-duration="5000" className='aos-item'>
      <Project
        imageList={[gifos1,gifos2,gifos3,gifos4]}
        title={'Gifos'}
        description={t('GifosDescription')}
      >
        <h3><LinkHover text="Frontend" href={'https://github.com/MateoGurrea02/GIFOS-MateoGurrea02'} color={'bg-emerald-600'} target={'blank'}/></h3>      
        <h3 className='ml-2 mr-2'>-</h3>
        <h3><LinkHover text='Deploy' href={'https://mateogurrea02.github.io/GIFOS-MateoGurrea02/'} color={'bg-emerald-600'} target={'blank'}/></h3>
      </Project>
    </div>
    </>
  )
}
