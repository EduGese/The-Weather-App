export interface DailyData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    windspeed_10m_max: string;
    winddirection_10m_dominant: string;
    sunrise: string;
    sunset: string;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    windspeed_10m_max: number[];
    winddirection_10m_dominant: number[];
    sunrise: string[];
    sunset: string[];
  };
}
