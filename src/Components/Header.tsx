import ChangeScreenMode from "./ChangeScreenMode"
import MusicPlayer from "./MusicPlayer"
import ChangeLanguage from "./ChangeLanguage"
import HeaderDate from "./HeaderDate"
import HeaderTime from "./HeaderTime"
import  Mail  from '../assets/mail.svg?react';
import  click  from '../assets/sounds/simple-click.mp3'
import Weather from "./WeatherDesktop"


export default function Header() {
    const clickAudio = new Audio(click)
    /*
    function handleClick(type){
        clickAudio.play()
        if(type === 'gh'){
            window.open('https://github.com/aintz')
        }else{
            const email = "aintzz.im@gmail.com";
            window.location.href = `mailto:${email}`;  

        }
    }*/
    
    function handleClick(){
        clickAudio.play()
        const email = "aintzz.im@gmail.com"
        window.location.href = `mailto:${email}`
    }

    return(
        <header className="header-background">
            <div className="header-logo">
                <h1>Aintzz</h1>
            </div>
            <div className="header-options">
                <Weather></Weather>
                <button onClick={handleClick}><Mail/></button>
                <ChangeScreenMode></ChangeScreenMode>
                <MusicPlayer></MusicPlayer>
                <ChangeLanguage></ChangeLanguage>
                <HeaderDate></HeaderDate>
                <HeaderTime></HeaderTime>
                
            </div>
        </header>
    )
}