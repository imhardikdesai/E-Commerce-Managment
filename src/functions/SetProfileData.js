import GetDecryptText from "./GetDecryptText"
import GetEncryptText from "./GetEncryptText"

const SetProfileData = (updatedData) => {
    // let isEmailExist = false
    const loginData = JSON.parse(localStorage.getItem('loginData'))
    const authToken = GetDecryptText(localStorage.getItem('authToken'))
    const authEmail = authToken.split(',')[0]
    const authPassword = authToken.split(',')[1]


    // isEmailExist = loginData.some((item) => {
    //     let currentItem = GetDecryptText(item)
    //     return (currentItem.email !== updatedData.email)
    // })

    const currentUserData = loginData.map((item) => {
        let currentItem = GetDecryptText(item)
        if ((currentItem.email === authEmail) && (currentItem.password === authPassword)) {
            currentItem = updatedData
        }
        return GetEncryptText(currentItem)
    })

    // if (isEmailExist) {
        localStorage.setItem('loginData', JSON.stringify(currentUserData))
    // }
    // console.log(isEmailExist);

    // return isEmailExist
}

export default SetProfileData