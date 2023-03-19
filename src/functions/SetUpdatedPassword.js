/**
 * It takes the updated password and the current user data as arguments, and then updates the local
 * storage with the new password
 * @param updatedPassword - The updated password object.
 * @param currentUserData - The current user data.
 */
import GetDecryptText from "./GetDecryptText";
import GetEncryptText from "./GetEncryptText";

const SetUpdatedPassword = (updatedPassword, currentUserData) => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = GetDecryptText(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]
    const newAuthToken = GetEncryptText((currentUserData.email + ',' + updatedPassword.passwordNew))

    const userData = loginData.map((item) => {
        let currentItem = GetDecryptText(item)
        if ((currentItem.email === authEmail) && (currentItem.password === authPassword)) {
            currentItem.password = updatedPassword.passwordNew
            currentItem.cPassword = updatedPassword.passwordNew
        }
        return GetEncryptText(currentItem)
    })
    localStorage.setItem('loginData', JSON.stringify(userData))
    localStorage.setItem('authToken', newAuthToken)
}

export default SetUpdatedPassword