import axios from "axios"


const GetProductDetailedView =async (id) => {
    return axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => response.data)
        .catch(error => error.message)
}

export default GetProductDetailedView