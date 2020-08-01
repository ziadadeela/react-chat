import {ADD_USER, USERS_LIST} from "../redux/user/types";
import {ADD_MESSAGE} from "../redux/message/types";
import {messageReceived} from "../redux/message/actions";
import {populateUsersList} from "../redux/user/actions";


const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989');

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: ADD_USER,
            payload: {
                name: username
            }
        }))
    };
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);
        switch (data.type) {
            case ADD_MESSAGE:
                dispatch(messageReceived(data.payload.message, data.payload.author));
                break;
            case USERS_LIST:
                dispatch(populateUsersList(data.payload.users));
                break;
            default:
                break
        }
    };

    return socket
};

export default setupSocket