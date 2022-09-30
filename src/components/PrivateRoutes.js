import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    let auth = sessionStorage.getItem('Auth')
    console.log(auth);
    return(
        auth !=='apu'? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes