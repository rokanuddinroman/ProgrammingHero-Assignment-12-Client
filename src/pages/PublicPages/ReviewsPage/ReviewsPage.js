import React from 'react';
import { IoIosQuote } from 'react-icons/io';
import { MdReviews } from 'react-icons/md';
import Star from '../../../components/Home/Star';
import ApiLoadingLight from '../../../components/Loading/ApiLoadingLight';
import useReview from '../../../hooks/useReview';

const ReviewsPage = () => {
    const { reviews, spinner } = useReview()

    return (
        <div className='my-[70px] max-w-7xl mx-auto review-page'>
            <h3 className='text-[20px] font-[600] flex items-center mt-4'><MdReviews color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />All Reviews</h3>
            {spinner ? <ApiLoadingLight /> : <div className='grid grid-cols-3 gap-4 mt-4 review-page-card'>
                {
                    reviews.map(review =>
                        <div className='bg-white p-4 relative review-card drop-shadow mb-4'>
                            {/* <IoIosQuote className='absolute top-[100px] right-0 text-[60px] text-[#1dff6165]' /> */}
                            <h1 className="mb-[2rem] text-[16px] font-[500]">{review.reviewMessage}</h1>
                            <div className="p-3 bg-slate-100 rounded-[8px] flex items-center review-poster">
                                <img className='w-[50px] h-[50px] rounded-[8px] object-cover mr-4' src={review.photoURL} alt="" />
                                <div className=''>
                                    <h1 className='text-[16px] font-[600] mb-[2px]'>{review.displayName}</h1>
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
    );
};

export default ReviewsPage;