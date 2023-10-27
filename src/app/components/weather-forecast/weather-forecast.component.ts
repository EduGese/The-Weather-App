import { Component, OnInit } from '@angular/core';
import { FakeWeatherService } from 'src/app/services/fakeService/fake-weather.service';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  city: string = '';
  forecastData: any[] = [];
  currentDate: Date = new Date();
  searchQuery: string = '';
  searchResults: any[] = [];
  

  constructor(
    private weatherService: WeatherService,
    private fakeWeatherService: FakeWeatherService,
    private ipService: LocationService
  ) {}

  ngOnInit(): void {
    this.ipService.getLocation().subscribe(
      (data: any) => {
        this.city = data.city;
        this.weatherService.getWeatherForecast(this.city).subscribe(
          (data: any) => {
            this.forecastData = data.DailyForecasts;
          },
          (error) => {
            console.error('Error al obtener los datos del tiempo:', error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener la información de ubicación:', error);
      }
    );
  }

  getWeatherIconClass(iconCode: number): string {
    switch (iconCode) {
      case 1:
      case 2:
      case 3:
        return 'bi bi-brightness-high-fill text-warning';
      case 4:
        return 'bi bi-cloud-sun';
      case 5:
        return 'bi bi-brightness-low';
      case 6:
        return 'bi bi-cloud-sun-fill';
      case 7:
      case 8:
        return 'bi bi-cloudy';
      case 11:
        return 'bi bi-cloud-fog';
      case 12:
        return 'bi bi-cloud-rain';
      case 13:
      case 14:
        return 'fas fa-cloud-sun-rain';
      case 15:
      case 16:
      case 17:
        return 'bi bi-cloud-lightning-rain-fill';
      case 18:
        return 'bi bi-cloud-rain-heavy';
      case 19:
      case 20:
      case 21:
        return 'bi bi-cloud-hail';
      case 22:
      case 23:
        return 'bi bi-cloud-snow';
      case 24:
        return 'bi bi-snow2';
      case 25:
      case 26:
      case 29:
        return 'bi bi-cloud-sleet';
      case 30:
        return 'bi bi-thermometer-sun';
      case 31:
        return 'bi bi-thermometer-snow';
      case 32:
        return 'bi bi-wind';
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
        return 'fas fa-question-circle';
    }
  }
  searchCities() {
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
      }
    );
  }

  /* */
  loadFakeWeatherData() {
    const fakeData = this.fakeWeatherService.getFakeWeatherData();
    this.forecastData = fakeData.forecastData;
  }
}
