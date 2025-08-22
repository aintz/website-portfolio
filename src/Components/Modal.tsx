import  close  from '../assets/close.png'
import  arrow  from '../assets/active.png'
import { useState, useEffect, useRef} from 'react'
import { useTranslation } from "react-i18next"
import  click  from '../assets/sounds/simple-click.mp3'
import type { modal } from './Desktop'

type ModalKeys = 'immersive' | 'age' | 'farming' | 'queixos'
type ModalTypes = {
  modal: modal,
  setModal: React.Dispatch<React.SetStateAction<modal>>
}

const farmingFriendsParts = [
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/farming-friends-min-1.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/farming-friends-min-2.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/farming-friends-min-3.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/farming-friends-min-4.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/farming-friends-min-5.jpg'
]

const ageVerificationParts = [
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/age-verification-min-1.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/age-verification-min-2.jpg',
  'https://raw.githubusercontent.com/aintz/portfolio-cdn/main/age-verification-min-3.jpg'
]


export default function Modal({ modal, setModal }:ModalTypes) {
  const [showImage, setShowImage] = useState(false);
  const {t} = useTranslation()
  const clickAudio = new Audio(click)
  
  function handleProjectClick() {
    
    if(!openKey) return
    clickAudio.play()  
    if( openKey === 'queixos'){
      window.open('https://queixosbrigantia.es/')
    
    }else if( openKey === 'immersive'){
      window.open('https://www.immersiveplanet.com/')
    
    }else{
      setShowImage(true)
    }  
  }


  const openKey = Object.entries(modal).find(([_, value]) => value === 'open')?.[0] as ModalKeys // eslint-disable-line @typescript-eslint/no-unused-vars


  const [activeIndex, setActiveIndex] = useState(0);
  
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const buttons = t('modalButtons').split(',')
  const [arrowTop, setArrowTop] = useState<number | null>()

  const imageParts = openKey === 'farming' ? farmingFriendsParts : ageVerificationParts

  
  useEffect(() => {
    if (buttonsRef.current && buttonsRef.current[activeIndex]) {
      const button = buttonsRef.current[activeIndex]
      setArrowTop(button.offsetTop + button.offsetHeight / 2 -9)
    }
  }, [activeIndex])
  
    function handleClose(){
        if (!openKey) return
        setModal(prev => ({
          ...prev,
          [openKey]: 'closed'
        }));
        clickAudio.play()
    }
    return (
      <div className="modal-backdrop" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="crt-overlay"></div>
          <div className="window-header">
            <p className="window-name pdl-1">{t(`modal.${openKey}.title`)}</p>
            <button onClick={handleClose} className="close-button-wrapper">
              <img className="close-button pdr-1" src={close} alt="Close" />
            </button>
          </div>
          <div className='modal-menu'>
            <div className='modal-menu-wrapper'>
            <div className="modal-menu-options" style={{ position: 'relative' }}>
              {arrowTop !== null && (
              <img
                src={arrow}
                alt="arrow"
                className="arrow"
                style={{ top: arrowTop }}
              />
            )}
              <div className="modal-buttons">
                {buttons.map((label, i) => (
                  <button
                    key={i}
                    ref={el => {buttonsRef.current[i] = el}}
                    onClick={() => {setActiveIndex(i);clickAudio.play()}}
                    className={activeIndex === i ? 'active' : ''}
                  >
                    {label}
                  </button>
                ))}
              </div>
              
            </div>
            
            <div className='modal-menu-container'>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 0 ? 'active' : '')}>{t(`modal.${openKey}.description`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 1 ? 'active' : '')}>{t(`modal.${openKey}.role`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 2 ? 'active' : '')}>{t(`modal.${openKey}.highlights`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 3 ? 'active' : '')}>{t(`modal.${openKey}.tools`)}</p>
            </div>
            </div>
            
          </div>
          
          <div className={'open-case ' + ( (openKey === 'farming' || openKey === 'age') && showImage ? 'hide-options' : '')}>
               
                <p className='player-2 '>{openKey === 'queixos' || openKey === 'immersive' ? t('openW') : t('openC') }<span className="blink">?</span></p>
                <div className='case-study-options'>
                  <button onClick={ handleProjectClick} className=''>{t('yes')}</button>
                  <button className=''>NO</button>
                </div>
          </div>
          <div className="modal-container retro-wrapper">
            {showImage &&
              imageParts.map( (src,i) => (
                
                <img 
                loading='lazy'
                key={i} 
                src={src} 
                alt={t(`modal.${openKey}.title`)} 
                className="modal-image tv-image" />
              ) )
            }
          </div>
        </div>
      </div>
    )
  }