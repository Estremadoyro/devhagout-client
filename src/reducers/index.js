import { combineReducers } from "redux";
import { alertsReducer } from "./alert";
import { authReducer } from "./auth";

export default combineReducers({ alertsReducer, authReducer });
