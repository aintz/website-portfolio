import { useTranslation } from "react-i18next"
import  click  from '../assets/sounds/simple-click.mp3'
import { useEffect } from "react"

export default function ChangeLanguage(){
    const {i18n} = useTranslation()
    const currentLanguage = i18n.language
    const clickAudio = new Audio(click)
    
    useEffect( () => {
        localStorage.setItem('lang', currentLanguage);
    },[currentLanguage])

    return(
        <>
            <button className={"change-language dark" + (currentLanguage === 'es' ? ' active' : '')}  onClick={() => {clickAudio.play();i18n.changeLanguage('es')}} >ES</button>
            <button className={"change-language dark" + (currentLanguage === 'en' ? ' active' : '')}onClick={() => {clickAudio.play();i18n.changeLanguage('en')}}>EN</button>

        </>
    )
}