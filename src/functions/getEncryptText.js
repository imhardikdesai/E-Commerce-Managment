import CryptoJS from "crypto-js";
const secretPass = "XkhZG4fW2t2W";

const GetEncryptText = (text) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        secretPass
    ).toString();
    return data
};

export default GetEncryptText