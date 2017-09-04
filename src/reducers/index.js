import { combineReducers } from 'redux';

import userList from './userList';
import fetchData from './fetchData';

export default combineReducers({
    userList,
    fetchData
});
