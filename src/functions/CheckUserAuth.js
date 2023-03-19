/**
 * It checks if the user is already logged in or not
 * @param encText - The encrypted object of user login data.
 * @returns A boolean value
 */
import GetDecryptText from './GetDecryptText'

const CheckUserAuth = (encText) => {
    let found = false;
    const localObj = JSON.parse(localStorage.getItem('loginData'))
    found = localObj.some(item => GetDecryptText(item).email === encText.email);
    return found
}

export default CheckUserAuth