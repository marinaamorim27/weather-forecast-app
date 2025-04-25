import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ForecastItem {
  dt_txt: string;
  main: {
    temp: number;
  };
}

interface Props {
  items: ForecastItem[];
  unidade: 'metric' | 'imperial';
}

export const TemperatureChart: React.FC<Props> = ({ items, unidade }) => {
  const data = items.map(item => ({
    name: new Date(item.dt_txt).toLocaleDateString('pt-PT', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
    }),
    temp: item.main.temp,
  }));

  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Gráfico de Temperatura</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: unidade === 'metric' ? 'ºC' : 'ºF', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
