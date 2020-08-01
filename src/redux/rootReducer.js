import {combineReducers} from "redux";
import {reducer as messageReducer} from "./message/reducers";
import {reducer as userReducer} from "./user/reducers";


const rootReducer = combineReducers({
    message: messageReducer,
    user: userReducer
});

export default rootReducer;