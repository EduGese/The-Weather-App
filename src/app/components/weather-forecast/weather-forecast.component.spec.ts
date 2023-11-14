import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherService } from 'src/app/services/weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from '../location/location/location.component';
import { TooManyRequestsComponent } from '../errorPages/too-many-requests/too-many-requests.component';
import { HourlyForecastComponent } from '../hourly-forecast/hourly-forecast/hourly-forecast.component';
import { WeekForecastComponent } from '../week-forecast/week-forecast.component';
import { FormsModule } from '@angular/forms';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent, LocationComponent,
         TooManyRequestsComponent, HourlyForecastComponent, WeekForecastComponent],
      providers: [WeatherService],
      imports : [HttpClientModule, FormsModule]
      
    });
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
