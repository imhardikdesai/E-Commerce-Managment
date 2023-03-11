const SetLocalData = (USER_DATA) => {
    let loginArr = [];
    localStorage.setItem('isLogin', true)
    let loginData = localStorage.getItem("loginData")
    if (loginData === null) {
        loginArr = []
    } else {
        loginArr = JSON.parse(loginData)
    }
    loginArr.push(USER_DATA)
    localStorage.setItem("loginData", JSON.stringify(loginArr));
}

export default SetLocalData