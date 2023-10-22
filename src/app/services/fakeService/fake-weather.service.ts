import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeWeatherService {

  constructor() { }

  getFakeWeatherData(): any {
    // Devuelve datos ficticios que coincidan con la estructura de datos reales
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
      ]
    };
  }
}
