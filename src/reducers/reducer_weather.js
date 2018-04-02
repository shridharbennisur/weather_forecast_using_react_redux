import {FETCH_WEATHER} from '../actions/fetch_weather';
export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]; //or return state.concat(action.payload.data)
    }
    return state;
}