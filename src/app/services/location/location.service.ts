import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherService } from '../weatherService/weather.service';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://api.ipify.org?format=json';
  private error: boolean = false;
  constructor(private http: HttpClient, private weatherService: WeatherService) {}

  getLocation(){
    return this.http.get('https://ipinfo.io?token=a15a5122521c8e');
  }
  searchCities(query: string): Observable<any>{
    return this.weatherService.searchCities(query);
   
  }
}
