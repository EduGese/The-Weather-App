import { DataService } from './../../../services/dataService/data.service';
import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { WeatherService } from 'src/app/services/weatherService/weather.service';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
  city: string = '';
  state: string = '';
  country: string = '';
  currentCity: string = '';
  
  forecastHourlyData: any[] = [];
  forecastDailyData: any[] = [];
  searchQuery: string = '';
  searchResults: any[] = [];
  error: boolean = false;
  lat: number = 0 ;
  lon: number = 0;


  constructor(
    private weatherService: WeatherService,
    private ipService: LocationService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getWeatherCurrentLocation();
  }

  searchCities() {
    if (this.searchQuery) { 
      this.ipService.findCities(this.searchQuery).subscribe(
        (data: any) => {
          this.searchResults = data.results;
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
  selectCity(selectedLocation: any) {
    
    this.city = selectedLocation.city;
    this.state = selectedLocation.state;
    this.country = selectedLocation.country;
    this.currentCity = '';
    this.lat = selectedLocation.lat;
    this.lon = selectedLocation.lon;
    this.searchResults = [];
    this.searchQuery = '';
  
    this.getHourlyWeather(this.lat, this.lon);
    this.getDailyWeather(this.lat, this.lon);
  }
  getHourlyWeather(lat: number, lon: number){
    const now = new Date().toISOString();
    const futureTime = new Date();
    futureTime.setHours(futureTime.getHours() + 24);
    const futureTimeISO = futureTime.toISOString();

    this.weatherService
      .getOpenMeteoWeatherHourlyForecast(lat, lon)
      .subscribe(
        (data: any) => {
        const filteredData = data.hourly.time
          .map((time: any, index: any) => ({
            time: time,
            isDay: data.hourly.is_day[index],
            temperature: data.hourly.temperature_2m[index],
            weathercode: data.hourly.weathercode[index],
            windspeed: data.hourly.windspeed_10m[index],
            winddirection: data.hourly.winddirection_10m[index],
            precipitation: data.hourly.precipitation_probability[index],
          }))
          .filter((data: any) => data.time >= now && data.time <= futureTimeISO);
          this.dataService.setForecastHourlyData(filteredData);
        
      },
      (error) => {
            console.error('Error al obtener los datos del tiempo:', error);
            this.error = true;
            this.dataService.setError(this.error);
          }
      );
  }
  getDailyWeather(lat: number, lon: number){
    this.weatherService.
    getOpenMeteoWeatherDailyForecast(lat,lon).
    subscribe(
      (data:any)=>{
        const dailyData = data.daily.time
        .map((daily:any, index:any)=>({
          daily: daily,
          time: data.daily.time[index],
          weathercode: data.daily.weathercode[index],
          temperatureMax: data.daily.temperature_2m_max[index],
          temperatureMin: data.daily.temperature_2m_min[index],
          windSpeed: data.daily.windspeed_10m_max[index],
          winddirection: data.daily.winddirection_10m_dominant[index],
          sunrise: data.daily.sunrise[index],
          sunset: data.daily.sunset[index]
        }))
      this.dataService.setForecastDailyData(dailyData);
      
    },
    (error) => {
          console.error('Error al obtener los datos del tiempo:', error);
          this.error = true;
          this.dataService.setError(this.error);
        }
    );
  }
  getWeatherCurrentLocation(){
    this.ipService.getLocation().subscribe(
      (data: any) => {
        this.currentCity = data.city ;
        this.getHourlyWeather(data.loc.split(',')[0],data.loc.split(',')[1]);
        this.getDailyWeather(data.loc.split(',')[0],data.loc.split(',')[1]);
      },
      (error) => {
        console.error('Error al obtener la información de ubicación:', error);
      }
    );
  }
}
