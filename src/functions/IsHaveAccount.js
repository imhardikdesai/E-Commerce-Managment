
import GetDecryptText from "./GetDecryptText"
const IsHaveAccount = (loginFormData) => {
    let isUser = false
    let localData = localStorage.getItem('loginData')
    if (localData === null) {
        isUser = false
    } else {
        // eslint-disable-next-line
        JSON.parse(localData).map((item) => {
            let itemData = GetDecryptText(item)
            if ((itemData.email === loginFormData.email) && (itemData.password === loginFormData.password)) {
                isUser = true
            } else {
                isUser = false
            }
        })
    }

    return isUser
}

export default IsHaveAccount