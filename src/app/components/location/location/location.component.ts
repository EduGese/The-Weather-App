import { DataService } from './../../../services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { FakeWeatherService } from 'src/app/services/fakeService/fake-weather.service';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{
  city: string = '';
  forecastData: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];
  error: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private fakeWeatherService: FakeWeatherService,
    private ipService: LocationService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.ipService.getLocation().subscribe(
      (data: any) => {
        this.city = data.city;
        this.weatherService.getWeatherForecast(this.city).subscribe(
          (data: any) => {
            this.forecastData = data.DailyForecasts;
            this.dataService.setCity(this.city);
        this.dataService.setForecastData(this.forecastData);
            console.log(this.forecastData);
          },
          (error) => {
            console.error('Error al obtener los datos del tiempo:', error);
            this.error = true;
            this.dataService.setError(this.error);
          }
        );
      },
      (error) => {
        console.error('Error al obtener la información de ubicación:', error);
      }
    );
  }

  searchCities() {
    if (this.searchQuery) {
      this.weatherService.searchCities(this.searchQuery).subscribe(
        (data: any) => {
          this.searchResults = data;    
        },
        (error) => {
          console.error('Error al buscar ciudades:', error);
          this.error = true;
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
        this.dataService.setForecastData(data.DailyForecasts);
        this.dataService.setCity(city);
        this.dataService.setForecastData(this.forecastData);
        
      },
      (error) => {
        console.error('Error al obtener los datos del tiempo:', error);
        this.error = true;
        this.dataService.setError(this.error);
      }
    );
  }

  loadFakeWeatherData() {
    const fakeData = this.fakeWeatherService.getFakeWeatherData();
    this.forecastData = fakeData.forecastData;
  }
}
