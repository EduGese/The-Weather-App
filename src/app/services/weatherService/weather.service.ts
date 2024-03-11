import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyData } from 'src/app/models/dailyData';
import { HourlyData } from 'src/app/models/hourlyData';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
  private baseUrlMeteo = 'https://api.open-meteo.com';

  constructor(private http: HttpClient) { }

  getOpenMeteoWeatherDailyForecast(lat: number, lon: number): Observable<DailyData> {
    return this.http.get<DailyData>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        daily : 'weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant,sunrise,sunset',
        timezone : 'Europe/Berlin'


      }
    })
  }
  getOpenMeteoWeatherHourlyForecast(lat: number, lon: number): Observable<HourlyData> {
    return this.http.get<HourlyData>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        hourly : 'temperature_2m,weathercode,windspeed_10m,winddirection_10m,is_day,precipitation_probability',
        timezone : 'Europe/Berlin'
      }
    })
  }

  

  
  
}
