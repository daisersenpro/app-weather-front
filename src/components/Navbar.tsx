import React from 'react';

interface NavbarProps {
  onAboutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{
      background: 'rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          <i className="bi bi-cloud-sun me-2"></i>
          WeatherApp
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-house me-1"></i>
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link text-decoration-none" 
                onClick={onAboutClick}
                style={{ border: 'none', background: 'none' }}
              >
                <i className="bi bi-info-circle me-1"></i>
                Acerca de
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-gear me-1"></i>
                Configuración
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
