import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location/location.component';
import { TooManyRequestsComponent } from './components/errorPages/too-many-requests/too-many-requests.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast/hourly-forecast.component';
import { WeekForecastComponent } from './components/week-forecast/week-forecast.component';
import { WeatherService } from './services/weatherService/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './services/location/location.service';
import { DataService } from './services/dataService/data.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        WeatherForecastComponent,
        FooterComponent,
        LocationComponent,
        TooManyRequestsComponent,
        HourlyForecastComponent,
        WeekForecastComponent,
      ],
      providers: [WeatherService, LocationService, DataService],
      imports: [HttpClientModule, FormsModule],
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
