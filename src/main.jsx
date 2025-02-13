import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimatedCursor from 'react-animated-cursor'
import App from './App'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index'

AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AnimatedCursor color='220, 164, 94'/> */}
    <App/>
  </StrictMode>,
)
