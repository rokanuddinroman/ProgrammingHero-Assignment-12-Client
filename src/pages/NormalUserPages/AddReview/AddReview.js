import { MdReviews } from "react-icons/md";
import React from "react";
import { IoIosQuote } from "react-icons/io";
import useProduct from "../../../hooks/useProduct";
import useReview from "../../../hooks/useReview";
import Star from "../../../components/Home/Star";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import toast from "react-hot-toast";
import ApiLoadingLight from "../../../components/Loading/ApiLoadingLight";

const AddReview = () => {
  const { products } = useProduct();
  const { reviews, spinner } = useReview();
  const [user] = useAuthState(auth);

  const handleAddReview = (event) => {
    event.preventDefault();
    const myReview = {
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      productName: event.target.productName.value,
      reviewMessage: event.target.review.value,
      rating: event.target.rating.value,
    };
    axios
      .post("https://qwerty-gi38.onrender.com/review", myReview)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast.success("Review Created");
        }
      });
  };

  return (
    <div className="product-form">
      <h3 className="text-[20px] font-[600] flex items-center">
        <MdReviews
          color="white"
          className="inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]"
        />
        Add Review
      </h3>
      <form onSubmit={handleAddReview}>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
          <div>
            <label htmlFor="product">Product Name</label>
            <select
              className="rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb] select w-full"
              name="productName"
              id="productName"
              required
            >
              {products.map((product) => (
                <option>{product.productName}</option>
              ))}
            </select>
            <label htmlFor="rating">Rating</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="number"
              name="rating"
              id="rating"
              max="5"
              maxLength="5"
              required
            />
          </div>
          <div>
            <label htmlFor="review">Review</label>
            <textarea
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 h-[136px] border-[2px] border-[#e3e8eb]"
              type="text"
              name="review"
              id="review"
              cols="20"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <div className="text-right">
          <input
            className="py-[10px] px-4 bg-primary rounded-[8px] text-white font-[500] active:border-[0px]"
            type="submit"
            value="Create Review"
          />
        </div>
      </form>
      <hr className="my-5 bg-gray-300" />
      <h3 className="text-[20px] font-[600] flex items-center mt-4">
        <MdReviews
          color="white"
          className="inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]"
        />
        Other reviews
      </h3>
      {spinner ? (
        <ApiLoadingLight />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {reviews.map((review) => (
            <div className="bg-white p-4 relative review-card drop-shadow">
              <IoIosQuote className="absolute top-[100px] right-0 text-[60px] text-[#1dff6165]" />
              <h1 className="mb-4 text-[18px] qoute">{review.reviewMessage}</h1>
              <div className="p-3 rounded-[8px] bg-slate-100 flex items-center">
                <img
                  className="w-[60px] h-[60px] rounded-[8px] object-cover mr-4"
                  src={review.photoURL}
                  alt=""
                />
                <div className="">
                  <h1 className="text-[18px] font-[600] mb-[2px]">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddReview;
