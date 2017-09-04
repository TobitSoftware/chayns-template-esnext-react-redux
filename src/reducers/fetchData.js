import { Map } from 'immutable';
import { SAVE_SERVER_DATA } from '../actions/fetchData';

export const initialState = Map();

const fetchData = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SERVER_DATA:
            return state.set('data', action.data)
                .set('timestamp', Date.now());
        default:
            return state;
    }
};

export default fetchData;
