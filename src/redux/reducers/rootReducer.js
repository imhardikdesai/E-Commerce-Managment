import authReducer from "./authReducer";
import fetchReducer from "./fetchReducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth: authReducer,
    fetch: fetchReducer
})

export default rootReducer