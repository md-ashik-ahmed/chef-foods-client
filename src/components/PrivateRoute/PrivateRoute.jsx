import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)

    if(loading){
        return <button className="btn btn-outline p-20 loading"></button>
    }

    if(user){
        return children;
    }
    

    return (
       
        <Navigate state = {{from: location}} to ="/login" replace ></Navigate>
            
        
    );
};

export default PrivateRoute;