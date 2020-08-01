import {takeEvery} from 'redux-saga/effects'
import {ADD_MESSAGE} from "../../redux/message/types";

const handleNewMessage = function* handleNewMessage(params) {
    yield takeEvery(ADD_MESSAGE, (action) => {
        action.payload.author = params.username;
        console.log(action);
        params.socket.send(JSON.stringify(action))
    })
};

export default handleNewMessage