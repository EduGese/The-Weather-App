import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private forecastHourlyData = new Subject<any[]>();
  private forecastDailyData = new Subject<any[]>();
  private city = new Subject<string>();
  private error = new Subject<boolean>();
  

  constructor() {}

  getForecastHourlyData(): any {
    return this.forecastHourlyData.asObservable();
  }

  setForecastHourlyData(data: any[]): void {
    this.forecastHourlyData.next(data);
  }
  getForecastDailyData(): any {
    return this.forecastDailyData.asObservable();
  }

  setForecastDailyData(data: any[]): void {
    this.forecastDailyData.next(data);
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
