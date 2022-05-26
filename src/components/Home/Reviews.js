import React, { useEffect, useState } from 'react';
import '../../styles/Review.css'
import { IoIosQuote } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import Star from './Star';
import ApiLoadingLight from '../Loading/ApiLoadingLight';
import ApiLoading from '../Loading/ApiLoading';
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [spinner, setSpinner] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                setSpinner(false)
            })
    }, [])
    return (
        <div className="my-8">
            <h1 className='max-w-7xl mx-auto text-3xl mt-8 mb-4 font-bold flex items-center justify-left'><FaStar color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' /> <>Customer Reviews</></h1>
            <div className="bg-[#f5f5f5]">
                {spinner ? <ApiLoadingLight /> : <div className="review-container max-w-7xl mx-auto">
                    {
                        reviews.map(review =>
                            <div className='bg-white p-4 relative review-card drop-shadow'>
                                <IoIosQuote className='absolute top-[100px] right-0 text-[60px] text-[#1dff6165]' />
                                <h1 className="mb-4 text-[18px] qoute">{review.reviewMessage}</h1>
                                <div className="p-3 rounded-[8px] bg-slate-100 flex items-center">
                                    <img className='w-[60px] h-[60px] rounded-[8px] object-cover mr-4' src={review.photoURL} alt="" />
                                    <div className=''>
                                        <h1 className='text-[18px] font-[600] mb-[2px]'>{review.displayName}</h1>
                                        {
                                            Math.ceil(review.rating) === 5 && <div class="rating">
                                                <Star /><Star /><Star /><Star /><Star />
                                            </div>}
                                        {
                                            Math.ceil(review.rating) === 4 && <div class="rating">
                                                <Star /><Star /><Star /><Star />
                                            </div>}
                                        {
                                            Math.ceil(review.rating) === 3 && <div class="rating">
                                                <Star /><Star /><Star />
                                            </div>}
                                        {
                                            Math.ceil(review.rating) === 2 && <div class="rating">
                                                <Star /><Star />
                                            </div>}
                                        {
                                            Math.ceil(review.rating) === 1 && <div class="rating">
                                                <Star />
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>}
            </div>
        </div>
    );
};

export default Reviews;