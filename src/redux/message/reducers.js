import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./types";

const initialState = {
    messages: [
        {
            author: "ziad",
            message: "asd",
            id: 2
        }
    ]
};

export const reducer = (state = initialState, action) => {
    if (state === undefined)
        return {};
    switch (action.type) {
        case ADD_MESSAGE:
        case MESSAGE_RECEIVED:
            const {messages} = state;
            return {
                ...state,
                messages: [...messages, action.payload],
            };
        default:
            return {
                ...state
            }
    }
};