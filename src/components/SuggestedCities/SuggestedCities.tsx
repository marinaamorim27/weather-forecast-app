import React from 'react';
import { Wrapper, CityButton } from './styles';

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

      <Wrapper>
        {cities.map((city) => (
          <CityButton key={city} onClick={() => onSelect(city)}>
            {city}
          </CityButton>
        ))}
      </Wrapper>
    </div>
  );
};
