import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isLoggedIn } from './auto';

const Private = () => {
    
    if(isLoggedIn==true){
        console.log(isLoggedIn);
        return<Navigate to={'/private/dhome'}/>
    }
    else{
        return <Navigate to={'/RS1'}/>;
    }
 
}

export default Private
