import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location/location.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast/hourly-forecast.component';
import { WeatherService } from './services/weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location/location.service';
import { FormsModule } from '@angular/forms';
import { DayCardComponent } from './components/day-card/day-card.component';
import { MatIconModule } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        WeatherForecastComponent,
        FooterComponent,
        LocationComponent,
        HourlyForecastComponent,
        DayCardComponent
      ],
      providers: [WeatherService, LocationService],
      imports: [HttpClientModule, FormsModule, MatIconModule],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'weather-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('weather-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'weather-app'
    );
  });
});
