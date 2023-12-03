import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiKeyGeoapify: string = environment.apiKeyGeoapify ;
  private baseUrlGeoapify = environment.baseUrlGeoapify;
  private ipInfoToken = environment.ipInfoToken;
  private ipInfoURL = environment.ipInfoURL;


city: string = '';

  constructor(private http: HttpClient) {}

  getCity(): Observable<string>{
    return this.http.get(this.ipInfoURL, {
      params:{
        token : this.ipInfoToken
      }
    })
    .pipe(
      map((response:any)=>response.city)
    );
  }
  getLocation(): Promise<any>{
    return new Promise((resolve, reject) => {
      
      navigator.geolocation.getCurrentPosition(resp => {
              resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
          },
          err => {
              reject(err);
        });
  });
  }

  findCities(query: string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrlGeoapify}/v1/geocode/autocomplete`, {
      params:{
        apiKey : this.apiKeyGeoapify,
        text: query,
        limit: 10,
        type : 'city',
        format : 'json'
      }
    })
  }
}
