import { useTranslation } from "react-i18next"

export default function Contact(){
    const { t } = useTranslation()
    return(
        <div className="window-content contact-wrapper">
            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">Email</p>
                <a className="font-left baloo-chettan-2" href="mailto:aintzz.im@gmail.com">aintzz.im@gmail.com</a>    
            </div>
            <div className="dashed-line"></div>
            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">LinkedIn</p>
                <a className="font-left baloo-chettan-2" target="_blank" href="https://www.linkedin.com/in/aintzaneiglesias/">@aintzaneiglesias</a>    
            </div>
            <div className="dashed-line"></div>
            <div className="window-row padlr-1 gap-about nwrap">
                <p className="player-2 font-shadow font-center title">{t('location')}</p>
                <p className="font-left baloo-chettan-2">Barcelona, Spain</p>    
            </div>
        </div>
    )
}