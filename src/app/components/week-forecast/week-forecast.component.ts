import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css'],
})
export class WeekForecastComponent implements OnInit {
  forecastDailyData: any[] = [];
 

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getForecastDailyData().subscribe((data: any)=>{
      this.forecastDailyData = data;
    })
  }

  


}
