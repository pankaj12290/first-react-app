import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import displayReducer from "./displayReducer";

const allReducers = combineReducers({
    counter: counterReducer,
    fullname: displayReducer
});

export default allReducers;
