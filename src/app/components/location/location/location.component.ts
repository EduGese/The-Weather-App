import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent {
  @Output() searchQueryEvent =  new EventEmitter<string>();
  @Output() selectedLocationEvent =  new EventEmitter<any>();
  @Output() weatherCurrentLocation = new EventEmitter<any>();
  @Input() searchResults: any[] = [];
  @Input() currentCity: string = '';
  @Input() city: string = '';
  @Input() state: string = '';
  @Input() country: string = '';
  searchQuery: string = '';

  constructor() {}

  searchCities() {
    this.searchQueryEvent.emit(this.searchQuery);
    console.log('ciudades', this.searchResults);
  }
  selectCity(selectedLocation: any) {
    console.log('selectedLocation', selectedLocation);
    this.selectedLocationEvent.emit(selectedLocation);
    this.searchQuery = '';
 
  }
  getWeatherCurrentLocation(){
    this.weatherCurrentLocation.emit();
  
  }
}
