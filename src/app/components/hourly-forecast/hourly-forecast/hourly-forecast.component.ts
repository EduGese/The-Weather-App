import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css'],
})
export class HourlyForecastComponent implements OnInit {
  forecastHourlyData: any[] = [];
  timeNow = new Date();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getForecastHourlyData().subscribe((data: any) => {
      this.forecastHourlyData = data;
      console.log('HourlyData-->'+ this.forecastHourlyData);
    });
  }

  getIconClass(iconCode: number, dayNight: number): string {
    let clase = '';
    if (dayNight === 1) {
      switch (iconCode) {
        case 0:
          clase = 'bi bi-brightness-high-fill text-warning';
          break;
        case 1:
        case 2:
          clase = 'bi bi-cloud-sun';
          break;
        case 3:
          clase = 'bi bi-cloud';
          break;
        case 45:
        case 48:
          clase = 'bi bi-cloud-fog';
          break;
        case 51:
        case 53:
        case 55:
          clase = 'bi bi-cloud-drizzle';
          break;
        case 56:
        case 57:
          clase = 'bi bi-cloud-drizzle';
          break;
        case 61:
        case 63:
          clase = 'bi bi-cloud-rain';
          break;
        case 65:
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 66:
        case 67:
          clase = 'bi bi-cloud-sleet';
          break;
        case 71:
        case 73:
        case 75:
          clase = 'bi bi-cloud-snow';
          break;
        case 77:
          clase = 'bi bi-cloud-sleet';
          break;
        case 80:
        case 81:
        case 82:
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 85:
        case 86:
          clase = 'bi bi-cloud-snow-fill';
          break;
        case 95:
          clase = 'bi bi-lightning';
          break;
        case 96:
        case 99:
          clase = 'bi bi-cloud-lightning-rain';
          break;
        default:
          clase = 'fas fa-question-circle';
          break;
      }
    } else {
      switch (iconCode) {
        case 0:
          clase = 'bi bi-moon text-warning';
          break;
        case 1:
        case 2:
          clase = 'bi bi-cloud';
          break;
        case 3:
          clase = 'bi bi-cloud-moon';
          break;
        case 45:
        case 48:
          clase = 'bi bi-cloud-fog';
          break;
        case 51:
        case 53:
        case 55:
          clase = 'bi bi-cloud-drizzle';
          break;
        case 56:
        case 57:
          clase = 'bi bi-cloud-drizzle';
          break;
        case 61:
        case 63:
          clase = 'bi bi-cloud-rain';
          break;
        case 65:
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 66:
        case 67:
          clase = 'bi bi-cloud-sleet';
          break;
        case 71:
        case 73:
        case 75:
          clase = 'bi bi-cloud-snow';
          break;
        case 77:
          clase = 'bi bi-cloud-sleet';
          break;
        case 80:
        case 81:
        case 82:
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 85:
        case 86:
          clase = 'bi bi-cloud-snow-fill';
          break;
        case 95:
          clase = 'bi bi-lightning';
          break;
        case 96:
        case 99:
          clase = 'bi bi-cloud-lightning-rain';
          break;
        default:
          clase = 'fas fa-question-circle';
          break;
      }
      
    }
    return clase;
  }
}
