import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'frAtizx74n5pxXhxv8g0YKkak1ULmdpL'; 
  private baseUrl = 'https://dataservice.accuweather.com';

  
  private baseUrlMeteo = 'https://api.open-meteo.com';

  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/locations/v1/cities/search`, {
      params: {
        apikey: this.apiKey,
        q: city
      }
    }).pipe(
      switchMap((locations: any[]) => {
        if (locations.length > 0) {
          const cityKey = locations[0].Key;
          return this.http.get<any>(`${this.baseUrl}/forecasts/v1/daily/5day/${cityKey}`, {
            params: {
              apikey: this.apiKey,
              metric: 'true', 
              details: 'true'
            }
          });
        } else {
          throw new Error('No se encontró la ciudad especificada.');
        }
      })
    );
  }
  searchCities(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/locations/v1/cities/autocomplete`, {
      params: {
        apikey: this.apiKey,
        q: query
      }
    })
    .pipe(
      map((data: any) => {
        return data.map((city: any) => {
          return {
            LocalizedName : city.LocalizedName,
            province: city.AdministrativeArea.LocalizedName,
            country: city.Country.LocalizedName
          };
        });
      })
    )
    ;
  }

  // getWeatherHourlyForecast(city: string): Observable<any> {
  //   return this.http.get<any[]>(`${this.baseUrl}/locations/v1/cities/search`, {
  //     params: {
  //       apikey: this.apiKey,
  //       q: city
  //     }
  //   }).pipe(
  //     switchMap((locations: any[]) => {
  //       if (locations.length > 0) {
  //         const cityKey = locations[0].Key;
  //         return this.http.get<any>(`${this.baseUrl}/forecasts/v1/hourly/12hour/${cityKey}`, {
  //           params: {
  //             apikey: this.apiKey,
  //             metric: 'true', 
  //             details: 'true'
  //           }
  //         });
  //       } else {
  //         throw new Error('No se encontró la ciudad especificada.');
  //       }
  //     })
  //   );
  // }

  /*  */ 
 
  getOpenMeteoWeatherDailyForecast(lat: number, lon: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        daily : 'weathercode,temperature_2m_max,temperature_2m_min,windspeed_10m_max,winddirection_10m_dominant,sunrise,sunset',
        timezone : 'Europe/Berlin'


      }
    })
  }
  getOpenMeteoWeatherHourlyForecast(lat: number, lon: number): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrlMeteo}/v1/forecast`, {
      params:{
        latitude : lat,
        longitude : lon,
        hourly : 'temperature_2m,weathercode,windspeed_10m,winddirection_10m,is_day,precipitation_probability',
        timezone : 'Europe/Berlin'


      }
    })
  }

  //https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&timezone=Europe%2FBerlin

  
  
}
