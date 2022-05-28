import React, { useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import { IoCart } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';
import confirmModal from '../../../components/Dashboard/confirmModal';
import ApiLoadingLight from '../../../components/Loading/ApiLoadingLight';

const ManageProducts = () => {
    const [showModal, setShowModal] = useState(null)
    const { products, setProducts, spinner } = useProduct()
    const handleDelete = id => {
        const url = `https://salty-shelf-96840.herokuapp.com/product/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id)
                setProducts(remaining)
            })
    }

    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><IoCart color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Products</h3>

            <div className='product-rows mt-2'>
                <div className='product-row-heading'>
                    <p>Product Name ({products.length})</p>
                    <p>Available Quantity</p>
                    <p>Price Per Unit</p>
                    <p>Minimum Quantity</p>
                    <p>Actions</p>
                </div>
                {spinner ? <ApiLoadingLight /> :
                    products.map(product => <div className='product-row flex items-center'>
                        <p className='product-name'>
                            <img src={product.image} alt="" />
                            {product.productName}</p>
                        <p>{product.availableQuantity}</p>
                        <p>{product.perUnitPrice}$</p>
                        <p className='quantity-column relative '>
                            <span className=''>{product?.minimumOrderQuantity}</span>
                        </p>
                        <p className='flex text-right justify-end'>
                            {/* <button onClick={() => handleDelete(product._id)} className='icon-button bg-red-100 hover:bg-red-200'><AiFillDelete className='text-red-500 text-[18px]' /></button> */}
                            {!product?.paid && <label for="confirmModal" onClick={() => setShowModal(product)} className=' icon-button bg-red-100 hover:bg-red-200'><AiFillDelete color="#EF4444" className='text-red-500 text-[18px]' /></label>}
                        </p>
                        {
                            showModal && <div>
                                <input type="checkbox" id="confirmModal" class="modal-toggle" />
                                <div class="modal modal-bottom sm:modal-middle">
                                    <div class="modal-box">
                                        <h3 class="font-bold text-lg border-b-[2px]">Warning</h3>
                                        <p class="py-4">You are going to delete this Product!</p>
                                        <div class="modal-action">
                                            <label onClick={() => setShowModal(null)} for="confirmModal" class="btn">Cancel</label>
                                            <label onClick={() => handleDelete(product._id)} for="confirmModal" class="btn bg-red-500">Delete</label>
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

export default ManageProducts;