import  WindowHeart  from '../../assets/window-heart.png'
import  WindowHeartDark  from '../../assets/window-heart-dark.png'
import React from 'react';
import { MobileScreenContext } from '../../MobileApp';
import { Link } from 'react-router-dom';
import  leftArrow  from '../../assets/left-arrow-light.png'
import  leftArrowDark  from '../../assets/left-arrow-light-dark.png'


type MobileWindowProps = {
    title: string,
    children: React.ReactNode
}

export default function MobileWindow({title, children}:MobileWindowProps){
    
    const {screen} = React.useContext(MobileScreenContext)
    
    return(
        <div className={"mobile-windows " + screen}>
        <div className={"window-style "}>
            <div className='window-header'>
                <div className='window-options'>
                    <Link to='/'>
                        <img src={ screen === 'light' ? leftArrow : leftArrowDark}></img>
                    </Link>
                </div>
                <p className='window-name'>{title}</p>
                <img src={ screen === 'light' ? WindowHeart : WindowHeartDark}></img>
            </div>
            {children}
        </div>
        </div>
    )
}