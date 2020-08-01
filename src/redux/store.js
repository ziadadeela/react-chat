import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./rootReducer";
import {addUser} from "./user/actions";
import {composeWithDevTools} from 'redux-devtools-extension';
import setupSocket from "../sockets";
import username from '../utils/name'
import handleNewMessage from "../components/sagas";
import register from '../serviceWorker'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
store.dispatch(addUser('Me'));

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username});

register();
export default store