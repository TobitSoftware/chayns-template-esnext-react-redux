export const ADD_USER = 'ADD_USER';
export const addUser = user => ({
    type: ADD_USER,
    user
});

export const REMOVE_USER = 'REMOVE_USER';
export const removeUser = userId => ({
    type: REMOVE_USER,
    userId
});
