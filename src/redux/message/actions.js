import {ADD_MESSAGE, MESSAGE_RECEIVED} from "./types";

let nextMessageId = 0;

export const addMessage = (message, author) => {
    return {
        type: ADD_MESSAGE,
        payload: {
            id: ++nextMessageId,
            author,
            message
        }
    }
};

export const messageReceived = (message, author) => ({
    type: MESSAGE_RECEIVED,
    payload: {
        id: ++nextMessageId,
        author,
        message
    }
});
