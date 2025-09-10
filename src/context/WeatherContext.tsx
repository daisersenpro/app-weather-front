import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { WeatherData, LocationData, WeatherResponse } from '../types/Weather';
import { weatherApi } from '../services/weatherApi';

// Estado del contexto
interface WeatherContextType {
  location: LocationData | null;
  forecast: WeatherData[];
  loading: boolean;
  error: string | null;
  loadWeather: () => Promise<void>;
}

// Crear el contexto
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather debe usarse dentro de WeatherProvider');
  }
  return context;
};

// Provider del contexto
interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [forecast, setForecast] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Función para cargar datos del clima
  const loadWeather = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await weatherApi.getAutoForecast();
      setLocation(data.location);
      setForecast(data.forecast);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  // Cargar datos al montar el componente
  useEffect(() => {
    loadWeather();
  }, []);

  const value: WeatherContextType = {
    location,
    forecast,
    loading,
    error,
    loadWeather
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};
