

import MobileWindow from './MobileWindow';
import Readme from '../Readme';

export default function MobileReadme({title}:{title:string}){
    
    return(
        <MobileWindow title={title}>
            <Readme/>
        </MobileWindow>
    )
}