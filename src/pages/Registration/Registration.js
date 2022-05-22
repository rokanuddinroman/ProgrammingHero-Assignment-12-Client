import React from 'react';
import { NavLink } from 'react-router-dom';

const registration = () => {
    return (
        <div className='max-w-7xl mx-auto login-container'>
            <div></div>
            <div className='mt-8'>
                <div className='options'>
                    <NavLink className='options-link' to='/login'>Login</NavLink>
                    <NavLink className='options-link' to='/registration'>Create a new account</NavLink>
                </div>
                <button className='mt-8 outline-button'>Sign in with Google</button>
                {/* <hr /> */}
                <form>

                </form>
            </div>
        </div>
    );
};

export default registration;