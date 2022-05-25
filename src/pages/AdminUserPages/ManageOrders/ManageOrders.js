import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { IoCart } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

const ManageOrders = () => {
    const [myProducts, setMyProducts] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then(data => {
                setMyProducts(data)
            })
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Sure?')
        if (proceed) {
            const url = `http://localhost:4000/myorders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myProducts.filter(product => product._id !== id)
                    setMyProducts(remaining)
                })
        }
    }
    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><IoCart color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Orders</h3>

            <div className='product-rows mt-2'>
                <div className='product-row-heading'>
                    <p>Product Name ({myProducts.length})</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>Status
                    </p>
                    <p>Actions</p>
                </div>
                {
                    myProducts.map(product => <div className='product-row flex items-center'>
                        <p className='product-name'>
                            <img src={product.image} alt="" />
                            {product.productName}</p>
                        <p>{product.quantity}</p>
                        <p>{product.totalPrice}$</p>
                        <p className='quantity-column relative '>
                            <button className=' w-[90px] px-2 py-[2px] bg-green-100 font-[500] rounded-[8px] text-green-600' disabled>{product?.status}</button>
                        </p>
                        <p className='flex text-right justify-end'>
                            <button onClick={() => handleDelete(product._id)} className='icon-button bg-red-100 hover:bg-red-200'><AiFillDelete className='text-red-500 text-[18px]' /></button></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;