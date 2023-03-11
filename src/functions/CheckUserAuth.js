import GetDecryptText from './GetDecryptText'

const CheckUserAuth = (encText) => {
    let found = false;
    const localObj = JSON.parse(localStorage.getItem('loginData'))
    found = localObj.some(item => GetDecryptText(item).email === encText.email);
    return found
}

export default CheckUserAuth