import axios from "axios"
import { FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, UPDATE_FETCH_PRODUCT } from "../actionTypes/fetchTypes"


/**
 * It returns an object with a type property and a payLoad property. 
 * 
 * The type property is a string that describes the action that's being taken. 
 * 
 * The payLoad property is the data that's being passed to the reducer. 
 * 
 * The reducer will use this data to update the state.
 * @returns An object with a type and a payLoad.
 */
export const fetchProductRequest = () => {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
/**
 * It returns an object with a type property and a payLoad property. 
 * 
 * The type property is a string that describes the action that's being taken. 
 * 
 * The payLoad property is the data that's being passed to the reducer. 
 * 
 * The reducer will use this data to update the state.
 * @param product - The product object that was fetched from the API.
 * @returns An object with a type and a payLoad.
 */
export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payLoad: product,
    }
}
/**
 * It returns an object with a type of FETCH_PRODUCT_FAILURE and a payLoad of error
 * @returns An object with a type and a payLoad.
 */
export const fetchProductFailure = error => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        payLoad: error
    }
}
/**
 * It returns an object with a type property and two other properties
 * @param skip - the number of products to skip
 * @param limit - The number of products to be fetched
 * @returns An object with a type and a payload.
 */
export const updateFetchProduct = (skip,limit) => {
    return {
        type: UPDATE_FETCH_PRODUCT,
        skipNum:skip,
        limitNum:limit
    }
}

/**
 * It returns a function that takes dispatch as an argument and dispatches an action
 * @param [skip=0] - The number of items to skip.
 * @param [limit=10] - The number of products to be fetched.
 */
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