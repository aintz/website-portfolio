import { useTranslation } from "react-i18next"
import  dCV  from '../assets/AintCV.pdf'


export default function DownloadCV(){
    const { t } = useTranslation()
    
    return(
        <>
        <a href={dCV} target="_black" className="download-cv dark">{t('downloadcv')}</a>
        </>
    )
}