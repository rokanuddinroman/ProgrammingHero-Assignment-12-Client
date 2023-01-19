import React, { useEffect, useState } from "react";
import "../../styles/Review.css";
import { IoIosQuote } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Star from "./Star";
import ApiLoadingLight from "../Loading/ApiLoadingLight";
import ApiLoading from "../Loading/ApiLoading";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://qwerty-gi38.onrender.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpinner(false);
      });
  }, []);
  return (
    <div className="mb-8">
      {/* <h1 className='max-w-7xl mx-auto text-3xl mt-8 mb-4 font-bold flex items-center justify-left reviews-title'><FaStar color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' /> <>Customer Reviews</></h1> */}
      <div className="bg-[#f5f5f5]">
        <h1 className="text-[16px] text-center pb-0 pt-4">Reviews</h1>
        <h1 className="font-[800] text-[30px] text-center">Customer Reviews</h1>
        <p className="text-[14px] pb-4 text-center">
          Look what people are saying about us. read some of the latest reviews.
        </p>
        {spinner ? (
          <ApiLoadingLight />
        ) : (
          <div className="review-container max-w-7xl mx-auto mb-4">
            {reviews.map((review) => (
              <div className="bg-white rounded-[10px] p-4 relative review-card">
                <div className="rounded-[10px] flex items-center review-poster mb-4">
                  <img
                    className="w-[50px] h-[50px] rounded-[50%] object-cover mr-4"
                    src={review.photoURL}
                    alt=""
                  />
                  <div className="">
                    <h1
                      style={{ lineHeight: "120%" }}
                      className="text-[16px] font-[600] mb-[0px]"
                    >
                      {review.displayName}
                    </h1>
                    {Math.ceil(review.rating) === 5 && (
                      <div class="rating">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    )}
                    {Math.ceil(review.rating) === 4 && (
                      <div class="rating">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    )}
                    {Math.ceil(review.rating) === 3 && (
                      <div class="rating">
                        <Star />
                        <Star />
                        <Star />
                      </div>
                    )}
                    {Math.ceil(review.rating) === 2 && (
                      <div class="rating">
                        <Star />
                        <Star />
                      </div>
                    )}
                    {Math.ceil(review.rating) === 1 && (
                      <div class="rating">
                        <Star />
                      </div>
                    )}
                  </div>
                </div>
                <h1 className="text-[16px] font-[500]">
                  {review.reviewMessage}
                </h1>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
