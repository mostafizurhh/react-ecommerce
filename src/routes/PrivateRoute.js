import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/contexts/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); /* get users previous location in the website */

    /* set loader */
    if (loading) {
        return <button className="btn btn-square loading"></button>
    }

    /* get users previous location in the website */
    if (user && user.uid) {
        return children;
    }
    /* take user to his previous location in the website after login*/
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;