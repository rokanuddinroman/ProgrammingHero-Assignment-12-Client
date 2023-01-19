import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { IoBagAdd } from "react-icons/io5";
import "../../../styles/ProductForm.css";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const myProduct = {
      productName: event.target.productName.value,
      description: event.target.description.value,
      availableQuantity: event.target.availableQuantity.value,
      minimumOrderQuantity: event.target.minimumOrderQuantity.value,
      perUnitPrice: event.target.perUnitPrice.value,
      image: event.target.image.value,
    };
    console.log(myProduct);
    axios
      .post("https://qwerty-gi38.onrender.com/product", myProduct)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast.success("Product is Added");
        }
      });
  };
  return (
    <div className="">
      <h3 className="text-[20px] font-[600] flex items-center">
        <IoBagAdd
          color="white"
          className="inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]"
        />
        Add Product
      </h3>
      <form onSubmit={handleAddProduct} className="product-form mt-4">
        <div className="product-form-container grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="productName">Product Name</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="text"
              name="productName"
              id="productName"
              required
            />
            <label htmlFor="description">Description</label>
            <textarea
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 h-[136px] border-[2px] border-[#e3e8eb]"
              type="text"
              name="description"
              id="description"
              cols="20"
              rows="10"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="availableQuantity">Available Quantity</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="number"
              name="availableQuantity"
              id="availableQuantity"
              required
            />
            <label htmlFor="minimumOrderQuantity">Minimum Order Quantity</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="number"
              name="minimumOrderQuantity"
              id="minimumOrderQuantity"
              required
            />
            <label htmlFor="perUnitPrice">Price Per Unit</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="number"
              name="perUnitPrice"
              id="perUnitPrice"
              required
            />
          </div>
          <div>
            <label htmlFor="image">Upload Product Thumbnail</label>
            <input
              className="w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]"
              type="text"
              name="image"
              id="image"
              required
            />
          </div>
        </div>
        <div className="text-right">
          <input
            className="py-[10px] px-4 bg-primary rounded-[8px] text-white font-[500] active:border-[0px]"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
