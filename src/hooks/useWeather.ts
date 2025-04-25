import { useEffect, useState } from 'react';
import { fetchForecast, ForecastResponse } from '../api/weather';

export function useWeather(cidade: string, unidade: 'metric' | 'imperial') {
  const [data, setData] = useState<ForecastResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!cidade) return;
    setLoading(true);
    fetchForecast(cidade, unidade)
      .then(res => {
        setData(res);
        setError(null);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [cidade, unidade]);

  return { data, loading, error };
}
