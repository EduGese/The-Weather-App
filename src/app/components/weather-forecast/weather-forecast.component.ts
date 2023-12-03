import { Component, OnInit } from '@angular/core';
// import { LocationService } from 'src/app/services/location/location.service';


@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css'],
})
export class WeatherForecastComponent implements OnInit {
  // city: string = '';
  // forecastData: any[] = [];
  // currentDate: Date = new Date();
  // searchQuery: string = '';
  // searchResults: any[] = [];
  // error: boolean = false;
  

  constructor(
    // private ipService: LocationService
  ) {}

  ngOnInit(): void {
    // this.ipService.getCity().subscribe(
    //   (data: any) => {
    //      this.city = data.city;
    //   },
    //   (error) => {
    //     console.error('Error al obtener la información de ubicación:', error);
    //   }
    // );
  }
}
