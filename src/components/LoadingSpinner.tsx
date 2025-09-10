import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
      <div className="text-center">
        <div className="spinner-border text-white mb-4" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="text-white fs-5 fw-medium">
          <i className="bi bi-cloud-download me-2"></i>
          Obteniendo datos del clima...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
