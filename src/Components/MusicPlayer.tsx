import  PlayListIcon  from '../assets/playlist.svg?react';
import { WindowContext } from './Desktop';
import React from 'react';
import  click  from '../assets/sounds/simple-click.mp3'

export default function MusicPlayer() {
    
    
    const {openWindow} = React.useContext(WindowContext)    
    const clickAudio = new Audio(click)
    
    return(
        <button onClick={() => {openWindow('musicPlayer'); clickAudio.play()}}><PlayListIcon></PlayListIcon></button>
    )
}