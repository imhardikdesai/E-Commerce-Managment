import authReducer from "./authReducer";
import fetchReducer from "./fetchReducer";
import { combineReducers } from "redux";


/* Combining the reducers into one reducer. */
const rootReducer = combineReducers({
    auth: authReducer,
    fetch: fetchReducer
})

export default rootReducer