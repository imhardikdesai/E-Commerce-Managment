import getDecryptText from './GetDecryptText'

const CheckUserAuth = (encText) => {
    let found = false;
    const localObj = JSON.parse(localStorage.getItem('loginData'))
    found = localObj.some(item => getDecryptText(item).email === encText.email);
    return found
}

export default CheckUserAuth