import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import ApiLoading from '../Loading/ApiLoading';
import LightLoading from '../Loading/LightLoading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
            {/* <img style={{ width: '200px' }} src="https://flevix.com/wp-content/uploads/2019/07/Disk-Preloader-1.gif" alt="" /> */}
            <LightLoading />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAuth;