import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Product = (props) => {
  const {
    _id,
    productName,
    image,
    description,
    minimumOrderQuantity,
    availableQuantity,
    perUnitPrice,
  } = props.product;
  const navigate = useNavigate();
  const handleProductRoute = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="product-card">
      <img onClick={() => handleProductRoute(_id)} src={image} alt="" />
      <div>
        <div className="product-heading">
          <h1 onClick={() => handleProductRoute(_id)}>{productName}</h1>
          {/* <p className='text-[#22D3EE] font-[500]'>{availableQuantity} items available.</p>
                    <p className='text-[#22D3EE] font-[500]'>Minimum {minimumOrderQuantity} items have to buy.</p> */}

          <span>
            <h2>{perUnitPrice}$</h2>
          </span>
        </div>
        <p className="product-description">{description}</p>
        <div
          style={{
            marginBottom: "8px",
            display: "flex",
            gap: "2px",
            alignItems: "center",
          }}
        >
          <AiFillStar size={16} color="#35A43B" />
          <AiFillStar size={16} color="#35A43B" />
          <AiFillStar size={16} color="#35A43B" />
          <AiFillStar size={16} color="#35A43B" />
          <AiFillStar size={16} color="#35A43B" />
          <span style={{ fontSize: "14px", color: "rgb(95, 95, 95)" }}>
            (1)
          </span>
        </div>
        <button
          onClick={() => handleProductRoute(_id)}
          className="w-[100%] p-[10px] rounded-[8px] border-2 border-primary text-primary font-[500]"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
