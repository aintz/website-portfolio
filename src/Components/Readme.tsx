import { useTranslation } from "react-i18next";

export default function Readme(){
    const ascii = `
  ____  _____    _    ____  __  __ _____ 
 |  _ \\| ____|  / \\  |  _ \\|  \\/  | ____|
 | |_) |  _|   / _ \\ | | | | |\\/| |  _|  
 |  _ <| |___ / ___ \\| |_| | |  | | |___ 
 |_| \\_\\_____/_/   \\_\\____/|_|  |_|_____|
  `;

    const {i18n} = useTranslation()
    const currentLanguage = i18n.language

    return(
        <>
        {currentLanguage === 'en' ?

        <div className="window-content readme-wrapper">
            <p className="mono">{ascii}<span className="readme-span">© 2025. Designed and developed by Aint</span></p>
            
            <div className="dashed-line"></div>
            <div className="readme-content">
            <p className="font-left">A personal portfolio where I combined my skills as a full-stack developer and product designer. </p>
            <p className="font-left">Every detail from concept to code was designed and developed by me.</p>
            <p className="font-left">The site draws inspiration from macOS UI patterns, pixel art nostalgia, and the energy of the Y2K aesthetic.</p>
            <div className="dashed-line"></div>
            <p className="font-center readme-titles">FEATURES</p>
            <ul>
                <li>Fully custom design — no templates, all UI handcrafted</li>
                <li>macOS-inspired interface with pixel art details and Y2K-style color palette</li>
                <li>Responsive layout for desktop and mobile</li>
                <li>Dark and light mode support</li>
                <li>Multilingual — uses i18n for English and Spanish translations</li>
                <li>Interactive terminal that shows info about me and also random cat facts pulled from an API, available on the desktop version</li>
                <li>Weather widget pulling real-time data from an external API</li>
                <li>Resizable and draggable windows on desktop using react-rnd</li>
                <li>Dock animation that mimics macOS behavior when minimizing windows powered by Framer Motion</li>
            </ul>

            <div className="dashed-line"></div>
            <p className="font-center readme-titles">TECH STACK</p>
            <ul>
                <li>Languages: TypeScript, HTML, CSS</li>
                <li>Framework: React</li>
                <li>Libraries:
                    <ul>
                        <li>react-rnd — for resizable, draggable desktop windows</li>
                        <li>framer-motion — for smooth animations, including dock transitions</li>
                        <li>react-i18next — for English/Spanish translations</li>
                        <li>react-router — to handle navigation</li>
                    </ul>
                </li>
                <li>APIs:
                    <ul>
                        <li>Open-Meteo API — live weather data</li>
                        <li>Cat Facts API — random cat facts in the terminal</li>

                    </ul>
                </li>
                <li>Deployment: Vite</li>
            </ul>
            
            </div>
        </div>
        :
        <div className="window-content readme-wrapper">
            <p className="mono">{ascii}<span className="readme-span">© 2025. Diseñado y desarrollado por Aint</span></p>
            
            <div className="dashed-line"></div>
            <div className="readme-content">
            <p className="font-left">Un portafolio personal donde combiné mis habilidades como desarrolladora full-stack y diseñadora de producto.</p>
            <p className="font-left">Cada detalle desde el concepto hasta el código fue diseñado y desarrollado por mí.</p>
            <p className="font-left">El sitio está inspirado en interfaces de macOS, la nostalgia del pixel art y la energía vibrante de la estética Y2K.</p>
            <div className="dashed-line"></div>
            <p className="font-center readme-titles">CARACTERÍSTICAS</p>
            <ul>
                <li>Diseño 100% personalizado sin plantillas, toda la interfaz creada desde cero</li>
                <li>Interfaz inspirada en macOS con detalles en pixel art y paleta de colores estilo Y2K</li>
                <li>Diseño responsive para escritorio y móvil</li>
                <li>Modo oscuro y claro</li>
                <li>Multilenguaje — usa i18n para traducciones en inglés y español</li>
                <li>Terminal interactiva que muestra información sobre mi y datos curiosos sobre gatos desde una AP, disponible en la versión de escritorio</li>
                <li>Widget del clima con datos en tiempo real desde una API</li>
                <li>Ventanas redimensionables y movibles en escritorio usando react-rnd</li>
                <li>Animación de dock que imita el comportamiento de macOS al minimizar ventanas hecho con Framer Motion</li>
            </ul>

            <div className="dashed-line"></div>
            <p className="font-center readme-titles">STACK TECNOLÓGICO</p>
            <ul>
                <li>Lenguajes: TypeScript, HTML, CSS</li>
                <li>Framework: React</li>
                <li>Librarías:
                    <ul>
                        <li>react-rnd — para ventanas redimensionables y movibles en escritorio</li>
                        <li>framer-motion — para animaciones fluidas, incluyendo la transición al dock</li>
                        <li>react-i18next — para traducciones inglés/español</li>
                        <li>react-router — para manejar la navegación</li>
                    </ul>
                </li>
                <li>APIs:
                    <ul>
                        <li>Open-Meteo API — datos meteorológicos en tiempo real</li>
                        <li>Cat Facts API — datos curiosos de gatos en la terminal</li>

                    </ul>
                </li>
                <li>Despliegue: Vite</li>
            </ul>
            
            </div>
        </div>
        }
        </>
        
    )
}