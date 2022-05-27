import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoCart } from 'react-icons/io5';
import useProduct from '../../hooks/useProduct';
import ApiLoadingLight from '../Loading/ApiLoadingLight';
import Product from './Product';

const ProductShowcase = () => {
    const { products, setProducts, spinner } = useProduct()
    return (
        <div id='products' className='max-w-7xl mx-auto'>

            <div className='flex items-center justify-between'>
                <h1 className='text-3xl mt-8 mb-4 font-bold flex items-center'><IoCart color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Products</h1>
                <button className='py-2 px-8 rounded-[8px] border-[gray] border-[1px]'>Filter</button>
            </div>
            <div className='relative search-div mb-6'>
                <input className='' placeholder="Search an item" type="text" />
                <FiSearch className='absolute top-[8px] text-[gray] left-[10px] text-[28px]' />
            </div>
            {spinner ? <ApiLoadingLight /> : <div className="product-cards">
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>}
        </div>
    );
};

export default ProductShowcase;