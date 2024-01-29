import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css'],
})
export class WeekForecastComponent {
  @Input() forecastDailyData: any[] = [];
 

  constructor() {}

}
