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
  constructor(private http: HttpClient) {}

  getLocation(){
    return this.http.get(this.ipInfoURL, {
      params:{
        token : this.ipInfoToken
      }
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
