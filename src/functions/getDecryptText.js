/* Decrypting the text. */
import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

const GetDecryptText = (text) => {
    let data = ''
    const bytes = CryptoJS.AES.decrypt(text, secretPass);
    try {
        data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    } catch {
        localStorage.removeItem('authToken')
    }

    return data

};

export default GetDecryptText