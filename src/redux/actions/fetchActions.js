import axios from "axios"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, UPDATE_FETCH_PRODUCT } from "../actionTypes/fetchTypes"


export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payLoad: product,
    }
}
export const fetchProductFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payLoad: error
    }
}
export const updateFetchProduct = (skip,limit) => {
    return {
        type: UPDATE_FETCH_PRODUCT,
        skipNum:skip,
        limitNum:limit
    }
}

export const fetchProduct = (skip = 0, limit = 10) => {
    const URL = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    return (dispatch) => {
        dispatch(fetchProductRequest())
        axios.get(URL)
            .then(response => {
                const productData = response.data
                dispatch(fetchProductSuccess(productData))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchProductFailure(errorMsg))
            })
    }

}