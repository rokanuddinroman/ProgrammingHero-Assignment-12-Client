import React from 'react';
import { useQuery } from 'react-query';
import { IoBagAdd } from 'react-icons/io5';
import TableRow from '../../../components/Dashboard/TableRow';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:4000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><IoBagAdd color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Users</h3>
            <div className='product-rows mt-2'>
                <div style={{ gridTemplateColumns: "1fr 1fr 1fr 100px" }} className='product-row-heading'>
                    <p>Email ({users.length})</p>
                    <p></p>
                    <p>Role</p>
                    <p>Actions</p>
                </div>
                {
                    users.map(user => <TableRow key={user._id} user={user} refetch={refetch}></TableRow>)
                }
            </div>
        </div>
    );
};

export default ManageUsers;