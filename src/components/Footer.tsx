import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-5" style={{
      background: 'rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-white-50 mb-0">
              <i className="bi bi-info-circle me-2"></i>
              Datos obtenidos de OpenWeatherMap
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <a href="#" className="text-white-50 text-decoration-none">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                <i className="bi bi-twitter fs-5"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-3" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-white-50 mb-0">
              <small>
                © 2024 WeatherApp - Desarrollado por <strong>Anyelo Bustos Galdames</strong> con React + TypeScript + .NET Core
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
