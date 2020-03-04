import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import allWeathers from './reducers_weather';

const rootReducer = combineReducers({
    form: formReducer,
    allWeathers
});

export default rootReducer;