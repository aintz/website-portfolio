import Window from "./Window"
import DownloadCV from '../Components/DownloadCV';
import BackgroundDecorations from '../Components/BackgroundDecorations';
import AboutMe from "./AboutMe";
import { useRef } from "react";
import Minimizedbar from "./MinimizedBar";
import  about  from '../assets/about.png'
import  aboutDark  from '../assets/about-dark.png'
import  projects  from '../assets/projects.png'
import  projectsDark  from '../assets/projects-dark.png'
import  terminal  from '../assets/terminal.png'
import  terminalDark  from '../assets/terminal-dark.png'
import  readme  from '../assets/readme.png'
import  readmeDark  from '../assets/readme-dark.png'
import  contact  from '../assets/contact.png'
import  contactDark  from '../assets/contact-dark.png'
import Projects from "./Projects";
import { useTranslation } from "react-i18next";
import Terminal from "./Terminal";
import Contact from "./Contact";
import Readme from "./Readme";
import Tamagotchi from "./Tamagotchi";
import { WindowContext } from "./Desktop";
import React from "react";
import  click  from '../assets/sounds/simple-click.mp3'
import { ScreenContext } from './Desktop';

export default function WindowsContainer(){
    
    const clickAudio = new Audio(click)
    const { t } = useTranslation()
    const {screen} = React.useContext(ScreenContext)
    
    const windowZindex = useRef<number>(1)

    const {windowsState, setWindowsState,openWindow} = React.useContext(WindowContext)    

   
    return(

        <div className="windows-container">
            <div className="desktop-links-container">
                    <a  onDoubleClick={() => {clickAudio.play();openWindow('about');}} className="desktop-link">
                        <img className="desktop-icon" src={screen === 'light' ? about : aboutDark}></img>
                        <span className='baloo-chettan-2'>{t('about')}</span>
                    </a>
                    <a onDoubleClick={() => {clickAudio.play();openWindow('projects');}}  className="desktop-link">
                        <img className="desktop-icon" src={screen === 'light' ? projects : projectsDark}></img>
                        <span className='baloo-chettan-2'>{t('projects')}</span>
                    </a>
                    <a onDoubleClick={() => {clickAudio.play();openWindow('contact');}}  className="desktop-link">
                        <img className="desktop-icon" src={screen === 'light' ? contact : contactDark}></img>
                        <span className='baloo-chettan-2'>{t('contact')}</span>
                    </a>
                    <a onDoubleClick={() => {clickAudio.play();openWindow('readme');}}  className="desktop-link">
                        <img className="desktop-icon" src={screen === 'light' ? readme : readmeDark}></img>
                        <span className='baloo-chettan-2'>Readme</span>
                    </a>
                    <a onDoubleClick={() => openWindow('terminal')}  className="desktop-link">
                        <img className="desktop-icon" src={screen === 'light' ? terminal : terminalDark}></img>
                        <span className='baloo-chettan-2'>Terminal</span>
                    </a>
            </div>
            
            {windowsState.musicPlayer != 'closed' ?
            <Tamagotchi
            windowZindex={windowZindex}
            windowSize={{ 
                width: 446,
                height: 589
            }}
            setWindowsState={setWindowsState} 
            windowState={windowsState.musicPlayer} 
            windowType='musicPlayer'
            >
            </Tamagotchi>
            : null}

            {windowsState.about != 'closed' ?
            <Window 
            windowZindex={windowZindex} 
            windowSize={{ 
                width: 840,
                height: 510
            }} 
            setWindowsState={setWindowsState} 
            windowState={windowsState.about} 
            title={t('about')} 
            windowType='about'>
                <AboutMe/>
            </Window>
            : null}

            {windowsState.projects != 'closed' ?
            <Window 
            windowZindex={windowZindex} 
            windowSize={{
                width: 964,
                height: 570
            }} 
            setWindowsState={setWindowsState} 
            windowState={windowsState.projects} 
            title={t('projects')} 
            windowType='projects'>
                <Projects/>
            </Window>
            : null} 

            {windowsState.terminal != 'closed' ?
            <Window 
            windowZindex={windowZindex} 
            windowSize={{
                width: 600,
                height: 320
                }} 
            setWindowsState={setWindowsState} 
            windowState={windowsState.terminal} 
            title='Terminal' 
            windowType='terminal'>
                <Terminal/>
            </Window>
            : null} 

            {windowsState.contact != 'closed' ?
            <Window 
            windowZindex={windowZindex} 
            windowSize={{
                width: 477,
                height: 313
            }} 
            setWindowsState={setWindowsState} 
            windowState={windowsState.contact} 
            title={t('contact')} 
            windowType='contact'>
                <Contact/>
            </Window>
            : null}

        
            {windowsState.readme != 'closed' ?
            <Window 
            windowZindex={windowZindex} 
            windowSize={{
                width: 603,
                height: 401
            }} 
            setWindowsState={setWindowsState} 
            windowState={windowsState.readme} 
            title='readme' 
            windowType='readme'>
                <Readme/>
            </Window>
            : null}  

            <DownloadCV></DownloadCV>
            <BackgroundDecorations></BackgroundDecorations>
            <Minimizedbar setWindowsState={setWindowsState} windowState={windowsState}></Minimizedbar>
        </div>
        
    )
}