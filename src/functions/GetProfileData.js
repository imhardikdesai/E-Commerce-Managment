/**
 * It gets the current user's data from localStorage
 * @returns The current user's data.
 */
import GetDecryptText from "./GetDecryptText"



const GetProfileData = () => {
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = GetDecryptText(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]

    const currentUserData = loginData.filter((item) => (GetDecryptText(item).email === authEmail) && (GetDecryptText(item).password === authPassword))
    return GetDecryptText(currentUserData[0].toString())
}

export default GetProfileData