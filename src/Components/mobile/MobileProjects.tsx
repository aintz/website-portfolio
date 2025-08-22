

import MobileWindow from './MobileWindow';
import MobileProjectsGrid from './MobileProjectsGrid';

export default function MobileProjects({title}:{title:string}){
    
    return(
        <>
        <MobileWindow title={title}>
            <MobileProjectsGrid/>
        </MobileWindow>
        </>
    )
}