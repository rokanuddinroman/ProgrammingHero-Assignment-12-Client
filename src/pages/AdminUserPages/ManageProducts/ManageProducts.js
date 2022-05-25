import React from 'react';
import useProduct from '../../../hooks/useProduct';
import { IoCart } from 'react-icons/io5';
import { AiFillDelete } from 'react-icons/ai';

const ManageProducts = () => {
    const { products, setProducts } = useProduct()
    const handleDelete = id => {
        const proceed = window.confirm('Sure?')
        if (proceed) {
            const url = `http://localhost:4000/product/${id}`
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
                {
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
                            <button onClick={() => handleDelete(product._id)} className='icon-button bg-red-100 hover:bg-red-200'><AiFillDelete className='text-red-500 text-[18px]' /></button>
                        </p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;