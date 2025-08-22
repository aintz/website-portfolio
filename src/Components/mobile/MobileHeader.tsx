import useGetTime from "../useGetTime"
import { useGetDate } from "../useGetDate"
import React from "react"
import  MoonIcon  from '../../assets/moon.svg?react'
import  SunIcon  from '../../assets/lightbulb.svg?react'
import { MobileScreenContext } from "../../MobileApp"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"


export default function MobileHeader(){
    const {i18n} = useTranslation()
    const currentLanguage = i18n.language

    const time = useGetTime()
    const fullDate = useGetDate()
    const {screen, setScreen} = React.useContext(MobileScreenContext)

    function handleChangeLang(){
        const newMode = screen === 'light' ? 'dark' : 'light';
        setScreen(newMode)
        localStorage.setItem('screenMode', newMode);
    }

    useEffect( () => {
            localStorage.setItem('lang', currentLanguage);
        },[currentLanguage])
    
    return(
        <div className="m-header">
            <div className="mDate">
                <p className="player-2 m-date">{time}</p>
                <p className="player-2 m-hour">{fullDate}</p>
            </div>
            <div className="m-options">
                <button className={"change-language dark" + (currentLanguage === 'es' ? ' active' : '')}  onClick={() => i18n.changeLanguage('es')} >ES</button>
                <button className={"change-language dark" + (currentLanguage === 'en' ? ' active' : '')}onClick={() => i18n.changeLanguage('en')}>EN</button>

                {screen === 'light' ? 
                <button onClick={handleChangeLang}><MoonIcon/></button>
                :
                <button onClick={handleChangeLang}><SunIcon/></button>
                }
            </div>
        </div>
    )
}