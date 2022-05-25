import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import { FiEdit } from 'react-icons/fi';
import '../../styles/Navbar.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div className='bg-primary text-white fixed w-[100%] top-0 z-50'>
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
                            <div class="dropdown dropdown-end">

                                <button className='ml-5 tabindex="0" bg-[#9ca3af1e] py-[5px] text-gray-200 rounded-[7px] px-3'>
                                    <img className="w-6 h-6 object-cover rounded-[50%] inline mr-1 " src={user.photoURL} alt="" />
                                    Account</button>

                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 drop-shadow-lg rounded-box w-[400px]">
                                    <li>
                                        <div onClick={() => { navigate('/updateprofile') }} className='cursor-pointer flex items-center mb-[4px] border-[1px] border-gray p-[0.5rem] rounded-[8px] hover:bg-[#f2fbff]'>
                                            <img className='rounded-[10px] object-cover w-[60px] h-[60px]' src={user.photoURL} alt="" />
                                            <div className="ml-2">
                                                <h1 className="font-[500] text-[18px]">{user.displayName}</h1>
                                                <Link className='text-[#4CCCFF] flex items-center' to="/updateprofile"><FiEdit className="mr-[0.3rem]" />Update Profile</Link>
                                            </div>
                                        </div>
                                    </li>
                                    <hr className='mt-2 bg-gray-300' />
                                    <li>
                                        <div className='active:bg-slate-600' onClick={() => logout()}>Sign Out</div>
                                    </li>
                                </ul>
                            </div>
                            :
                            <NavLink className="navlink header-btn" to='/login'>Login <IoLogInOutline /></NavLink>
                    }
                </nav>
            </div>
        </div>
    );
};

export default Navbar;