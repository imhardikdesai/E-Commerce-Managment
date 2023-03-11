import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, UPDATE_FETCH_PRODUCT } from "../actionTypes/fetchTypes"

const initialData = {
    loading: false,
    error: '',
    productData: [],
    skip: 0,
    limit: 10
}


const fetchReducer = (state = initialData, action) => {
    switch (action.type) {

        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: action.payLoad,
                error: ''
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                productData: [],
                error: action.payLoad
            }
        case UPDATE_FETCH_PRODUCT:
            return {
                ...state,
                skip: action.skipNum,
                limit: action.limitNum
            }
        default:
            return {
                ...state
            }
    }
}

export default fetchReducer