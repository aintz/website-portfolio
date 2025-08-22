import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { weatherCodeToIcon } from "./weatherCodes"


export default function Weather() {
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.language

  const latitude = 41.38   // Barcelona
  const longitude = 2.17

  type weatherSessionT = {temperature: string ,weathercode:number}

  const weatherCheck = sessionStorage.getItem('weather')
  
  const weatherSession:weatherSessionT = weatherCheck
    ? JSON.parse(weatherCheck)
    : {temperature: '',weathercode: 0}


  const [weather, setWeather] = useState(weatherSession)


  //const [weatherError, setWeatherError] = useState()

  useEffect(() => {
    if(weather.temperature != '' ) return

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    async function getWeather() {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const result = await response.json();
        const weatherData = {
          temperature: result.current_weather.temperature,
          weathercode: result.current_weather.weathercode,
        };
        setWeather(weatherData)
        sessionStorage.setItem('weather', JSON.stringify(weatherData));
      } catch (error) {
        console.log('weather',error)
        //setWeatherError(error);
      }
      
    }
    getWeather();
  }, [i18n.language]);

  const weatherInfo =  weather 
  ? weatherCodeToIcon[weather.weathercode] || { labelen: "", labeles: "", icon: "", sky: "" }
  : { labelen: "", labeles: "", icon: "", sky: ""  }

  
  return (
    <div className="weather-wrapper">
      
      {weatherInfo.icon ?
      <div className="weather-bg" style={{backgroundImage:`url(${weatherInfo.sky})`}}>
        <p className="player-2 w-label stroke">Barcelona</p>
        <p className="player-2 w-temp stroke"><img style={{ display: `${weatherInfo.icon} block` }} className="w-icon" src={weatherInfo.icon}></img>{weather?.temperature}º</p>
        <p className="player-2 w-label stroke">{currentLanguage === 'en' ? weatherInfo.labelen : weatherInfo.labeles}</p>
      </div>
      : ''}
    <p className="m-app-title stroke">{t('weather')}</p>
    </div>
  )
}
