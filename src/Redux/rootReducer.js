import { combineReducers } from "redux";
import setUserReducer from "./UserReducer/user-reducer";

const rootReducer = combineReducers({ user: setUserReducer });

export default rootReducer;
