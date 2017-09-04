import { List } from 'immutable';
import { ADD_USER, REMOVE_USER } from '../actions/userList';

export const initialState = List();

const userList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            if (state.find(u => u.equals(action.user))) {
                return state;
            }
            return state.push(action.user);
        case REMOVE_USER:
            return state.filter(user => user.get('userId') !== action.userId);
        default:
            return state;
    }
};

export default userList;
