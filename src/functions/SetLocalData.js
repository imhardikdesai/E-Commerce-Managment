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