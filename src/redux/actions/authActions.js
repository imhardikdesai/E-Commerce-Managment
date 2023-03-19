import { AUTH_SET_DATA, AUTH_SET_STATUS } from "../actionTypes/authTypes";

/**
 * It returns an object with a type and a payLoad
 * @param userData - {
 * @returns An object with a type and a payLoad.
 */
export const authSetData = (userData) => {
    return {
        type: AUTH_SET_DATA,
        payLoad: userData
    }
}
/**
 * It returns an object with a type and a payLoad
 * @param status - This is the status of the user. It can be one of the following:
 * @returns An object with a type and a payLoad.
 */
export const authSetStatus = (status) => {
    return {
        type: AUTH_SET_STATUS,
        payLoad:status
    }
}