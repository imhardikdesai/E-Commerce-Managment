/**
 * It takes an id as an argument, and returns a promise that resolves to the data from the API call
 * @param id - The id of the product you want to get.
 * @returns the data from the response.
 */
import axios from "axios"


const GetProductDetailedView = async (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => response.data)

}

export default GetProductDetailedView