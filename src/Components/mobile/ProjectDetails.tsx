import  farmingFriends  from '../../assets/farming-friends.jpg'
import  ageVerification  from '../../assets/age-verification.jpg'
import  back  from '../../assets/p-arrow-left.png'
import  arrow  from '../../assets/active.png'
import { useState, useEffect, useRef} from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function ProjectDetails({title}:{title:string}){
    const navigate = useNavigate()
    const [showImage, setShowImage] = useState<boolean>(false)
    const {t} = useTranslation()

    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const buttons = t('modalButtons').split(',')
    const [arrowTop, setArrowTop] = useState<number | null>(null)
  
    useEffect(() => {
        if (buttonsRef.current && buttonsRef.current[activeIndex]) {
        const button = buttonsRef.current[activeIndex]
        setArrowTop(button.offsetTop + button.offsetHeight / 2 -9)
        }
    }, [activeIndex]);


    function handleProjectClick(title:string) {
    
        if( title === 'queixos'){
          window.open('https://queixosbrigantia.es/')
        
        }else if( title === 'immersive'){
          window.open('https://www.immersiveplanet.com/')
        
        }else{
          setShowImage(true)
        }  
      }
    
      function goBack(){
        navigate(-1)
      }

    return(
        <div className="mobile-project-wrapper">
          <div className="crt-overlay"></div>
          <div className="window-header">
            
            <button onClick={goBack} className="close-button-wrapper">
              <img className="close-button pdl-1 pdr-1" src={back} alt="Back" />
            </button>
            <p className="window-name pdr-1">{t(`modal.${title}.title`)}</p>
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
                    onClick={() => {setActiveIndex(i);}}
                    className={activeIndex === i ? 'active' : ''}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className='modal-menu-container'>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 0 ? 'active' : '')}>{t(`modal.${title}.description`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 1 ? 'active' : '')}>{t(`modal.${title}.role`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 2 ? 'active' : '')}>{t(`modal.${title}.highlights`)}</p>
              <p className={'baloo-chettan-2 modal-data ' + (activeIndex === 3 ? 'active' : '')}>{t(`modal.${title}.tools`)}</p>
            </div>
            </div>
            
          </div>
          
          <div className={'open-case ' + ( (title === 'farming' || title === 'age') && showImage ? 'hide-options' : '')}>
               
                <p className='player-2 '>{title === 'queixos' || title === 'immersive' ? t('openW') : t('openC') }<span className="blink">?</span></p>
                <div className='case-study-options'>
                  <button onClick={ () => {handleProjectClick (title)}} className=''>{t('yes')}</button>
                  <button className=''>NO</button>
                </div>
          </div>
          <div className={"modal-container retro-wrapper" + showImage}>
            {showImage &&
            <>
              
              <img src={title === 'farming' ? farmingFriends : ageVerification} alt={t(`modal.${title}.title`)} className="modal-image tv-image" />
              
            </>
            }
          </div>

      </div>
    )
}