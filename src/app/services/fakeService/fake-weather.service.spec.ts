import { TestBed } from '@angular/core/testing';

import { FakeWeatherService } from './fake-weather.service';

describe('FakeWeatherService', () => {
  let service: FakeWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
