import  aboutDockDark  from '../assets/dock-aboutme-dark.png'
import  contactDockDark  from '../assets/dock-contact-dark.png'
import  terminalDockDark  from '../assets/dock-terminal-dark.png'
import  projectsDockDark  from '../assets/dock-projects-dark.png'
import  readmeDockDark  from '../assets/dock-readme-dark.png'
import  aboutDock from '../assets/dock-about.png'
import  contactDock from '../assets/dock-contact.png'
import  terminalDock  from '../assets/dock-terminal.png'
import  projectsDock  from '../assets/dock-projects.png'
import  readmeDock  from '../assets/dock-readme.png'
import * as motion from "motion/react-client"
import { useState } from 'react'
import  click  from '../assets/sounds/simple-click.mp3'
import { ScreenContext } from './Desktop'
import React from 'react'
import type { window, windowTypeT } from './Desktop'


type MinimizedbarProps = {
    windowState: window,
    setWindowsState: React.Dispatch<React.SetStateAction<window>>
  }

export default function Minimizedbar({windowState,setWindowsState}:MinimizedbarProps){

    const clickAudio = new Audio(click)
    const [isOnScreen, setisOnScreen] = useState(false)
    const {screen} = React.useContext(ScreenContext)
    function handleOver(){
        setisOnScreen(prev => !prev)
    }

    function handleLeave(){
        setisOnScreen(prev => !prev)
    }

    const isAnyWindowMinimized = Object.entries(windowState ?? {}).some(([key, value]) =>
    key !== 'musicPlayer' && (value === 'minimized' || value === 'open'))

    function handleClick(windowType:windowTypeT){
        setWindowsState(prev => ({...prev,[windowType]: 'open'}))
    }

    return(
        <>
        {isAnyWindowMinimized ?

        <motion.div
        onMouseLeave={handleLeave} 
        onMouseEnter={handleOver}  
        className='dock-bar'
        animate={{
            x: 0,
            y: isOnScreen ? -60 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >      
            <>
                {windowState.about === 'minimized' ||  windowState.about === 'open'?
                    <a className='dock-icon' onClick={() => {clickAudio.play();handleClick('about')}}>
                        <span className='dock-item baloo-chettan-2'>About me</span>
                        <img src={screen === 'light' ? aboutDock : aboutDockDark}></img>
                    </a>
                :null }

                {windowState.projects === 'minimized' ||  windowState.projects === 'open'?
                    <a className='dock-icon' onClick={() => {clickAudio.play();handleClick('projects')}}>
                    <span className='dock-item baloo-chettan-2'>Projects</span>
                    <img src={screen === 'light' ? projectsDock : projectsDockDark}></img>
                    </a>
                :null }
                {windowState.contact === 'minimized' ||  windowState.contact === 'open'?
                    <a className='dock-icon' onClick={() => {clickAudio.play();handleClick('contact')}}>
                        <span className='dock-item baloo-chettan-2'>Contact</span>
                        <img src={screen === 'light' ? contactDock : contactDockDark}></img>
                    </a>
                :null }
                {windowState.readme === 'minimized' ||  windowState.readme === 'open'?
                    <a className='dock-icon' onClick={() => {clickAudio.play();handleClick('readme')}}>
                    <span className='dock-item baloo-chettan-2'>Readme</span>
                    <img src={screen === 'light' ? readmeDock : readmeDockDark}></img>
                    </a>
                :null }
                {windowState.terminal === 'minimized' ||  windowState.terminal === 'open'?
                    <a className='dock-icon' onClick={() => {clickAudio.play();handleClick('terminal')}}>
                    <span className='dock-item baloo-chettan-2'>Terminal</span>
                    <img src={screen === 'light' ? terminalDock : terminalDockDark}></img>
                    </a>
                :null }

            </>
        </motion.div>
        :null}
        </>
    )
}