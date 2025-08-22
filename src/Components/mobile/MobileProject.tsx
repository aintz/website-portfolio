import  eye  from '../../assets/eye.png'
import  eyeDark  from '../../assets/eye-dark2.png'
import React from 'react';
import { useTranslation } from "react-i18next"
import { MobileScreenContext } from '../../MobileApp';
import { Link } from 'react-router-dom';

type MobileProjectProps = {
    project: string;
    projectLink: string;
    projectImg: string;        
    projectType: string;        
    title: string;
    description: string;
    stack: string;      
  }

export default function MobileProject(children:MobileProjectProps){

    const { t } = useTranslation()
    const {screen} = React.useContext(MobileScreenContext)
    
    return(
            <div className="project-container">
                <Link to={children.project}>
                <div className='project-header card-pad'>
                    <div className='project-title-row'> 
                        <p className="player-2 font-left title">{children.title}</p>
                            <img className='eye-link' src={screen === 'light' ? eye : eyeDark}></img>
                    </div>
                    <img className='project-image mt-15' src={children.projectImg}></img>
                </div>
                <div className='project-content'>
                    <div className='project-type-left card-pad'>
                        <p className="project-type font-left player-2">{children.projectType === 'dev' ? t('webDev') : t('webDes')}</p>
                        <p className='project-role baloo-chettan-2'>{t('role')}: {children.projectType === 'dev' ? t('devRole') : t('desRole')}</p>
                    </div>
                    <div className='project-type-right'>
                        <p className={`font-center player-2 ${children.projectType === 'dev'? 'dev-class': 'designclass'}`}>{children.projectType}</p>
                    </div>
                </div>
                <div className='project-content'>
                    <div className='card-pad'>
                    <p className='project-role baloo-chettan-2'>{children.description}</p>
                    <p className='project-role baloo-chettan-2 pad-top-15'><u>Stack</u>: {children.stack}</p>
                    </div>
                    
                </div>
                
                </Link>
            </div>
        
    )
}