import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoCart } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import auth from '../../../firebase.init';
import '../../../styles/Table.css'
import ApiLoadingLight from '../../../components/Loading/ApiLoadingLight';
const MyOrders = () => {
    const [myProducts, setMyProducts] = useState([])
    const [spinner, setSpinner] = useState(false)
    const [showModal, setShowModal] = useState(null)
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const getProducts = async () => {
            setSpinner(false)
            const email = user.email;
            const url = `https://salty-shelf-96840.herokuapp.com/myorders?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyProducts(data)
            setSpinner(false)
            console.log(data)
        }
        getProducts()

    }, [user])

    const handleDelete = id => {
        const url = `https://salty-shelf-96840.herokuapp.com/myorders/${id}`
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

    // const productPayment = () => {

    // }

    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><IoCart color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />My Orders</h3>

            <div className='product-rows mt-2'>
                <div className='product-row-heading'>
                    <p>Product Name ({myProducts.length})</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p style={{ display: "flex", justifyContent: "space-between" }}>Status
                    </p>
                    <p>Actions</p>
                </div>
                {spinner ? <ApiLoadingLight /> :
                    myProducts.map(product => <div className='product-row flex items-center'>
                        <div className="flex flex-wrap">
                            <p className='product-name'>
                                <img src={product.image} alt="" />
                                {product.productName}
                            </p>
                            <p className="text-[12px] text-green-500">{product.transactionId}</p>
                        </div>
                        <p>{product.quantity}</p>
                        <p>{product.totalPrice}$</p>
                        <p className='quantity-column relative '>
                            {product?.status === "unpaid" && <button className=' w-[90px] px-2 py-[2px] bg-red-100 font-[500] rounded-[8px] text-red-600' disabled>unpaid</button>}
                            {product?.status === "shipped" && <button className=' w-[90px] px-2 py-[2px] bg-green-100 font-[500] rounded-[8px] text-green-600' disabled>shipped</button>}
                            {product?.status === "pending" && <button className=' w-[90px] px-2 py-[2px] bg-yellow-200 font-[500] rounded-[8px] text-yellow-900' disabled>pending</button>}
                        </p>
                        <p className='flex text-right justify-end'>
                            <button onClick={() => navigate(`/dashboard/payment/${product._id}`)} className='text-blue-900 px-3 rounded-[30px] bg-blue-100 py-[4px] px-4 hover:bg-blue-200 flex  items-center disabled:bg-gray-200 text-gray-600' disabled={product?.paid === true}><MdPayment color={product?.paid === true ? "#8B929C" : "#3B82F6"} className='text-[18px]' /> <p className='ml-1 font-[500] '>{product?.paid === true ? "Completed" : "Pay"} </p></button>
                            {/* <button onClick={() => handleDelete(product._id)} className=' icon-button bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-gray-600' disabled={product?.paid === true}><AiFillDelete color={product?.paid === true ? "#8B929C" : "#EF4444"} className='text-red-500 text-[18px]' /></button> */}
                            {!product?.paid && <label for="confirmModal" onClick={() => setShowModal(product)} className=' icon-button bg-red-100 hover:bg-red-200 disabled:bg-gray-200 text-gray-600' disabled={product?.paid === true}><AiFillDelete color={product?.paid === true ? "#8B929C" : "#EF4444"} className='text-red-500 text-[18px]' /></label>}
                        </p>
                        {
                            showModal && <div>
                                <input type="checkbox" id="confirmModal" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg border-b-[2px]">Congratulations random Interner user!</h3>
                                        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                        <div class="modal-action">
                                            <label onClick={() => setShowModal(null)} for="confirmModal" class="btn">Cancel</label>
                                            <label onClick={() => handleDelete(showModal._id)} for="confirmModal" class="btn bg-red-500">Delete</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>)
                }

            </div>

        </div>
    );
};

export default MyOrders;