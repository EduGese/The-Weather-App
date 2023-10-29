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
import { WeekForecastComponent } from './components/week-forecast/week-forecast.component';
import { TooManyRequestsComponent } from './components/errorPages/too-many-requests/too-many-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    HeaderComponent,
    FooterComponent,
    WeekForecastComponent,
    TooManyRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [WeatherService,FakeWeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
