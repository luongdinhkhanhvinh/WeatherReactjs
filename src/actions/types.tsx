export const FETCH_WEATHER = 'fetch_weather';
export type FETCH_WEATHER = typeof FETCH_WEATHER;

export const ERROR_NOT_FOUND = 'error_not_found';
export type ERROR_NOT_FOUND = typeof ERROR_NOT_FOUND;

export type AWeather = {
    type: FETCH_WEATHER,
    payload: {
        [index: string]: {
            data: {
                [index: string]: {
                    city: string,
                    country: string
                }
            }
        }
    }
} | {
    type: ERROR_NOT_FOUND,
    payload: number
};