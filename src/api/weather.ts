const API_KEY = process.env.REACT_APP_OWM_API_KEY;

export interface ForecastItem {
  dt_txt: string;
  main: { temp: number };
  weather: { icon: string; description: string }[];
}

export interface ForecastResponse {
  list: ForecastItem[];
}

export async function fetchForecast(
  cidade: string,
  unidade: 'metric' | 'imperial'
): Promise<ForecastResponse> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&units=${unidade}&appid=${API_KEY}`
  );
  if (!res.ok) {
    throw new Error('Não foi possível obter a previsão. Verifica o nome da cidade.');
  }
  return res.json();
}
