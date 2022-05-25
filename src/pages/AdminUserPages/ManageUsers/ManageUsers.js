import React from 'react';
import { IoBagAdd } from 'react-icons/io5';

const ManageUsers = () => {
    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><IoBagAdd color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Users</h3>
        </div>
    );
};

export default ManageUsers;