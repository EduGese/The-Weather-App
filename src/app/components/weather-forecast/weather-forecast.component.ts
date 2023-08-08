// weatherForecast.component.ts

import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  city: string='';
  forecastData: any[]= []; // Esta variable almacenará los datos del tiempo para los siguientes 7 días
  currentDate: Date = new Date();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // Inicializa la variable city con una ciudad por defecto (por ejemplo, Madrid)
    this.city = 'Madrid';
    // Obtiene los datos del tiempo para la ciudad por defecto
    this.getWeatherForecast();
  }

  getWeatherForecast() {
    // Utiliza el servicio para hacer la solicitud a la API de AccuWeather
    this.weatherService.getWeatherForecast(this.city).subscribe(
      (data: any) => {
        // Procesa los datos recibidos y guárdalos en la variable forecastData
        this.forecastData = data.DailyForecasts;
      },
      (error) => {
        console.error('Error al obtener los datos del tiempo:', error);
      }
    );
  }
  changeCity(city: string) {
    this.city = city;
    this.getWeatherForecast();
  }
  getMainContainerId(): string {
    // const currentHour = new Date().getHours();
    // if (currentHour >= 7 && currentHour < 21) {
    //   return 'MainContainerDay';
    // } else {
    //   return 'MainContainerNight';
    // }
    if (this.isSunnyWeather()) {
      return 'MainContainerSunny';
    }else {
      if (this.isNightCloudyWeather()) {
        return 'MainContainerNigthCloudy';
      } else {
        return 'MainContainerNight';
      }
         
    }
  }
  isSunnyWeather(): boolean {
    if (!this.forecastData || this.forecastData.length === 0) {
      return false;
    }

    // Suponemos que el estado del tiempo "sunny" está representado por el valor "Sunny" en forecastData
    const todayForecast = this.forecastData[0];
    return todayForecast.Day.IconPhrase === 'Sunny';
  }
  isNightCloudyWeather(): boolean {
    if (!this.forecastData || this.forecastData.length === 0) {
      return false;
    }

    // Suponemos que el estado del tiempo "sunny" está representado por el valor "Sunny" en forecastData
    const todayForecast = this.forecastData[0];
    return todayForecast.Day.IconPhrase === 'Intermittent clouds';
  }
  getWeatherIconClass(iconCode: number): string {
    // Mapeo de códigos de iconos a clases de iconos de FontAwesome
    switch (iconCode) {
      case 1:
        return 'fas fa-sun'; // Icono de sol
      case 2:
        return 'fas fa-cloud-sun'; // Icono de nube y sol
      case 3:
        return 'fas fa-cloud'; // Icono de nube
      case 4:
        return 'fas fa-cloud-sun-rain'; // Icono de nube, sol y lluvia
      case 5:
        return 'fas fa-cloud-rain'; // Icono de nube y lluvia
      case 6:
        return 'fas fa-cloud-showers-heavy'; // Icono de nube y fuertes lluvias
      case 7:
        return 'fas fa-snowflake'; // Icono de copo de nieve
      case 8:
        return 'fas fa-cloud-sleet'; // Icono de nube y aguanieve
      case 9:
        return 'fas fa-wind'; // Icono de viento
      case 10:
        return 'fas fa-snowflake'; // Icono de nieve
      case 11:
        return 'fas fa-cloud-showers-heavy'; // Icono de nube y fuertes lluvias
      case 12:
        return 'fas fa-cloud'; // Icono de nube
      case 13:
        return 'fas fa-cloud-moon'; // Icono de nube y luna
      case 14:
        return 'fas fa-cloud-snow'; // Icono de nube y nieve
      case 15:
        return 'fas fa-snowflake'; // Icono de nieve
      case 16:
        return 'fas fa-snowflake'; // Icono de nieve
      case 17:
        return 'fas fa-hail'; // Icono de granizo
      case 18:
        return 'fas fa-sleet'; // Icono de aguanieve
      case 19:
        return 'fas fa-dust'; // Icono de polvo
      case 20:
        return 'fas fa-fog'; // Icono de niebla
      case 21:
        return 'fas fa-haze'; // Icono de bruma
      case 22:
        return 'fas fa-smog'; // Icono de smog
      case 23:
        return 'fas fa-smoke'; // Icono de humo
      case 24:
        return 'fas fa-windy'; // Icono de viento
      case 25:
        return 'fas fa-snowflake'; // Icono de nieve
      case 26:
        return 'fas fa-cloud'; // Icono de nube
      case 29:
        return 'fas fa-cloud-moon'; // Icono de nube y luna
      case 30:
        return 'fas fa-cloud-sun'; // Icono de nube y sol
      case 31:
        return 'fas fa-moon'; // Icono de luna
      case 32:
        return 'fas fa-sun'; // Icono de sol
      case 33:
        return 'fas fa-moon'; // Icono de luna
      case 34:
        return 'fas fa-sun'; // Icono de sol
      case 35:
        return 'fas fa-cloud-hail'; // Icono de nube y granizo
      case 36:
        return 'fas fa-thermometer'; // Icono de termómetro
      case 37:
        return 'fas fa-bolt'; // Icono de rayo
      case 38:
        return 'fas fa-bolt'; // Icono de rayo
      case 39:
        return 'fas fa-cloud-showers-heavy'; // Icono de nube y fuertes lluvias
      case 40:
        return 'fas fa-cloud-rain'; // Icono de nube y lluvia
      case 41:
        return 'fas fa-snowflake'; // Icono de nieve
      case 42:
        return 'fas fa-cloud-snow'; // Icono de nube y nieve
      case 43:
        return 'fas fa-snowflake'; // Icono de nieve
      case 44:
        return 'fas fa-cloud'; // Icono de nube
      default:
        return 'fas fa-question-circle'; // Icono de interrogación en caso de código desconocido
    }
  }
}
