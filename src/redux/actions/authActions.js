import { AUTH_LOGIN } from "../actionTypes/authTypes";

const authLogin = (userData) => {
    return {
        type: AUTH_LOGIN,
        userData: userData
    }
}