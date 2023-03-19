/**
 * It checks if the user is already registered in the local storage
 * @param loginFormData - The data entered by the user in the login form.
 */

import GetDecryptText from "./GetDecryptText"
const IsHaveAccount = (loginFormData) => {
    let isUser = false
    let localData = JSON.parse(localStorage.getItem('loginData'))
    if (localData === null) {
        isUser = false
    } else {
        // eslint-disable-next-line
        isUser = localData.some((item) => {
            let itemData = GetDecryptText(item)
            return (itemData.email === loginFormData.email) && (itemData.password === loginFormData.password)
        })
    }
    return isUser
}

export default IsHaveAccount