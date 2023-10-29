import { Component, OnInit, Input } from '@angular/core';
import { FakeWeatherService } from 'src/app/services/fakeService/fake-weather.service';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.css']
})
export class WeekForecastComponent implements OnInit {
  //@Input ()city: string = '';
  @Input ()forecastData: any[] = [];
  @Input ()currentDate: Date = new Date();
 // @Input ()searchQuery: string = '';
 // @Input ()searchResults: any[] = [];
  @Input ()error: boolean = false;
  
  constructor(
   
  ) {}
  
  ngOnInit(): void {
   
  }

  getWeatherIconClass(iconCode: number): string {
    let clase ='';
    switch (iconCode) {
      case 1:
      case 2:
      case 3:
        clase = 'bi bi-brightness-high-fill text-warning';
        break
      case 4:
        clase = 'bi bi-cloud-sun';
        break
      case 5:
        clase = 'bi bi-brightness-low';
        break
      case 6:
        clase = 'bi bi-cloud-sun-fill';
        break
      case 7:
      case 8:
        clase = 'bi bi-cloudy';
        break
      case 11:
        clase = 'bi bi-cloud-fog';
        break
      case 12:
        clase = 'bi bi-cloud-rain';
        break
      case 13:
      case 14:
        clase = 'fas fa-cloud-sun-rain';
        break
      case 15:
      case 16:
      case 17:
        clase = 'bi bi-cloud-lightning-rain-fill';
        break
      case 18:
        clase = 'bi bi-cloud-rain-heavy';
        break
      case 19:
      case 20:
      case 21:
        clase = 'bi bi-cloud-hail';
        break
      case 22:
      case 23:
        clase = 'bi bi-cloud-snow';
        break
      case 24:
        clase = 'bi bi-snow2';
        break
      case 25:
      case 26:
      case 29:
        clase = 'bi bi-cloud-sleet';
        break
      case 30:
        clase = 'bi bi-thermometer-sun';
        break
      case 31:
        clase = 'bi bi-thermometer-snow';
        break
      case 32:
        clase = 'bi bi-wind';
        break
      /* case 33:
        return 'fas fa-moon'; 
      case 34:
        return 'fas fa-sun'; 
      case 35:
        return 'fas fa-cloud-hail';
      case 36:
        return 'fas fa-thermometer';
      case 37:
        return 'fas fa-bolt';
      case 38:
        return 'fas fa-bolt';
      case 39:
        return 'fas fa-cloud-showers-heavy';
      case 40:
        return 'fas fa-cloud-rain';
      case 41:
        return 'fas fa-snowflake';
      case 42:
        return 'fas fa-cloud-snow'; 
      case 43:
        return 'fas fa-snowflake';
      case 44:
        return 'fas fa-cloud';*/
      default:
        clase = 'fas fa-question-circle';
        break
    }
    return clase;
  }

 /* searchCities() {
    if (this.searchQuery) {
      this.weatherService.searchCities(this.searchQuery).subscribe(
        (data: any) => {
          this.searchResults = data;
          this.searchResults.unshift();
        },
        (error) => {
          console.error('Error al buscar ciudades:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
  selectCity(city: any) {
    this.searchQuery = city.LocalizedName;
    this.city = city.LocalizedName;
    this.searchResults = [];
    this.weatherService.getWeatherForecast(this.searchQuery).subscribe(
      (data: any) => {
        this.forecastData = data.DailyForecasts;
      },
      (error) => {
        console.error('Error al obtener los datos del tiempo:', error);
        this.error = true;
      }
    );
  }
*/
}
