import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import '../../styles/Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
    };
    return (
        <div className='bg-primary text-white fixed w-[100%] top-0'>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className='py-4'>
                    Logo
                </h1>
                <nav className="navitems">
                    <NavLink className="px-3 navlink" to='/'>Home</NavLink>
                    <NavLink className="px-3 navlink" to='/blogs'>Blogs</NavLink>
                    <NavLink className="px-3 navlink" to='/reviews'>Reviews</NavLink>
                    <NavLink className="pl-3 navlink mr-5" to='/dashboard'>Dashboard</NavLink>
                    <div class="inline hr-divider"></div>
                    {
                        user ?
                            <button className='ml-5 bg-[#9ca3af1e] py-[5px] text-gray-200 rounded-[7px] px-3' onClick={() => logout()}>
                                <img className="w-6 h-6 object-cover rounded-[50%] inline mr-1 " src={user.photoURL} alt="" />
                                Sign Out</button>
                            :
                            <NavLink className="navlink header-btn" to='/login'>Login <IoLogInOutline /></NavLink>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;