import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { BsFolderFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import '../../../styles/Dashboard.css'
const Dashboard = () => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    console.log(user)
    return (
        <div className='dashboard-container relative mt-[56px]'>
            <div className="relative">
                <div className='dashboard-sidebar'>
                    <div onClick={() => { navigate('/updateprofile') }} className='cursor-pointer flex items-center mb-5 border-[1px] border-gray p-[0.5rem] rounded-[8px] hover:bg-[#f2fbff]'>
                        <img className='rounded-[10px] object-cover w-[60px] h-[60px]' src={user.photoURL} alt="" />
                        <div className="ml-2">
                            <h1 className="font-[500] text-[18px]">{user.displayName}</h1>
                            <Link className='text-[#4CCCFF] flex items-center' to="/updateprofile"><FiEdit className="mr-[0.3rem]" />Update Profile</Link>
                        </div>
                    </div>
                    <hr className='my-3 bg-gray-300' />
                    <NavLink className='dashboard-link' to='/dashboard/'><BsFolderFill color='#4CCCFF' className='mr-[5px]' /> My Orders</NavLink>
                    <NavLink className='dashboard-link' to='/dashboard/addreview'><BsFolderFill color='#4CCCFF' className='mr-[5px]' />Add Review</NavLink>
                    <NavLink className='dashboard-link' to='/dashboard/addproduct'><BsFolderFill color='#4CCCFF' className='mr-[5px]' />Add Product</NavLink>
                    <NavLink className='dashboard-link' to='/dashboard/makeadmin'><BsFolderFill color='#4CCCFF' className='mr-[5px]' />Make Admin</NavLink>
                    <NavLink className='dashboard-link' to='/dashboard/manageorders'><BsFolderFill color='#4CCCFF' className='mr-[5px]' />Manage Orders</NavLink>
                    <NavLink className='dashboard-link' to='/dashboard/manageproducts'><BsFolderFill color='#4CCCFF' className='mr-[5px]' />Manage Products</NavLink>
                </div>
            </div>
            <div className='dashboard-content p-4 '>
                <div className="bg-white rounded-[8px] p-4 drop-shadow-sm">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;