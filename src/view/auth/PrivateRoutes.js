import { Navigate, Outlet } from 'react-router-dom'
import GetDecryptText from '../../functions/GetDecryptText'
const PrivateRoutes = () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    let isHaveValidToken = false
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
        let encToken = GetDecryptText(localStorage.getItem('authToken'))
        const authEmail = encToken.split(',')[0]
        const authPassword = encToken.split(',')[1]
        isHaveValidToken = JSON.parse(localStorage.getItem('loginData')).some(item => {
            let temp = GetDecryptText(item)
            let isTemp = false
            if (temp.email === authEmail && temp.password === authPassword) {
                isTemp = true
            }
            return isTemp
        })
    }

    return (
        (isLogin && isHaveValidToken) ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes    