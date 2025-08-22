import { Rnd } from 'react-rnd';
import { useState, useRef, useEffect} from 'react';
import * as motion from "motion/react-client"
import  pause  from '../assets/pause.png'
import  power  from '../assets/power.png'
import  play  from '../assets/play.png'
import  iddleCat  from '../assets/IdleCattv2.png'
import  tamagotchi  from '../assets/tamagotchiv4.png'
import  click  from '../assets/sounds/simple-click.mp3'
import type { window } from './Desktop';
import type { DraggableData, DraggableEvent } from 'react-draggable';


type windowSizeT = {
  width: number,
  height: number
}


type TamagotchiT = {
  windowZindex: React.MutableRefObject<number>
  setWindowsState: React.Dispatch<React.SetStateAction<window>>,
  windowState: string,
  windowType: string,
  windowSize: windowSizeT
  
}


export default function Tamagotchi({windowZindex, windowState,setWindowsState ,windowType,windowSize}:TamagotchiT) { 
  const clickAudio = new Audio(click)

  const playerRef = useRef(null);
  const ytPlayer = useRef<YT.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [catState, setCatState] = useState('paused')
  const[ showPlay, setShowPlay] = useState(true)
  
  useEffect(() => {
    const createPlayer = () => {
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        height: "120",
        width: "140",
        videoId: "CgCVZdcKcqY",
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          loop: 1,
          playlist: "CgCVZdcKcqY",
        },
        events: {
          onReady: () => {
            setShowPlay(false);
          },
        },
      })
    }

    if (window.YT) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (ytPlayer.current) {
        ytPlayer.current.destroy();
      }
      window.onYouTubeIframeAPIReady = undefined;
      setShowPlay(true);
    }
  }, [])
  
  function togglePlayback (){
    if (!ytPlayer.current) return;
    
    if (isPlaying) {
      ytPlayer.current.pauseVideo();
    } else {
      ytPlayer.current.playVideo();
    }
    setIsPlaying(prev => !prev);
    setCatState( prev => prev === 'paused' ? 'playing' : 'paused')
  }
      
  const [position, setPosition] = useState<windowPosition>(
    {
      x: 500,
      y: 50
    }
  )
    
  function close(){
    setWindowsState( prev => ({...prev,[windowType]:'closed'}))
    clickAudio.play()
  }

      
  type windowPosition = {
      x: number,
      y:number
  }
    
  const targetOffScreenY = window.innerHeight - 57
    
  function getFront(){
      windowZindex.current = windowZindex.current+1
  }

  return(
                
    <motion.div
            animate={{
                x: windowState === 'open' ? 0 : 0,
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
            style={{ zIndex: windowZindex.current, backgroundImage: `url(${tamagotchi})` }}
            className= 'tamagotchi'
            bounds={'.windows-container'}
            minWidth={'360px'}
            maxHeight={'414px'}
            maxWidth={'360px'}
            minHeight={'414px'}
            size={windowSize}
            position={position}
            onDragStop={(_e: DraggableEvent, data: DraggableData) => {
              setPosition({ x: data.x, y: data.y });
            }}
            enableResizing={false}

        >
            <div className='tama-center'>
              <button
                  onClick={togglePlayback}
                  className="yt-btn play-btn"
                  disabled={showPlay}
              >
                {isPlaying ? <img src={pause}></img> : <img src={play}></img>}
              </button>
              <button
                onClick={close}
                className="yt-btn power-btn"
              >
                <img src={power}></img>
              </button>
              <div ref={playerRef}></div>
              
              <div className="youtube-player">
                <p className='player-2'>BLACKPINK</p>
                <div  className={catState + ' cat-sprite'} style={{backgroundImage: `url(${iddleCat})`}}></div>
                <p className='player-2'>Jump</p>
              </div>
            </div>
        </Rnd>
    </motion.div>
             
            
    )
}    