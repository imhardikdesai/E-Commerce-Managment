/**
 * It takes in three parameters, USER_DATA, isLogin, authToken, and sets the localStorage with the data
 * @param USER_DATA - The user data that you want to store in local storage.
 * @param isLogin - This is a boolean value that is used to check if the user is logged in or not.
 * @param authToken - The token that is returned from the server after a successful login.
 */
const SetLocalData = (USER_DATA, isLogin, authToken) => {
    let loginArr = [];
    // localStorage.setItem('isLogin', true)
    let loginData = localStorage.getItem("loginData")
    if (loginData === null) {
        loginArr = []
    } else {
        loginArr = JSON.parse(loginData)
    }
    loginArr.push(USER_DATA)
    localStorage.setItem("loginData", JSON.stringify(loginArr));
    isLogin && localStorage.setItem("isLogin", isLogin);
    authToken && localStorage.setItem("authToken", authToken);
}

export default SetLocalData