import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherService } from '../weatherService/weather.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiKey_Geoapify: string = '12a080b4fc8b4e86918b766e772a2813';
  private baseUrlGeo = 'https://api.geoapify.com';
  
  constructor(private http: HttpClient) {}

  getLocation(){
    return this.http.get('https://ipinfo.io?token=a15a5122521c8e');
  }

  findCities(query: string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrlGeo}/v1/geocode/autocomplete`, {
      params:{
        apiKey : this.apiKey_Geoapify,
        text: query,
        limit: 10,
        type : 'city',
        format : 'json'
      }
    })
  }
}
