import { Rnd } from 'react-rnd';
import { useState} from 'react';
import  WindowHearts  from '../assets/window-hearts.png'
import  WindowHeartsDark  from '../assets/window-hearts-dark.png'
import * as motion from "motion/react-client"
import  click  from '../assets/sounds/simple-click.mp3'
import  Closew  from '../assets/close.svg?react';
import  Minimizew  from '../assets/minimize.svg?react';
import React from 'react';
import { ScreenContext } from './Desktop';
import type { window } from './Desktop';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import type { Position } from 'react-rnd';

type windowSizeT = {
  width: number,
  height: number
}


type WindowT = {
  windowZindex: React.MutableRefObject<number>
  children: React.ReactNode ,
  title:string,
  setWindowsState: React.Dispatch<React.SetStateAction<window>>,
  windowState: string,
  windowType: string,
  windowSize: windowSizeT
  
}

export default function Window({windowZindex, children, title, windowState,setWindowsState ,windowType,windowSize}:WindowT) { 
    
    const {screen} = React.useContext(ScreenContext)
    
    const clickAudio = new Audio(click)

    const [position, setPosition] = useState<windowPosition>(
        {
        x: 200,
        y: 50
        }
    )
    
    const [moveValue, setMoveValue] = useState(0)


    function close(){
        setWindowsState(prev => {
            return(
                {
                    ...prev,
                    [windowType]:'closed'
                }
            )
        })
        clickAudio.play()
    }

    function minimize(){
        setWindowsState(prev => {
            return(
                {
                    ...prev,
                    [windowType]:'minimized'
                }
            )
        })
        const innerWidth = window.innerWidth
        const halfInnerWidth = innerWidth/2
        const halfWindowSize =(size.width)/2
        const move = halfInnerWidth - halfWindowSize - position.x/2
        setMoveValue(move)
        clickAudio.play()
    }

    
    type windowSizeT = {
          width: number,
          height: number
        }
      
    type windowPosition = {
        x: number,
        y:number
    }
    
    const [size, setSize] = useState<windowSizeT>({
        width: windowSize.width,
        height: windowSize.width,
    })
        
    
    const targetOffScreenY = window.innerHeight - 57
    
    
    function getFront(){
        windowZindex.current = windowZindex.current+1
    }

    
    return(
                
    <motion.div
            animate={{
                x: windowState === 'open' ? 0 : moveValue,
                y: windowState === 'open' ? 0 : targetOffScreenY,
                opacity: windowState === 'open' ? 1 : 0.1,
                scale: windowState === 'open' ? 1 : 0.5,
            }}
            
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
                width: 0,
                height: 0,
                position: 'absolute',
                zIndex: windowZindex.current           
            }}
    >
        <Rnd 
            onMouseDown={getFront}
            
            style={{ zIndex: windowZindex.current }}
            className={`window-style ${windowType === 'terminal' ? 'terminal-window' : ''}`}
            bounds={'.windows-container'}
            minWidth={'500px'}
            maxHeight={'700px'}
            maxWidth={'900px'}
            minHeight={'313px'}
            size={size}
            position={position}
            onDragStop={(_e: DraggableEvent, data: DraggableData) => {
                setPosition({ x: data.x, y: data.y });
              }}
            onResizeStop= {(_e, _direction, rndRef, _delta, position: Position) => {
                setSize(
                {
                    width: parseInt(rndRef.style.width,10),
                    height: parseInt(rndRef.style.height,10)
                }
                )
                setPosition(position)
            }}
            
            
        >
            <div className='window-header'>
                <img src={ screen === 'light' ? WindowHearts : WindowHeartsDark}></img>
                <p className='window-name'>{title}</p>
                <div className='window-options'>
                    
                    <button onClick={minimize}><Minimizew/></button>
                    <button onClick={close}><Closew/></button>
                </div>
            </div>
            {children}
        </Rnd>
    </motion.div>
             
            
    )
}
