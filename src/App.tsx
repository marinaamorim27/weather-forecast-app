import 'leaflet/dist/leaflet.css';
import React, { useState } from 'react';

import { useWeather } from './hooks/useWeather';
import { SearchBar } from './components/SearchBar';
import { ForecastList } from './components/ForecastList';
import { TemperatureChart } from './components/TemperatureChart/TemperatureChart';
import { TemperatureMap } from './components/TemperatureMap/TemperatureMap';
import { SuggestedCities } from './components/SuggestedCities/SuggestedCities';
import { Container, TopBar, Title , CityName, Wrapper} from './styles/global';



const App: React.FC = () => {
  const [cidade, setCidade] = useState('Porto');
  const [unidade, setUnidade] = useState<'metric' | 'imperial'>('metric');
  const { data, error } = useWeather(cidade, unidade);

  return (
    <Container>
      <TopBar>
        <Title>Meteorologia</Title>
        <CityName>{cidade}</CityName>
      </TopBar> 

      <Wrapper>
        <SuggestedCities onSelect={(city) => setCidade(city)} />
        <SearchBar
          onSearch={(city) => setCidade(city)}
          onToggleUnit={() =>
            setUnidade(u => (u === 'metric' ? 'imperial' : 'metric'))
          }
          unidade={unidade}
        />
      </Wrapper>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <>
          <ForecastList 
            items={data.list.filter((_,i) => i % 8 === 0).slice(0, 5)} 
            unidade={unidade} 
          />
          <TemperatureChart
            items={data.list.filter((_,i) => i % 8 === 0).slice(0, 5)}
            unidade={unidade}
          />
          <TemperatureMap
            lat={data.city.coord.lat}
            lon={data.city.coord.lon}
            cidade={data.city.name}
            temperatura={data.list[0].main.temp}
            unidade={unidade}
          />
        </>
      )}
    </Container>
  );
};

export default App;
