
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';
import MobileDesktop from './Components/mobile/MobileDesktop';
import MobileAbout from './Components/mobile/MobileAbout';
import MobileContact from './Components/mobile/MobileContact';
import MobileReadme from './Components/mobile/MobileReadme';
import MobileProjects from './Components/mobile/MobileProjects';
import React from "react";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectDetails from './Components/mobile/ProjectDetails';

type screenContext = {
  screen: string,
  setScreen : React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const MobileScreenContext = React.createContext<screenContext>({
  screen: 'light',
  setScreen: () => {}
})


function MobileApp() {
  const {t} = useTranslation()
  
  const [screen, setScreen] = useState<'light' | 'dark'>( () => {
    const mode = localStorage.getItem('screenMode') ?? 'light';
    return mode === 'light' || mode === 'dark' ? mode: 'light'
  })
    
  return (
    <BrowserRouter>
      <MobileScreenContext.Provider value={{screen, setScreen}}>
        <Routes>
        <Route index path='/' element={<MobileDesktop/>} />
        <Route path='/about' element={<MobileAbout title={t('about')} />} />
        <Route path='/contact' element={<MobileContact title={t('contact')} />} />
        <Route path='/projects' element={<MobileProjects title={t('projects')} />}/>
        <Route path='/projects/immersive' element={<ProjectDetails title='immersive' />}/>
        <Route path='/projects/queixos' element={<ProjectDetails title='queixos' />}/>
        <Route path='/projects/age' element={<ProjectDetails title='age' />}/>
        <Route path='/projects/farming' element={<ProjectDetails title='farming' />}/>
        <Route path='/readme' element={<MobileReadme title={t('readme')} />} />
        <Route path='*'  element={<NotFound></NotFound>} />
        </Routes>
      </MobileScreenContext.Provider>
    </BrowserRouter>
 )
}

export default MobileApp
export {MobileScreenContext}