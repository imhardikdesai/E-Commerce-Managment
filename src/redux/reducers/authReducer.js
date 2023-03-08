import { AUTH_LOGIN } from "../actionTypes/authTypes"

const initialData = {

}



const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state
            }
        default: {
            return {
                ...state
            }
        }
    }
}

export default authReducer