import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/dataService/data.service';
import { FakeWeatherService } from 'src/app/services/fakeService/fake-weather.service';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css'],
})
export class WeekForecastComponent implements OnInit {
  forecastDailyData: any[] = [];
  @Input() currentDate: Date = new Date();
  error: boolean = false;
  phrase: string = '';
  windDirection: string = '';
  windGrades: number = 0;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit(): void {
    this.dataService.getForecastDailyData().subscribe((data: any)=>{
      this.forecastDailyData = data;
    })
  }

  getIconClass(iconCode: number): string {
    let clase: string = '';
    this.phrase = ''
   
      switch (iconCode) {
        case 0:
          clase = 'bi bi-brightness-high-fill text-warning';
          this.phrase = 'Mainly clear';
          break;
        case 1:
          this.phrase = 'Partly cloudy';
          clase = 'bi bi-cloud-sun';
          break;
        case 2:
          this.phrase = 'Partly cloudy';
          clase = 'bi bi-cloud-sun';
          break;
        case 3:
          this.phrase = 'Overcast';
          clase = 'bi bi-cloud';
          break;
        case 45:
          this.phrase = 'Fog';
          clase = 'bi bi-cloud-fog';
          break;
        case 48:
          this.phrase = 'Depositing rime fog';
          clase = 'bi bi-cloud-fog';
          break;
        case 51:
          this.phrase = 'Ligth drizzle';
          clase = 'bi bi-cloud-drizzle';
          break;
        case 53:
          this.phrase = 'Moderate drizzle';
          clase = 'bi bi-cloud-drizzle';
          break;
        case 55:
          this.phrase = 'Dense drizzle';
          clase = 'bi bi-cloud-drizzle';
          break;
        case 56:
          this.phrase = 'Ligth drizzle';
          clase = 'bi bi-cloud-drizzle';
          break;
        case 57:
          this.phrase = 'Dense drizzle';
          clase = 'bi bi-cloud-drizzle';
          break;
        case 61:
          this.phrase = 'Slight rain';
          clase = 'bi bi-cloud-rain';
          break;
        case 63:
          this.phrase = 'Moderate rain';
          clase = 'bi bi-cloud-rain';
          break;
        case 65:
          this.phrase = 'Heavy rain'
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 66:
          this.phrase = 'Light freezing Rain';
          clase = 'bi bi-cloud-sleet';
          break;
        case 67:
          this.phrase = 'Heavy freezing Rain';
          clase = 'bi bi-cloud-sleet';
          break;
        case 71:
          this.phrase = 'Slight snow';
          clase = 'bi bi-cloud-snow';
          break;
        case 73:
          this.phrase = 'Moderate snow';
          clase = 'bi bi-cloud-snow';
          break;
        case 75:
          this.phrase = 'Heavy snow';
          clase = 'bi bi-cloud-snow';
          break;
        case 77:
          this.phrase = 'Snow grains';
          clase = 'bi bi-cloud-sleet';
          break;
        case 80:
          this.phrase = 'Slight showers';
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 81:
          this.phrase = 'Moderate showers';
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 82:
          this.phrase = 'Violent showers';
          clase = 'bi bi-cloud-rain-heavy';
          break;
        case 85:
          this.phrase = 'Slight snow showers';
          clase = 'bi bi-cloud-snow-fill';
          break;
        case 86:
          this.phrase = 'Heavy snow showers';
          clase = 'bi bi-cloud-snow-fill';
          break;
        case 95:
          this.phrase = 'Thunderstorm';
          clase = 'bi bi-lightning text-warning';
          break;
        case 96:
          this.phrase = 'Thunderstorm with hail';
          clase = 'bi bi-cloud-lightning-rain';
          break;
        case 99:
          this.phrase = 'Thunderstorm with hail';
          clase = 'bi bi-cloud-lightning-rain';
          break;
        default:
          clase = 'fas fa-question-circle';
          break;
      }
    return clase;
  }


}
