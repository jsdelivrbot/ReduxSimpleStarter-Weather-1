import axios from 'axios';

const API_KEY  = 'a72a22bf387a6ec03a1a14f006199266';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us` // Country code is static ('us')
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
