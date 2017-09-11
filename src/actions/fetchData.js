import { fromJS } from 'immutable';

export const SAVE_SERVER_DATA = 'SAVE_SERVER_DATA';
export const saveServerData = data => ({
    type: SAVE_SERVER_DATA,
    data
});

/**
 * Example for an async actions, requires redux thunk middleware
 * //redux.js.org/docs/advanced/AsyncActions
 */
export const loadData = () => (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => dispatch(saveServerData(fromJS(data))));
};
