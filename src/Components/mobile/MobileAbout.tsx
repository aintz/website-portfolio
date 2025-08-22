

import MobileWindow from './MobileWindow';
import AboutMe from '../AboutMe';

export default function MobileAbout({title}:{title:string}){
    
    return(
        <MobileWindow title={title}>
            <AboutMe/>
        </MobileWindow>
    )
}