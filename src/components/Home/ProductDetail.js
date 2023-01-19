import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/ProductDetail.css";
import { IoCart } from "react-icons/io5";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";
import axios from "axios";
const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [agree, setAgree] = useState(true);
  // const initialState = product.minimumOrderQuantity
  // console.log(() => initialState)
  const [quantity, setQuantity] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [user] = useAuthState(auth);

  const defaultTotalPrice =
    parseInt(product.minimumOrderQuantity) * parseInt(product.perUnitPrice);

  useEffect(() => {
    const url = `https://qwerty-gi38.onrender.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [product]);

  const handleQuantity = (event) => {
    if (
      event.target.value < product.minimumOrderQuantity ||
      event.target.value > product.availableQuantity
    ) {
      setAgree(false);
      toast.error("Your order is not acceptable");
    }
    if (
      parseInt(event.target.value) >= parseInt(product.minimumOrderQuantity) &&
      parseInt(event.target.value) <= parseInt(product.availableQuantity)
    ) {
      setAgree(true);
    }
    // event.preventDefault()
    console.log(event.target.value);
    console.log(agree);
    console.log("avail", product.availableQuantity);
    console.log("min", product.minimumOrderQuantity);
    const quantityValue = event.target.value || "0";
    setQuantity(quantityValue);
    const priceInNumber = parseInt(product.perUnitPrice || "0");
    const quantityInNumber = parseInt(quantityValue);
    const totalPrice = priceInNumber * quantityInNumber;
    setTotalPrice(String(totalPrice));
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const myOrder = {
      email: user.email,
      displayName: user.displayName,
      userAddress: event.target.address.value,
      userNumber: event.target.phoneNumber.value,
      productName: product.productName,
      quantity: quantity || product.minimumOrderQuantity,
      totalPrice: totalPrice || defaultTotalPrice,
      image: product.image,
      status: "unpaid",
    };
    axios
      .post("https://qwerty-gi38.onrender.com/orders", myOrder)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast.success("Order is unpaid. Check your Order Page");
        }
      });
  };

  return (
    <div className="product-detail mt-24 max-w-7xl mx-auto ">
      <img src={product.image} alt="" />
      <div>
        <h1>{product.productName}</h1>
        <p>{product.description}</p>
        <h2>{product.perUnitPrice}$</h2>
        <div className="p-[0.7rem] border-[1px] border-gray-400 mb-[0.5rem] rounded-[8px]">
          <h3 className="text-[20px] font-[600] flex items-center">
            <IoCart
              color="white"
              className="inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]"
            />
            Available Items {product.availableQuantity}
          </h3>
          <hr className="my-3 bg-gray-300" />
          <form className="flex">
            <input
              onChange={handleQuantity}
              style={{ borderRadius: "7px 0px 0px 7px" }}
              defaultValue={product.minimumOrderQuantity}
              className="w-[100%]"
              name="quantity"
              type="number"
            />
            {/* <input style={{ borderRadius: "0px 7px 7px 0px" }} className='border-primary bg-primary text-white font-bold' type="submit" value="Add" /> */}
          </form>
          <hr className="my-3 bg-gray-300" />
          <div className="flex justify-between">
            <h6 className="font-[500]">You have to buy</h6>
            <h4>{product.minimumOrderQuantity}</h4>
          </div>
          <hr className="my-3 bg-gray-300" />
          <div className="flex justify-between">
            <h6 className="font-[500]">You are buying</h6>
            <h4>{quantity ? quantity : product.minimumOrderQuantity} items</h4>
          </div>
          <hr className="my-3 bg-gray-300" />
          <div className="flex justify-between">
            <h6 className="font-[500]">Total Price</h6>
            <h4>{totalPrice ? totalPrice : defaultTotalPrice}$</h4>
          </div>
          <hr className="my-3 bg-gray-300" />
          <form onSubmit={handleOrder}>
            <label htmlFor="name" className="font-[500]">
              Name
            </label>
            <input
              className="w-[100%] rounded-[7px] mb-3 font-[500] bg-slate-100"
              type="text"
              value={user.displayName}
              id="name"
              readOnly
            />
            <label htmlFor="address" className="font-[500]">
              Email
            </label>
            <input
              className="w-[100%] rounded-[7px] mb-3 font-[500] bg-slate-100"
              type="text"
              value={user.email}
              id="address"
              required
            />
            <label htmlFor="address" className="font-[500]">
              Address
            </label>
            <input
              className="w-[100%] rounded-[7px] mb-3"
              type="text"
              placeholder="Enter Address"
              id="address"
              required
            />
            <label htmlFor="phoneNumber" className="font-[500]">
              Phone Number
            </label>
            <input
              className="w-[100%] rounded-[7px] mb-4"
              type="number"
              placeholder="Phone Number"
              id="phoneNumber"
              required
            />
            <button
              className="py-[10px] w-[100%] font-[500] bg-primary text-white rounded-[8px] booknow disabled:bg-gray-400"
              disabled={agree ? false : true}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
