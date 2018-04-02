import axios from 'axios';
const API_KEY = "5439d52d32585a64696f8c04aacd0968";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WETHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }

}