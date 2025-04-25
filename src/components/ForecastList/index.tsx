import React from 'react';
import { List, Item, DateText, TempText, Icon } from './styles';

export interface ForecastItem {
  dt_txt: string;
  main: { temp: number };
  weather: { icon: string; description: string }[];
}

interface ForecastListProps {
  items: ForecastItem[];            // já cortada para 5 itens no App.tsx
  unidade: 'metric' | 'imperial';   // para mostrar °C ou °F
}

export const ForecastList: React.FC<ForecastListProps> = ({ items, unidade }) => {
  return (
    <List>
      {items.map(item => (
        <Item key={item.dt_txt}>
          <DateText>{new Date(item.dt_txt).toLocaleDateString('pt-PT', {
            weekday: 'short', day: '2-digit', month: '2-digit'
          })}</DateText>

          <Icon
            src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={item.weather[0].description}
          />

          <TempText>
            {Math.round(item.main.temp)}°{unidade === 'metric' ? 'C' : 'F'}
          </TempText>
        </Item>
      ))}
    </List>
  );
};
