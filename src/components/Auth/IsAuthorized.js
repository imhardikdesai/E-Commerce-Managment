// import { Navigate, useLocation } from "react-router-dom";

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

// const IsAuthorized = ({ children }) => {
//     // let isLogin = localStorage.getItem('isLogin');
//     // if (isLogin === null) {
//     //     isLogin = false
//     // }
//     // const location = useLocation();

//     // if (!isLogin) {
//     //     return <Navigate to="/login" state={{ path: location.pathname }} />;
//     // }

//     // return children;
//     console.log(isLogin)
//     if (!isLogin) {
//         console.log('navigate')
//         return <Navigate to="/login" replace />;
//     }
//     return children;
// };

// export default IsAuthorized;

const IsAuthorized = (props) => {
    const { Component } = props
    const navigate = useNavigate()

    useEffect(() => {
        let login = localStorage.getItem('isLogin')
        if (!login) {
            navigate('/login')
        }
    })
    return (
        <div>
            <Component />
        </div>
    )
}

export default IsAuthorized