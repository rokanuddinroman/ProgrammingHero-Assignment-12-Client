import React from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete, AiFillCrown } from 'react-icons/ai';

const TableRow = ({ user, handleDelete, setShowModal, showModal }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://salty-shelf-96840.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`Successfully made an admin`);
                }

            })
    }



    return (
        <div className='product-row flex items-center responsive-row'>
            <p className='product-name'>
                <img className='object-cover rounded-[20px]' src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuox6vatPBS6w8edvrLbqXzHimyKXOVejMQ&usqp=CAU"} alt="" />
                {email}</p>
            <p className='quantity-column relative '>
                <span className=''></span>
            </p>
            {role === "admin" ? <button className=' w-[90px] px-2 py-[2px] bg-yellow-200 font-[500] rounded-[8px] text-yellow-900' disabled>Admin</button> : <button className='w-[90px] px-2 py-[2px] bg-gray-200 font-[500] rounded-[8px] text-gray-800' disabled>Member</button>}
            <p className='flex justify-end'>
                <button onClick={makeAdmin} className='text-blue-900 px-3 py-2 rounded-[30px] bg-blue-100 hover:bg-blue-200 flex  items-center disabled:bg-gray-200 text-gray-600' disabled={role === "admin" ? true : false}><AiFillCrown color={role === "admin" ? "#8B929C" : "#3B82F6"} className='text-[18px]' /> <p className='ml-1 font-[500] '>{role === "admin" ? "Promoted" : "Promote"} </p></button>
                {/* <button onClick={() => handleDelete(user.email)} className='icon-button bg-red-100 hover:bg-red-200'><AiFillDelete className='text-red-500 text-[18px]' /></button> */}
                {user?.role !== "admin" && <label for="confirmModal" onClick={() => setShowModal(user)} className=' icon-button bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-gray-600'><AiFillDelete color="#EF4444" className='text-red-500 text-[18px]' /></label>}
            </p>

        </div>
    );
};

export default TableRow;