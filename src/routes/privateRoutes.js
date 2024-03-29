import React from 'react';
import { Outlet, Navigate} from 'react-router-dom';

const PrivateRoutes = () => {

    const userToken = localStorage.getItem('token')
    
    return (

        userToken ? <Outlet /> : <Navigate to='/login'/>  
       
    );
};

export default PrivateRoutes;