

import MobileWindow from './MobileWindow';
import Contact from '../Contact';

export default function MobileContact({title}:{title:string}){
    
    return(
        <MobileWindow title={title}>
            <Contact/>
        </MobileWindow>
    )
}