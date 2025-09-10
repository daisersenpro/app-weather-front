import React from 'react';
import { LocationData } from '../types/Weather';

interface LocationInfoProps {
  location: LocationData | null;
}

const LocationInfo: React.FC<LocationInfoProps> = ({ location }) => {
  if (!location) return null;

  return (
    <div className="text-center mb-5">
      <div className="bg-white bg-opacity-10 rounded-4 p-4 shadow-lg">
        <h2 className="display-6 text-white fw-bold mb-2">
          <i className="bi bi-geo-alt-fill me-3"></i>
          {location.city}, {location.country}
        </h2>
        <p className="text-white-50 mb-0 fs-5">
          <i className="bi bi-calendar-week me-2"></i>
          Pronóstico de 7 días
        </p>
      </div>
    </div>
  );
};

export default LocationInfo;
