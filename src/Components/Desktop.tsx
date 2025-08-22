import Header from '../Components/Header';
import WindowsContainer from '../Components/WindowsContainer';
import React from "react";
import { useState } from 'react';
import Modal from './Modal';


export type windowTypeT = 'about' | 'contact' | 'projects' | 'readme' | 'terminal' 


export type modal = {
  farming: string,
  age: string,
  immersive: string,
  queixos: string
}

type modalContext = {
  modal: modal,
  setModal: React.Dispatch<React.SetStateAction<modal>>
}

export type windowStatus = 'open' | 'closed' | 'minimized' 

export type window = {
      about:windowStatus,
      contact:windowStatus,
      readme:windowStatus,
      terminal:windowStatus,
      projects:windowStatus,
      musicPlayer:windowStatus

  }

type OpenWindowFn = (key: keyof window) => void

export type windowContext = {
  windowsState: window,
  setWindowsState: React.Dispatch<React.SetStateAction<window>>
  openWindow:OpenWindowFn
}

type screenContext = {
  screen: string,
  setScreen: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const ModalContext = React.createContext<modalContext | undefined>(undefined)
const WindowContext = React.createContext<windowContext>({
  windowsState: {
    about:'closed',
    contact:'closed',
    readme:'closed',
    terminal:'closed',
    projects:'closed',
    musicPlayer:'closed'
  },
  setWindowsState: () => {},
  openWindow:() => {}
})

const ScreenContext = React.createContext<screenContext>({
  screen: 'light',
  setScreen: () => {}
})

export default function Desktop(){
  
  const [modal, setModal] = useState({
    farming: 'closed',
    age: 'closed',
    immersive: 'closed',
    queixos: 'closed'
  });

  
  const screenMode = localStorage.getItem('screenMode') ?? 'light';
  
  
  const [screen, setScreen] = useState<'light' | 'dark'>(() => {
    const mode = localStorage.getItem('screenMode')
    return mode === 'light' || mode === 'dark' ? mode : 'light'
  })


  const isAnyModalOpen:boolean = Object.values(modal).includes('open')
  
  
  const [windowsState, setWindowsState] = useState<window>({
      about: 'closed',
      contact: 'closed',
      readme: 'closed',
      terminal: 'closed',
      projects: 'closed',
      musicPlayer: 'closed'

  })
  
  function openWindow(key: keyof typeof windowsState){
      setWindowsState(prev => ({...prev,[key]:'open'}))
  }

  return(
    <ModalContext.Provider value={{modal,setModal}}>
      
      {isAnyModalOpen && (
        <Modal modal={modal} setModal={setModal}></Modal>
      )}
      <ScreenContext.Provider value={{screen, setScreen}}>
        <div className={`color-background ${isAnyModalOpen ? 'grayscale': ''} ${screenMode}`}>
          <div className='line-background'>
            <WindowContext.Provider value={{windowsState, setWindowsState,openWindow}}>
              <Header></Header>
              <WindowsContainer></WindowsContainer>
            </WindowContext.Provider>
          </div>
        </div>
      </ScreenContext.Provider>
    </ModalContext.Provider>
  )
}

export {ModalContext}
export {WindowContext}
export {ScreenContext}