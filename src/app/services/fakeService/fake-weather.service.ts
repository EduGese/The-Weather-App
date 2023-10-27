import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeWeatherService {

  constructor() { }

  getFakeWeatherData(): any {
    return {
      cityName: 'Sample City',
      province: 'Sample Province',
      country: 'Sample Country',
      forecastData: [
        {
          Date: new Date(),
          Day: {
            Icon: 1,
            Wind: {
              Speed:{
                Value: 10
              },
              Direction:{
                English: 'NW'
              }

            }
          },
          Temperature: {
            Maximum: {
              Value: 25,
              Unit: 'Celsius'
            },
            Minimum: {
              Value: 15,
              Unit: 'Celsius'
            }
          },
        },
        {
          Date: new Date(),
          Day: {
            Icon: 4,
            Wind: {
              Speed:{
                Value: 10
              },
              Direction:{
                English: 'NW'
              }

            }
          },
          Temperature: {
            Maximum: {
              Value: 25,
              Unit: 'Celsius'
            },
            Minimum: {
              Value: 15,
              Unit: 'Celsius'
            }
          },
        },
        {
          Date: new Date(),
          Day: {
            Icon: 14,
            Wind: {
              Speed:{
                Value: 10
              },
              Direction:{
                English: 'NW'
              }

            }
          },
          Temperature: {
            Maximum: {
              Value: 25,
              Unit: 'Celsius'
            },
            Minimum: {
              Value: 15,
              Unit: 'Celsius'
            }
          },
        },
        {
          Date: new Date(),
          Day: {
            Icon: 14,
            Wind: {
              Speed:{
                Value: 10
              },
              Direction:{
                English: 'NW'
              }

            }
          },
          Temperature: {
            Maximum: {
              Value: 25,
              Unit: 'Celsius'
            },
            Minimum: {
              Value: 15,
              Unit: 'Celsius'
            }
          },
        },
        {
          Date: new Date(),
          Day: {
            Icon: 8,
            Wind: {
              Speed:{
                Value: 10
              },
              Direction:{
                English: 'NW'
              }

            }
          },
          Temperature: {
            Maximum: {
              Value: 25,
              Unit: 'Celsius'
            },
            Minimum: {
              Value: 15,
              Unit: 'Celsius'
            }
          },
        },
      ]
    };
  }
}
