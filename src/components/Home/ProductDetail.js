import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/ProductDetail.css'
import { IoCart } from 'react-icons/io5';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
import axios from 'axios';
const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [user] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:4000/product/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [product])

    const handleQuantity = event => {
        event.preventDefault()
        const quantityValue = event.target.quantity.value
        setQuantity(quantityValue)
        const priceInNumber = parseInt(product.perUnitPrice)
        const quantityInNumber = parseInt(quantityValue)
        const totalPrice = priceInNumber * quantityInNumber
        setTotalPrice(String(totalPrice))
    }

    const handleOrder = () => {
        const myOrder = {
            email: user.email,
            productName: product.productName,
            quantity: quantity,
            totalPrice: totalPrice,
            image: product.image,
            status: "pending"
        }
        axios.post('http://localhost:4000/orders', myOrder)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product Added')
                }
            })
    }

    return (
        <div className="product-detail mt-24 max-w-7xl mx-auto ">
            <img src={product.image} alt="" />
            <div>
                <h1>{product.productName}</h1>
                <p>{product.description}</p>
                <h2>{product.perUnitPrice}$</h2>
                <div className='p-[0.7rem] border-[1px] border-gray-400 mb-[0.5rem] rounded-[8px]'>
                    <h3 className='text-[20px] font-[600] flex items-center'><IoCart color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />Available Items {product.availableQuantity}</h3>
                    <hr className='my-3 bg-gray-300' />
                    <form className='flex' onSubmit={handleQuantity}>
                        <input style={{ borderRadius: "7px 0px 0px 7px" }} className='w-[100%]' name="quantity" type="number" />
                        <input style={{ borderRadius: "0px 7px 7px 0px" }} className='border-primary bg-primary text-white font-bold' type="submit" value="Add" />
                    </form>
                    <hr className='my-3 bg-gray-300' />
                    <div className='flex justify-between'><h6 className="font-[500]">You are buying</h6>
                        <h4>{quantity ? quantity : "No"} items</h4></div>
                    <hr className='my-3 bg-gray-300' />
                    <div className='flex justify-between'><h6 className="font-[500]">Total Price</h6><h4>{totalPrice ? totalPrice : "0"}$</h4></div>
                </div>
                <button onClick={handleOrder} className='py-[10px] w-[100%] font-[500] bg-primary text-white rounded-[8px]'>Book Now</button>
            </div>
        </div>
    );
};

export default ProductDetail;