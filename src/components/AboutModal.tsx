import React from 'react';

interface AboutModalProps {
  show: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title fw-bold">
              <i className="bi bi-info-circle me-2"></i>
              Acerca de WeatherApp
            </h5>
            <button 
              type="button" 
              className="btn-close btn-close-white" 
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body p-4">
            <div className="row">
              <div className="col-12">
                <h6 className="text-primary fw-bold mb-3">
                  <i className="bi bi-cloud-sun me-2"></i>
                  ¿Qué hace esta aplicación?
                </h6>
                <p className="text-muted mb-4">
                  WeatherApp es una aplicación web moderna que te permite conocer el pronóstico del clima 
                  de los próximos 7 días de forma automática, detectando tu ubicación actual.
                </p>

                <h6 className="text-primary fw-bold mb-3">
                  <i className="bi bi-gear me-2"></i>
                  Características principales:
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Detección automática de ubicación</strong> - No necesitas ingresar tu ciudad
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Pronóstico de 7 días</strong> - Información completa del clima
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Interfaz moderna</strong> - Diseño responsive con Bootstrap
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Datos en tiempo real</strong> - Información actualizada constantemente
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Iconos meteorológicos</strong> - Visualización clara del clima
                  </li>
                </ul>

                <h6 className="text-primary fw-bold mb-3">
                  <i className="bi bi-code-slash me-2"></i>
                  Tecnologías utilizadas:
                </h6>
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="text-secondary">Frontend:</h6>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-circle-fill text-primary me-1" style={{ fontSize: '0.5rem' }}></i> React 18</li>
                      <li><i className="bi bi-circle-fill text-primary me-1" style={{ fontSize: '0.5rem' }}></i> TypeScript</li>
                      <li><i className="bi bi-circle-fill text-primary me-1" style={{ fontSize: '0.5rem' }}></i> Bootstrap 5</li>
                      <li><i className="bi bi-circle-fill text-primary me-1" style={{ fontSize: '0.5rem' }}></i> Context API</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6 className="text-secondary">Backend:</h6>
                    <ul className="list-unstyled">
                      <li><i className="bi bi-circle-fill text-success me-1" style={{ fontSize: '0.5rem' }}></i> .NET Core 9</li>
                      <li><i className="bi bi-circle-fill text-success me-1" style={{ fontSize: '0.5rem' }}></i> C#</li>
                      <li><i className="bi bi-circle-fill text-success me-1" style={{ fontSize: '0.5rem' }}></i> Web API</li>
                      <li><i className="bi bi-circle-fill text-success me-1" style={{ fontSize: '0.5rem' }}></i> CORS</li>
                    </ul>
                  </div>
                </div>

                <h6 className="text-primary fw-bold mb-3">
                  <i className="bi bi-globe me-2"></i>
                  APIs externas:
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-1">
                    <i className="bi bi-cloud me-2 text-info"></i>
                    <strong>OpenWeatherMap</strong> - Datos meteorológicos
                  </li>
                  <li className="mb-1">
                    <i className="bi bi-geo-alt me-2 text-warning"></i>
                    <strong>ipgeolocation.io</strong> - Detección de ubicación
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-footer bg-light">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={onClose}
            >
              <i className="bi bi-check-lg me-1"></i>
              Entendido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
