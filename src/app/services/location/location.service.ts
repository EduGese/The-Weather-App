import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://api.ipify.org?format=json';
  constructor(private http: HttpClient) {}

  getLocation(){
    return this.http.get('https://ipinfo.io?token=a15a5122521c8e');
  }
}
