import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

const GetDecryptText = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};

export default GetDecryptText