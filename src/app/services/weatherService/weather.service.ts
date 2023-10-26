import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'frAtizx74n5pxXhxv8g0YKkak1ULmdpL'; 
  private baseUrl = 'http://dataservice.accuweather.com';

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
  
}
