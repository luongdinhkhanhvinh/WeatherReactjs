// ACTIONS
import * as Action from '../actions/types';
// STORE
import { Store } from './Store';

const defaultState: Store.AllWeathers = [{
    date: '',
    time: '',
    humidity: 0,
    pressure: 0,
    temp: 0,
    error: 0
}];

export default (state: Store.AllWeathers = defaultState, action: Action.AWeather): Store.AllWeathers => {
    const { type, payload } = action;
    switch (type) {
        case Action.FETCH_WEATHER:
            const _data = 'data';
            const data = payload[_data];

            const allWeathers: Store.AllWeathers = [];
            for (let i = 0; i < data.list.length; i = i + 3) {
                let item = data.list[i];
                let { dt_txt } = item;
                let schedule: string[] = dt_txt ? dt_txt.split(' ') : '';
                let { humidity, pressure, temp } = item.main;

                allWeathers.push({
                    date: schedule[0],
                    time: schedule[1],
                    humidity,
                    pressure,
                    temp,
                    error: 0
                });
            }

            return allWeathers;

        case Action.ERROR_NOT_FOUND:
            return [{
                date: '',
                time: '',
                humidity: 0,
                pressure: 0,
                temp: 0,
                error: 404
            }];

        default:
            return state;
    }
};