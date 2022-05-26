import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '../../../components/Dashboard/CheckoutForm';
import { MdPayment } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import ApiLoadingLight from '../../../components/Loading/ApiLoadingLight';

const stripePromise = loadStripe('pk_test_51L3SIbLKpmyhEGCQF5gMwTVLJH0Wm44KRHY5SosBmiRMeHjyMAhxvbGGxqaPH8aNOrSqg0IY7pyNhufeiSGhzQox00LGZRKILQ');

const Payment = () => {
    const { paymentId } = useParams()
    const url = `http://localhost:4000/orders/${paymentId}`;

    const { data: order, isLoading } = useQuery(['orders', paymentId], () => fetch(url, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <ApiLoadingLight />
    }

    return (
        <div>
            <h3 className='text-[20px] font-[600] flex items-center'><MdPayment color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />Complete your payment</h3>

            <div className='grid grid-cols-2 gap-4 mt-6'>
                <div>
                    <h1 className='mt-9 text-3xl font-bold'>Product : {order?.productName}</h1>
                    <h1 className='mt-5 text-xl font-bold'>{order?.email}</h1>
                    <h2 className='text-green-400 text-[14px]'>ProductID : {paymentId}</h2>
                </div>
                <div>
                    <h1 className='my-5 flex items-center text-3xl font-bold'><FaUserCircle className='mr-2 text-4xl text-[#00BA33] bg-[#e6f8ec] p-[6px] rounded-[50%]' />Your Card</h1>
                    <div className='rounded-[8px] border-[2px] border-gray-200 p-4'>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;