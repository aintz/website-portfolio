import { useState, useEffect} from "react"
import { useTranslation } from "react-i18next"
import { weatherCodeToIcon } from "./mobile/weatherCodes"

export default function Weather() {
  const { i18n } = useTranslation()

  const latitude = 41.38   // Barcelona
  const longitude = 2.17

  type weatherSession = {temperature: string ,weathercode:number}

  const weatherCheck = sessionStorage.getItem('weather')
  
  type weatherSessionT = {temperature: string ,weathercode:number}
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
        //setWeatherError(weatherError);
        console.log('weather',error)
      }
      
    }
    getWeather();
  }, [i18n.language]);

  const weatherInfo =  weather 
  ? weatherCodeToIcon[weather.weathercode] || { labelen: "", labeles: "", icon: "", sky:"" }
  : { labelen: "", labeles: "", icon: "", sky:"" }

  
  return (
    <div className="weather-wrapper">
      
      {weatherInfo.icon ?
      <div className="weather-content">
        <p className="player-2 w-label ">Barcelona</p>
        <img style={{ display: `${weatherInfo.icon} block` }} className="w-icon" src={weatherInfo.icon}></img>
        <p className="player-2 w-label">{weather?.temperature}º</p>
      </div>
      : ''}
    </div>
  )
}
