import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { _id, productName, image, description, minimumOrderQuantity, availableQuantity, perUnitPrice } = props.product
    const navigate = useNavigate()
    const handleProductRoute = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product-card'>
            <img src={image} alt="" />
            <div className='p-2'>
                <div className='pl-1'>
                    <h1>{productName}</h1>
                    <p className='text-[#22D3EE] font-[500]'>{availableQuantity} items available.</p>
                    <p className='mb-2'>{description}</p>
                    <span><h2 className='inline pt-[2px]'>{perUnitPrice}$</h2>/p</span>
                </div>
                <button onClick={() => handleProductRoute(_id)} className='mt-2 w-[100%] p-[10px] rounded-[8px] bg-primary text-white font-[500]'>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;