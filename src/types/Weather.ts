// Tipos para los datos del clima
export interface WeatherData {
  date: string;
  temp: number;
  description: string;
  icon: string;
}

export interface LocationData {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface WeatherResponse {
  location: LocationData;
  forecast: WeatherData[];
}
