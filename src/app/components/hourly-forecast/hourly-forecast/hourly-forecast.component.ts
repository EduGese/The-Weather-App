import { Component, EventEmitter, Input,  Output } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css'],
})
export class HourlyForecastComponent {
  @Input() forecastHourlyData: any[] = [];
  @Output() codesEvent = new EventEmitter<any>();
  timeNow = new Date();
  iconClass: string = '';
 
  constructor() {}
 
  setIconClass(iconClass: string) {
    this.iconClass = iconClass;
  }
  getIconClass(weatherCode: number, isDay: number){
    const iconInfo = {
      weatherCode: weatherCode,
      isDay: isDay
    }
     this.codesEvent.emit(iconInfo);
     return this.iconClass;
  }
}
