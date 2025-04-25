import React from 'react';

interface SuggestedCitiesProps {
  onSelect: (city: string) => void;
}

const cities = [
  'Lisboa', 'Porto', 'Faro', 'Madrid', 'Paris', 'Londres',
  'Berlim', 'Roma', 'Viena', 'Nova Iorque', 'Tóquio', 'Pequim'
];

export const SuggestedCities: React.FC<SuggestedCitiesProps> = ({ onSelect }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <h3>Cidades sugeridas:</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => onSelect(city)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              border: '1px solid #ccc',
              cursor: 'pointer',
              backgroundColor: '#f0f0f0',
            }}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};
