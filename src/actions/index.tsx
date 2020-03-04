import axios from 'axios';
import { FETCH_WEATHER, ERROR_NOT_FOUND } from './types';

const API_KEY: string = '0f5af9a15fa2bd90bdc735758131b0ec';
const ROOT_URL: string = `https://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

// INTERFACES
import * as I from '../interfaces';
// ACTIONS
import * as Actions from './types';

export const fetchWeather = (searchValues: I.City): Actions.AWeather | object => {
    const { name, country } = searchValues;
    
    const url: string = `${ROOT_URL}&q=${name},${country}`;

    const response: Actions.AWeather | object = axios.get(url)
        .then( res => ({
            type: FETCH_WEATHER,
            payload: res
        }))
        .catch( error => {
            if (error.response) {
                return {
                    type: ERROR_NOT_FOUND,
                    payload: error.response.status
                };
            }
            return;
        });

    return response;
};