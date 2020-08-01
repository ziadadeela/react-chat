import {ADD_USER, USERS_LIST} from "./types";

let nextUserId = 0;


export const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: {
            id: ++nextUserId,
            name
        }
    }
};

export const populateUsersList = users => ({
    type: USERS_LIST,
    payload: {
        users
    }
});