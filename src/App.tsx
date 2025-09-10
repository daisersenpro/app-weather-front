import React, { useState } from 'react';
import { WeatherProvider, useWeather } from './context/WeatherContext';
import Navbar from './components/Navbar';
import LocationInfo from './components/LocationInfo';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';

// Componente principal de la aplicación
const WeatherApp: React.FC = () => {
  const { location, forecast, loading, error, loadWeather } = useWeather();
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #2c3e50 100%)',
      minHeight: '100vh'
    }}>
      {/* Navbar */}
      <Navbar onAboutClick={() => setShowAbout(true)} />
      
      {/* Main Content */}
      <div className="flex-grow-1">
        <div className="container py-5">
          {/* Header */}
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <h1 className="display-4 text-white fw-bold mb-3">
                  <i className="bi bi-cloud-sun me-3"></i>
                  Aplicación del Clima
                </h1>
                <p className="lead text-white-50">
                  Pronóstico de 7 días con detección automática de ubicación
                </p>
              </div>
              <LocationInfo location={location} />
            </div>
          </div>

        {/* Loading */}
        {loading && <LoadingSpinner />}

        {/* Error */}
        {error && (
          <div className="row">
            <div className="col-12">
              <div className="alert alert-danger text-center">
                <i className="bi bi-exclamation-triangle me-2"></i>
                {error}
                <button 
                  className="btn btn-outline-danger btn-sm ms-3"
                  onClick={loadWeather}
                >
                  Reintentar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Weather Cards */}
        {!loading && !error && forecast.length > 0 && (
          <div className="row g-4">
            {forecast.map((weather, index) => (
              <WeatherCard 
                key={weather.date} 
                weather={weather} 
                index={index} 
              />
            ))}
          </div>
        )}

        </div>
      </div>
      
      {/* Footer */}
      <Footer />
      
      {/* About Modal */}
      <AboutModal 
        show={showAbout} 
        onClose={() => setShowAbout(false)} 
      />
    </div>
  );
};

// App principal con Provider
const App: React.FC = () => {
  return (
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  );
};

export default App;
