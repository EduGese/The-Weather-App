import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponent } from './location.component';
import { WeatherService } from 'src/app/services/weatherService/weather.service';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationComponent],
      providers : [WeatherService],
      imports : [HttpClientModule, FormsModule, MatIconModule]
    });
    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
