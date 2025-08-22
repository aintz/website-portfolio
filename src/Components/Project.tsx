import  eye  from '../assets/eye.png'
import  eyeDark  from '../assets/eye-dark2.png'
import React from 'react';
import { ModalContext } from './Desktop';
import { useTranslation } from "react-i18next"
import  click  from '../assets/sounds/simple-click.mp3'
import { ScreenContext } from './Desktop';

type ProjectType = {
    project: string,
    projectLink: string,
    projectImg: string,
    projecType: string,
    title: string,
    description: string,
    stack: string,
}

export default function Project(children:ProjectType){

    const {setModal} = React.useContext(ModalContext)!   
    
    const { t } = useTranslation()
    const clickAudio = new Audio(click)
    const {screen} = React.useContext(ScreenContext)
    
    return(
            <div className="project-container">
                        <a onClick={() => {clickAudio.play();setModal(prev => ({...prev,[children.project]:'open'}))}} >

                <div className='project-header card-pad'>
                    <div className='project-title-row'> 
                        <p className="player-2 font-left title">{children.title}</p>
                            <img className='eye-link' src={screen === 'light' ? eye : eyeDark}></img>
                    </div>
                    <img className='project-image mt-15' src={children.projectImg}></img>
                </div>
                <div className='project-content'>
                    <div className='project-type-left card-pad'>
                        <p className="project-type font-left player-2">{children.projecType === 'dev' ? t('webDev') : t('webDes')}</p>
                        <p className='project-role baloo-chettan-2'>{t('role')}: {children.projecType === 'dev' ? t('devRole') : t('desRole')}</p>
                    </div>
                    <div className='project-type-right'>
                        <p className={`font-center player-2 ${children.projecType === 'dev'? 'dev-class': 'designclass'}`}>{children.projecType}</p>
                    </div>
                </div>
                <div className='project-content'>
                    <div className='card-pad'>
                    <p className='project-role baloo-chettan-2'>{children.description}</p>
                    <p className='project-role baloo-chettan-2 pad-top-15'><u>Stack</u>: {children.stack}</p>
                    </div>
                    
                </div>
                </a>
            </div>
        
    )
}