import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import '../styles/Navbar.css'
const Navbar = () => {
    return (
        <div className='bg-primary text-white'>
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
                    <NavLink className="navlink header-btn" to='/login'>Login <IoLogInOutline /></NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;