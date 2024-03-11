import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastComponent } from './weather-forecast.component';
import { WeatherService } from 'src/app/services/weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationComponent } from '../location/location/location.component';
import { HourlyForecastComponent } from '../hourly-forecast/hourly-forecast/hourly-forecast.component';
import { FormsModule } from '@angular/forms';
import { DayCardComponent } from '../day-card/day-card.component';
import { MatIconModule } from '@angular/material/icon';

describe('WeatherForecastComponent', () => {
  let component: WeatherForecastComponent;
  let fixture: ComponentFixture<WeatherForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherForecastComponent, LocationComponent, HourlyForecastComponent, DayCardComponent],
      providers: [WeatherService],
      imports : [HttpClientModule, FormsModule, MatIconModule]
      
    });
    fixture = TestBed.createComponent(WeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
