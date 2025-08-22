
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export default function NotFound(){
  const navigate = useNavigate()
  const {t} = useTranslation()
    return(
        <>
            <div className="video-container">
            <video
  className="video-bg"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/bg-lost.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div className="content-404">
      <a onClick={() => navigate(-1)}>
        <h1 className='player-2 center'>404<br></br>{t('notFound')}</h1>
        <div className='go-back-404'>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M20 11v2H8v2H6v-2H4v-2h2V9h2v2h12zM10 7H8v2h2V7zm0 0h2V5h-2v2zm0 10H8v-2h2v2zm0 0h2v2h-2v-2z" fill="currentColor"/> </svg>
          <p className='player-2'>{t('notFoundBtn')}</p>
        </div>
      </a>
      </div>
    </div>
        </>
          
    )
}