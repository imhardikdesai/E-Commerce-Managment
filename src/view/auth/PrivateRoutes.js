import { Navigate, Outlet } from 'react-router-dom'
const PrivateRoutes = () => {
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))
    return (
        isLogin ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes    