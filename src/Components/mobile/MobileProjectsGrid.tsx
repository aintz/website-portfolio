import  immersive  from '../../assets/immersive-planet.png'
import  queixos  from '../../assets/queixos-brigantia.png'
import  farming  from '../../assets/farming-friends.png'
import  age  from '../../assets/age-verification.png'
import { useTranslation } from 'react-i18next'
import MobileProject from './MobileProject'

export default function MobileProjectsGrid(){
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
        <div className="window-content project-wrap">
            <div className="window-row gap-project wrap">
                <MobileProject project= 'immersive' projectLink='https://www.immersiveplanet.com/' projectImg={immersive} projectType={'dev'} title={'IMMERSIVE PLANET'} description={t('immersive')} stack={projects.immersive.stack}></MobileProject>
                <MobileProject project='farming' projectLink='' projectImg={farming} projectType={'uxui'} title={'FARMING FRIENDS'} description={t('farming')} stack={projects.farming.stack}></MobileProject>
                <MobileProject project='queixos' projectLink='https://queixosbrigantia.es/' projectImg={queixos} projectType={'dev'} title={'QUEIXOS BRIGANTIA'} description={t('queixos')} stack={projects.queixos.stack}></MobileProject>
                <MobileProject project='age' projectLink='' projectImg={age} projectType={'uxui'} title={'AGE VERIFICATION SYSTEM'} description={t('age')} stack={projects.age.stack}></MobileProject>
            </div>
        </div>
    )
}