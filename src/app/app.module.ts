import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { WeatherService } from './services/weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FakeWeatherService } from './services/fakeService/fake-weather.service';
import { LocationService } from './services/location/location.service';
import { TooManyRequestsComponent } from './components/errorPages/too-many-requests/too-many-requests.component';
import { LocationComponent } from './components/location/location/location.component';
import { DataService } from './services/dataService/data.service';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast/hourly-forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { DayCardComponent } from './components/day-card/day-card.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HeaderComponent,
    FooterComponent,
    TooManyRequestsComponent,
    LocationComponent,
    HourlyForecastComponent,
    DayCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
   
  ],
  providers: [WeatherService,FakeWeatherService, LocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
