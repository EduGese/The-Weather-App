import { Component, OnInit, ViewChild } from '@angular/core';
import { DailyData } from 'src/app/models/dailyData';
import { HourlyData } from 'src/app/models/hourlyData';
import { LocationSearch } from 'src/app/models/locationSearch';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';
import { HourlyForecastComponent } from '../hourly-forecast/hourly-forecast/hourly-forecast.component';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  searchResults: any[] = [];
  forecastHourlyData: any[] = [];
  forecastDailyData: any[] = [];
  currentCity: string = '';
  city: string = '';
  state: string = '';
  country: string = '';
  @ViewChild(HourlyForecastComponent) hourlyForecastComponenthijo!: HourlyForecastComponent;

  constructor(
    private ipService: LocationService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getWeatherCurrentLocation();
  }
  searchCities(word: string) {
    console.log('letras:', word);
    if (word) {
      this.ipService.findCities(word).subscribe(
        (data: LocationSearch[]) => {
          this.searchResults = data;
        },
        (error) => {
          console.error('Error al buscar ciudades:', error);
        }
      );
    } else {
      this.searchResults = [];
    }
  }
  selectCity(selectedLocation: any) {
    this.city = selectedLocation.city;
    this.state = selectedLocation.state;
    this.country = selectedLocation.country;
    this.currentCity = '';
    this.searchResults = [];
    this.getHourlyWeather(selectedLocation.lat, selectedLocation.lon);
    this.getDailyWeather(selectedLocation.lat, selectedLocation.lon);
  }
  getHourlyWeather(lat: number, lon: number) {
    const now = new Date().toISOString();
    const futureTime = new Date();
    futureTime.setHours(futureTime.getHours() + 24);
    const futureTimeISO = futureTime.toISOString();

    this.weatherService.getOpenMeteoWeatherHourlyForecast(lat, lon).subscribe(
      (data: HourlyData) => {
        this.forecastHourlyData = data.hourly.time
          .map((time: string, index: number) => ({
            time: time,
            isDay: data.hourly.is_day[index],
            temperature: data.hourly.temperature_2m[index],
            weathercode: data.hourly.weathercode[index],
            windspeed: data.hourly.windspeed_10m[index],
            winddirection: data.hourly.winddirection_10m[index],
            precipitation: data.hourly.precipitation_probability[index],
          }))
          .filter(
            (data: any) => data.time >= now && data.time <= futureTimeISO
          );
      },
      (error) => {
        console.error('Error al obtener los datos del tiempo:', error);
      }
    );
  }

  getDailyWeather(lat: number, lon: number) {
    this.weatherService.getOpenMeteoWeatherDailyForecast(lat, lon).subscribe(
      (data: DailyData) => {
        this.forecastDailyData = data.daily.time.map(
          (daily: string, index: number) => ({
            daily: daily,
            time: data.daily.time[index],
            weathercode: data.daily.weathercode[index],
            temperatureMax: data.daily.temperature_2m_max[index],
            temperatureMin: data.daily.temperature_2m_min[index],
            windSpeed: data.daily.windspeed_10m_max[index],
            winddirection: data.daily.winddirection_10m_dominant[index],
            sunrise: data.daily.sunrise[index],
            sunset: data.daily.sunset[index],
          })
        );
      },
      (error) => {
        console.error('Error al obtener los datos del tiempo:', error);
      }
    );
  }
  getWeatherCurrentLocation() {
    this.ipService
      .getLocation()
      .then((data) => {
        this.getHourlyWeather(data.lat, data.lng);
        this.getDailyWeather(data.lat, data.lng);
        this.ipService.getCity().subscribe(
          (city: string) => {
            this.currentCity = city;
          },
          (error) => {
            throw new Error(error);
          }
        );
      })
      .catch(() => {
        alert(
          'Location permission denied. App will show Madrid as current location by default'
        );
        this.getHourlyWeather(40.4165, -3.70256);
        this.getDailyWeather(40.4165, -3.70256);
        this.currentCity = 'Madrid';
      });
  }
  getIconClass(iconInfo: any) {
    let isDay = iconInfo.isDay;
    let weatherCode = iconInfo.weatherCode;
    let iconClass = '';

    console.log('isDay:', isDay);
    console.log('weathercode:', weatherCode);
    
    if (isDay == 1) {
      switch (weatherCode) {
        case 0:
          iconClass = 'bi bi-brightness-high-fill text-warning';
          break;
        case 1:
        case 2:
          iconClass = 'bi bi-cloud-sun';
          break;
        case 3:
          iconClass = 'bi bi-cloud';
          break;
        case 45:
        case 48:
          iconClass = 'bi bi-cloud-fog';
          break;
        case 51:
        case 53:
        case 55:
          iconClass = 'bi bi-cloud-drizzle';
          break;
        case 56:
        case 57:
          iconClass = 'bi bi-cloud-drizzle';
          break;
        case 61:
        case 63:
          iconClass = 'bi bi-cloud-rain';
          break;
        case 65:
          iconClass = 'bi bi-cloud-rain-heavy';
          break;
        case 66:
        case 67:
          iconClass = 'bi bi-cloud-sleet';
          break;
        case 71:
        case 73:
        case 75:
          iconClass = 'bi bi-cloud-snow';
          break;
        case 77:
          iconClass = 'bi bi-cloud-sleet';
          break;
        case 80:
        case 81:
        case 82:
          iconClass = 'bi bi-cloud-rain-heavy';
          break;
        case 85:
        case 86:
          iconClass = 'bi bi-cloud-snow-fill';
          break;
        case 95:
          iconClass = 'bi bi-lightning text-warning';
          break;
        case 96:
        case 99:
          iconClass = 'bi bi-cloud-lightning-rain';
          break;
        default:
          iconClass = 'fas fa-question-circle';
          break;
      }
    } else {
      switch (weatherCode) {
        case 0:
          iconClass = 'bi bi-moon text-warning';
          break;
        case 1:
        case 2:
          iconClass = 'bi bi-cloud';
          break;
        case 3:
          iconClass = 'bi bi-cloud-moon';
          break;
        case 45:
        case 48:
          iconClass = 'bi bi-cloud-fog';
          break;
        case 51:
        case 53:
        case 55:
          iconClass = 'bi bi-cloud-drizzle';
          break;
        case 56:
        case 57:
          iconClass = 'bi bi-cloud-drizzle';
          break;
        case 61:
        case 63:
          iconClass = 'bi bi-cloud-rain';
          break;
        case 65:
          iconClass = 'bi bi-cloud-rain-heavy';
          break;
        case 66:
        case 67:
          iconClass = 'bi bi-cloud-sleet';
          break;
        case 71:
        case 73:
        case 75:
          iconClass = 'bi bi-cloud-snow';
          break;
        case 77:
          iconClass = 'bi bi-cloud-sleet';
          break;
        case 80:
        case 81:
        case 82:
          iconClass = 'bi bi-cloud-rain-heavy';
          break;
        case 85:
        case 86:
          iconClass = 'bi bi-cloud-snow-fill';
          break;
        case 95:
          iconClass = 'bi bi-lightning';
          break;
        case 96:
        case 99:
          iconClass = 'bi bi-cloud-lightning-rain';
          break;
        default:
          iconClass = 'fas fa-question-circle';
          break;
      }
      
    }
    this.hourlyForecastComponenthijo.setIconClass(iconClass);
  }
}
