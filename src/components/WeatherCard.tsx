import React from 'react';
import { WeatherData } from '../types/Weather';

interface WeatherCardProps {
  weather: WeatherData;
  index: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather, index }) => {
  // Convertir timestamp a fecha legible
  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'short' 
    });
  };

  // Obtener icono de OpenWeatherMap
  const getWeatherIcon = (icon: string) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-lg" style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      }}>
        <div className="card-body text-center p-4">
          <h5 className="card-title fw-bold text-dark mb-3">
            {index === 0 ? 'Hoy' : formatDate(weather.date)}
          </h5>
          
          <div className="mb-4">
            <img 
              src={getWeatherIcon(weather.icon)} 
              alt={weather.description}
              className="img-fluid"
              style={{ width: '100px', height: '100px' }}
            />
          </div>
          
          <h2 className="text-primary fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
            {Math.round(weather.temp)}°C
          </h2>
          
          <p className="card-text text-muted fs-5 fw-medium">
            {weather.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
