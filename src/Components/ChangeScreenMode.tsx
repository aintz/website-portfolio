
import  MoonIcon  from '../assets/moon.svg?react'
import  SunIcon  from '../assets/lightbulb.svg?react'
import React from 'react'
import  click  from '../assets/sounds/simple-click.mp3'
import { ScreenContext } from './Desktop'

export default function ChangeScreenMode() {
        
    const {screen, setScreen} = React.useContext(ScreenContext)
    const clickAudio = new Audio(click)

    function handleClick(){
        const newMode = screen === 'light' ? 'dark' : 'light';
        setScreen(newMode)
        clickAudio.play()
        localStorage.setItem('screenMode', newMode);
    }

    return(
        <>
            {screen === 'light' ? 
            <button onClick={handleClick}><MoonIcon/></button>
            :
            <button onClick={handleClick}><SunIcon/></button>
            }
        </>
    )
}