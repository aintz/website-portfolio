import Weather from "./Weather"
import  contactImg from '../../assets/m-contact.png'
import  projectsImg from '../../assets/m-projects.png'
import  readmeImg from '../../assets/m-readme.png'
import  aboutImg from '../../assets/m-about.png'
import  cvImg from '../../assets/m-download.png'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import  dCV  from '../../assets/AintCV.pdf'


export default function MobileApps(){
    const {t} = useTranslation()
    return(
        <>
        <Weather/>
        <div className="m-apps">
            <div className="m-app-btn">
                <Link to='/about'>
                    <button><img src={aboutImg}></img></button>
                    <p className="m-app-title stroke">{t('about')}</p>
                </Link>
            </div>
            <div className="m-app-btn">
                <Link to='/contact'>  
                    <button><img src={contactImg}></img></button>
                    <p className="m-app-title stroke">{t('contact')}</p>
                </Link>
            </div>
            <div className="m-app-btn">
                <Link to='/projects'>
                    <button><img src={projectsImg}></img></button>
                    <p className="m-app-title stroke">{t('projects')}</p>
                </Link>
            </div>
            <div className="m-app-btn">
                <Link to='/readme'>
                    <button><img src={readmeImg}></img></button>
                    <p className="m-app-title stroke">Readme</p>
                </Link>
            </div>
            <div className="m-app-btn">
                <Link to={dCV} target="_blank">
                    <button><img src={cvImg}></img></button>
                    <p className="m-app-title stroke">CV</p>
                </Link>
            </div>
            
        </div>
        </>
    )
}