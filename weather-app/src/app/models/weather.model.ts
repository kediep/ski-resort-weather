export interface WeatherData {
  forecast: Forecast[]
  basicInfo: BasicInfo
}

export interface Forecast {
  time: string
  summary: string
  windSpeed: string
  windDirection: string
  rain: string
  maxTemp: string
  minTemp: any
  windChill: string
  humidity: string
  freezeLevel: string
}

export interface BasicInfo {
  region: string
  name: string
  url: string
  topLiftElevation: string
  midLiftElevation: string
  botLiftElevation: string
  lat: string
  lon: string
}