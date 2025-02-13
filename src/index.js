import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        interpolation:{
            escapeValue: false
        },
        resources: {
            en:{
              translation:{
                English:'English',
                Home:'Home',
                Projects:'Projects',
                AboutMe:'About Me',
                AboutMeDescription:'Web Developer with more than 3 years of knowledge and academic experience, received from the Higher Technician in Software Development. Passionate about programming and aesthetically beautiful designs of web pages.',
                DownloadCV:'Download CV',
                Skills:'Skills',
                VideoGames:'Video Games',
                VideoGamesDescription:'I really enjoy connecting in call and playing with my friends for hours in my free time',
                Movies:'Movies',
                MoviesDescription:'I like to watch movies and series, immerse myself in a world of fantasy and discover new stories over time',
                Karting:'Karting',
                KartingDescription:'Since I was 5 years old I have been passionate about karting, when I have the opportunity I enjoy every moment on the track and the adrenaline',
                Padel:'Padel',
                PadelDescription:'I have been playing padel for years, but recently very frequently. I really like it and I have a lot of fun playing with friends and family.',
                Presentation1:'Hello, I am Mateo Gurrea',
                Presentation2:'Hello, I am a Web Developer',
                DevTreeDescription:'DevTree is a Linktree-style web app that lets you keep all your social media links in one place and share them with your followers. Created and designed in a Udemy course.',
                DomusDescription:'Web page for a fictional real estate agency with login and registration of different users, which allows searching, viewing details, reserving and buying. It also has an administration panel to control properties and users. Created and designed in collaboration with 3 colleagues.',
                MeliDescription:'Web page that integrates the Mercado Libre API to search for products, view product details and a real purchase simulation with the real purchase flow that Mercado Libre implements.',
                GifosDescription:'Website that integrates the Giphy API to search, save, download, create and share gifs.',
                VidaDescription:'Page created for a company that provides services for the care of the elderly. Created and designed in collaboration with 3 colleagues at the request of the client.',
                CopyRight:'© 2025 Mateo Gurrea. All Rights Reserved.',
                FooterQuestion:'Did you like my portfolio?',
                ContactMe:'Contact me:',
                AlsoPrivateMessage:'Also by private message from',
              }
            },
            es:{
              translation:{
                English:'Ingles',
                Home:'Inicio',
                Projects:'Proyectos',
                AboutMe:'Sobre Mi',
                AboutMeDescription:'Desarrollador Web con mas de 3 años de conocimientos y experiencia academica, recibido de la Tecnicatura Superior en Desarrollo de Software. Apasionado de la programacion y los diseños esteticamente bonitos de las paginas web.',
                DownloadCV:'Descargar CV',
                Skills:'Habilidades',
                VideoGames:'Video Juegos',
                VideoGamesDescription:'Disfruto mucho en mis tiempos libres de conectarme en llamada y jugar con mis amigos durante horas',
                Movies:'Peliculas',
                MoviesDescription:'Me gusta ver peliculas y series, sumergirme en un mundo de fantasia y conocer nuevas historias con el paso del tiempo',
                Karting:'Karting',
                KartingDescription:'Desde los 5 años me apasiona el karting,cuando tengo la posibilidad disfruto cada momento en la pista y la adrenalina de la carrera',
                Padel:'Padel',
                PadelDescription:'Juego padel desde hace años,pero hace pocos meses con mucha frecuencia, me gusta mucho y me divierto mucho jugando con amigos y familiares',
                Presentation1:'Hola, soy Mateo Gurrea',
                Presentation2:'Hola, soy Desarrollador Web',
                DevTreeDescription:'DevTree es una aplicación web al estilo de Linktree que te permite tener todos los links de tus redes sociales en un solo lugar y compartirlo con tus seguidores. Creada y diseñada en un curso de udemy.',
                DomusDescription:'Pagina web para una inmobiliaria ficticia con login y registro de distintos usuarios, que permite buscar, ver detalles, reservar y comprar.Tambien posee un panel de administracion para poder cotrolar las propiedades y usuarios. Creada y diseñada en colaboracion con 3 compañeros.',
                MeliDescription:'Pagina web que integra la API de Mercado Libre para buscar productos, ver detalles de un producto y una simulacion de compra real con el flujo real de carrito de compra que implementa Mercado Libre.',
                GifosDescription:'Pagina web que integra la API de Giphy para buscar, guardar, descargar, crear y compartir gifs.',
                VidaDescription:'Pagina creada para una empresa de servicios de cuidados de personas mayores. Creada y diseñada en colaboracion con 3 compañeros a pedido del cliente.',
                CopyRight:'© 2025 Mateo Gurrea. Todos los derechos reservados.',
                FooterQuestion:'¿Te gusto mi portafolio?',
                ContactMe:'Contactate conmigo:',
                AlsoPrivateMessage:'Tambien por mensaje privado de',
              }
            }
        }
    });

export default i18n;