import {ADD_USER, USERS_LIST} from "./types";

const initialState = {
    users: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const {users} = state;
            return {
                ...state,
                users: [...users, action.payload],
            };
        case USERS_LIST:
            return {
                ...state,
                users: action.payload.users,
            };
        default:
            return {
                ...state
            }
    }
};
