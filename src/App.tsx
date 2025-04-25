import React, { useState } from 'react';
import { useWeather } from './hooks/useWeather';
import { SearchBar } from './components/SearchBar';
import { ForecastList } from './components/ForecastList';
import { Container, Title } from './styles/global';

const App: React.FC = () => {
  const [cidade, setCidade] = useState('');
  const [unidade, setUnidade] = useState<'metric' | 'imperial'>('metric');
  const { data, error } = useWeather(cidade, unidade);

  return (
    <Container>
      <Title>Previsão de 5 Dias</Title>
      <SearchBar
        onSearch={setCidade}
        onToggleUnit={() =>
          setUnidade(u => (u === 'metric' ? 'imperial' : 'metric'))
        }
        unidade={unidade}
      />

      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <ForecastList 
          items={data.list.filter((_,i) => i % 8 === 0).slice(0, 5)} 
          unidade={unidade} />)}
    </Container>
  );
};

export default App;
