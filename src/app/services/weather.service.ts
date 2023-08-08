// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'frAtizx74n5pxXhxv8g0YKkak1ULmdpL'; // Reemplaza 'TU_API_KEY' con tu clave de API de AccuWeather
  private baseUrl = 'http://dataservice.accuweather.com';

  constructor(private http: HttpClient) { }

  getWeatherForecast(city: string): Observable<any> {
    // Realiza una solicitud GET para obtener el ID de la ciudad deseada
    return this.http.get<any[]>(`${this.baseUrl}/locations/v1/cities/search`, {
      params: {
        apikey: this.apiKey,
        q: city
      }
    }).pipe(
      // Una vez que se obtiene el ID de la ciudad, realiza una nueva solicitud para obtener el pronóstico del tiempo
      // para los siguientes 5 días
      switchMap((locations: any[]) => {
        if (locations.length > 0) {
          const cityKey = locations[0].Key;
          return this.http.get<any>(`${this.baseUrl}/forecasts/v1/daily/5day/${cityKey}`, {
            params: {
              apikey: this.apiKey,
              metric: 'true', // Para obtener la temperatura en unidades métricas (Celsius)
              details: 'true'
            }
          });
        } else {
          throw new Error('No se encontró la ciudad especificada.');
        }
      })
    );
  }
}
