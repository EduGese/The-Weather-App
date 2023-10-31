import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private forecastData = new Subject<any[]>();
  private city = new Subject<string>();
  private error = new Subject<boolean>();

  constructor() {}

  getForecastData(): any {
    return this.forecastData.asObservable();
  }

  setForecastData(data: any[]): void {
    this.forecastData.next(data);
  }

  
  getCity(): any {
    return this.city.asObservable();
  }

  setCity(value: string) {
    this.city.next(value);
    
  }
  getError(): any {
    return this.error.asObservable();
  }

  setError(error: boolean) {
    this.error.next(error);
    
  }
}
