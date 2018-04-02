import axios from 'axios';
const config = require('./../../config');
const API_KEY = config.openWeatherMapApiKey.key;
const ROOT_URL = config.openWeatherMapApiKey.url;
export const FETCH_WEATHER = 'FETCH_WETHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }

}