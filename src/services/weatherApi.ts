import { WeatherResponse } from '../types/Weather';

// URL base de tu backend
const API_BASE_URL = 'http://localhost:5110/api/weather';

export const weatherApi = {
  // Obtener clima automático (detecta ubicación del usuario)
  getAutoForecast: async (): Promise<WeatherResponse> => {
    const response = await fetch(`${API_BASE_URL}/auto-forecast`);
    if (!response.ok) {
      throw new Error('Error al obtener datos del clima');
    }
    return response.json();
  },

  // Obtener clima por coordenadas específicas
  getForecastByCoords: async (lat: number, lon: number): Promise<WeatherResponse> => {
    const response = await fetch(`${API_BASE_URL}/forecast?lat=${lat}&lon=${lon}`);
    if (!response.ok) {
      throw new Error('Error al obtener datos del clima');
    }
    return response.json();
  }
};
