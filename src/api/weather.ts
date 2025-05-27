import { API_CONFIG } from "./config";
import type { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./types";

class WeatherAPI {
  private createURL(
    endpoint:string ,
    params: Record<string, string | number>)
    {
      const searchParams = new URLSearchParams({appid:API_CONFIG.API_KEY,...params,});
      return `${endpoint}?${searchParams.toString()}`;
  }


  private async fetchdata<T>(url:string):Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json()  ;
  }


  async getCurrentWeather({lat,lon}:Coordinates):Promise<WeatherData>{
    const url = this.createURL(`${API_CONFIG.BASE_URL}/weather`, {
      lat:lat.toString(),
      lon:lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units, 
  })
    return this.fetchdata<WeatherData>(url);  
  }


  async getForecast({lat,lon}:Coordinates):Promise<ForecastData>{
    const url = this.createURL(`${API_CONFIG.BASE_URL}/forecast`, {
      lat:lat.toString(),
      lon:lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units, 
  })
    return this.fetchdata<ForecastData>(url);  
  }
    async reverseGeocode({lat,lon}:Coordinates):Promise<GeocodingResponse[]>{
    const url = this.createURL(`${API_CONFIG.BASE_URL}/reverse`, {
      lat:lat.toString(),
      lon:lon.toString(),
      limit: 1,
  })
    return this.fetchdata<GeocodingResponse[]>(url);  
  }
}


export const weatehrAPI = new WeatherAPI();