
import Project from './Project'
import  immersive  from '../assets/immersive-planet.png'
import  queixos  from '../assets/queixos-brigantia.png'
import  farming  from '../assets/farming-friends.png'
import  age  from '../assets/age-verification.png'
import { useTranslation } from "react-i18next"

export default function Projects(){
    const { t } = useTranslation()
    
    const projects = {
        immersive: {
            stack: 'WordPress, PHP, JavaScript, SCSS'
        },
        queixos: {
            stack: 'Shopify (Liquid), HTML/CSS, JavaScript'
        },
        farming: {
            stack: 'Figma, Adobe Illustrator, Adobe Photoshop'
        },
        age: {
            stack: 'Figma'
        }
    }
    
    return(
        <div className="window-content">
            <div className="window-row gap-project wrap">
                <Project project= 'immersive' projectLink='https://www.immersiveplanet.com/' projectImg={immersive} projecType={'dev'} title={'IMMERSIVE PLANET'} description={t('immersive')} stack={projects.immersive.stack}></Project>
                <Project project='farming' projectLink='' projectImg={farming} projecType={'uxui'} title={'FARMING FRIENDS'} description={t('farming')} stack={projects.farming.stack}></Project>
                <Project project='queixos' projectLink='https://queixosbrigantia.es/' projectImg={queixos} projecType={'dev'} title={'QUEIXOS BRIGANTIA'} description={t('queixos')} stack={projects.queixos.stack}></Project>
                <Project project='age' projectLink='' projectImg={age} projecType={'uxui'} title={'AGE VERIFICATION SYSTEM'} description={t('age')} stack={projects.age.stack}></Project>
            </div>
        </div>
        
    )
}