import  wsun from '../../assets/wsun.png'
import  wmcloud from '../../assets/wmcloud.png'
import  wcloud from '../../assets/wcloud.png'
import  wrain from '../../assets/wrain.png'
import  wSunSky from '../../assets/wsunsky2.jpg'
import  wRainSky from '../../assets/wrainsky.jpg'
import  wCloudSky from '../../assets/wcloudsky.jpg'

export type WeatherCodeToIconType = {
  labelen: string, 
  labeles: string,
  icon:string,
  sky:string
}

export const weatherCodeToIcon:Record<number, WeatherCodeToIconType> = {
  0: { labelen: "Clear sky", labeles: "Cielo despejado", icon: wsun, sky: wSunSky },
  1: { labelen: "Mainly clear", labeles: "Mayormente despejado", icon: wmcloud, sky: wCloudSky },
  2: { labelen: "Partly cloudy", labeles: "Parcialmente nublado", icon: wmcloud, sky: wCloudSky },
  3: { labelen: "Overcast", labeles: "Nublado", icon: wcloud, sky: wCloudSky },
  45: { labelen: "Fog", labeles: "Niebla", icon: wcloud, sky: wCloudSky },
  48: { labelen: "Depositing rime fog", labeles: "Niebla con escarcha", icon: wcloud, sky: wCloudSky },
  51: { labelen: "Light drizzle", labeles: "Llovizna ligera", icon: wmcloud, sky: wCloudSky },
  53: { labelen: "Moderate drizzle", labeles: "Llovizna moderada", icon: wrain, sky: wRainSky },
  55: { labelen: "Dense drizzle", labeles: "Llovizna densa", icon: wrain, sky: wRainSky },
  56: { labelen: "Light freezing drizzle", labeles: "Llovizna helada ligera", icon: wrain, sky: wRainSky },
  57: { labelen: "Dense freezing drizzle", labeles: "Llovizna helada densa", icon: wrain, sky: wRainSky },
  61: { labelen: "Slight rain", labeles: "Lluvia ligera", icon: wrain, sky: wRainSky },
  63: { labelen: "Moderate rain", labeles: "Lluvia moderada", icon: wrain, sky: wRainSky },
  65: { labelen: "Heavy rain", labeles: "Lluvia intensa", icon: wrain, sky: wRainSky },
  66: { labelen: "Light freezing rain", labeles: "Lluvia helada ligera", icon: wrain, sky: wRainSky },
  67: { labelen: "Heavy freezing rain", labeles: "Lluvia helada intensa", icon: wrain, sky: wRainSky },
  71: { labelen: "Slight snowfall", labeles: "Nevada ligera", icon: wrain, sky: wRainSky },
  73: { labelen: "Moderate snowfall", labeles: "Nevada moderada", icon: "❄️", sky: wRainSky },
  75: { labelen: "Heavy snowfall", labeles: "Nevada intensa", icon: "❄️❄️", sky: wRainSky },
  77: { labelen: "Snow grains", labeles: "Granizo pequeño", icon: "🌨️", sky: wRainSky },
  80: { labelen: "Slight rain showers", labeles: "Chubascos ligeros", icon: wrain, sky: wRainSky },
  81: { labelen: "Moderate rain showers", labeles: "Chubascos moderados", icon: wrain, sky: wRainSky },
  82: { labelen: "Violent rain showers", labeles: "Chubascos intensos", icon: wrain, sky: wRainSky },
  85: { labelen: "Slight snow showers", labeles: "Chubascos de nieve ligeros", icon: wrain, sky: wRainSky },
  86: { labelen: "Heavy snow showers", labeles: "Chubascos de nieve intensos", icon: wrain, sky: wRainSky },
  95: { labelen: "Thunderstorm", labeles: "Tormenta eléctrica", icon: wrain, sky: wRainSky },
  96: { labelen: "Thunderstorm with slight hail", labeles: "Tormenta con granizo ligero", icon: wrain, sky: wRainSky },
  99: { labelen: "Thunderstorm with heavy hail", labeles: "Tormenta con granizo intenso", icon: wrain, sky: wRainSky },
}
