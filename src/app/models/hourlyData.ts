export interface HourlyData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    weathercode: string;
    windspeed_10m: string;
    winddirection_10m: string;
    is_day: string;
    precipitation_probability: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weathercode: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    is_day: number[];
    precipitation_probability: number[];
  };
}
