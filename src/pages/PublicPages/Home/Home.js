import React from "react";
import Stats from "../../../components/Home/Stats";
import { useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "../../../styles/Home.css";
import ProductShowcase from "../../../components/Home/ProductShowcase";
import Reviews from "../../../components/Home/Reviews";
import HiringSection from "../../../components/Home/HiringSection";
import Clients from "../../../components/Home/Clients";
import Newsletter from "../../../components/Home/Newsletter";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-primary mt-[56px] pb-6">
        <div className="max-w-7xl mx-auto home-container">
          <div className="hero-container">
            <div className="hero-introduction mt-[6rem] mb-[5.2rem]">
              <h1 className="hero-heading">
                <span>Grab Upto 40% Off On</span>Selected Keyboard
              </h1>
              <p className="text-[#9ca3af] my-3">
                Mechanical keyboards are computer keyboards that have switches
                under each key, rather than the rubber membranes used in most
                common keyboards.{" "}
              </p>
              <button
                onClick={() => navigate("/products")}
                class="light-button text-primary flex items-center"
              >
                <IoCartOutline
                  style={{
                    fontSize: "20px",
                    display: "inline",
                    marginRight: "0.5rem",
                  }}
                />
                Browse Keyboards
              </button>
            </div>
            <div className="hero-image">
              <img
                style={{
                  objectFit: "cover",
                  aspectRatio: "2/1",
                }}
                src="https://cdn.shopify.com/s/files/1/1183/1328/files/feature3_95d0b377-4213-49ff-a0b3-a4bc319c0062_720x.jpg?v=1663225322"
                alt=""
              />
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    aspectRatio: "1/1",
                  }}
                  src="https://cdn.shopify.com/s/files/1/1183/1328/files/9775_540x.jpg?v=1666060942"
                  alt=""
                />
                <img
                  style={{
                    objectFit: "cover",
                    aspectRatio: "1/1",
                  }}
                  src="https://cdn.shopify.com/s/files/1/1183/1328/files/1_55e9895a-8385-4c1e-8952-294708b9f322_540x.jpg?v=1666058377"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* <Stats /> */}
        </div>
      </div>
      <Clients />
      <ProductShowcase />
      <div>
        <img
          style={{
            objectFit: "cover",
            height: "350px",
            width: "100%",
          }}
          src="https://cdn.shopify.com/s/files/1/1183/1328/files/1_6408dca8-ff89-4cf4-ae78-af41265de1a5_1512x.jpg?v=1663224744"
          alt=""
        />
      </div>
      <Reviews />
      {/* <HiringSection /> */}

      <Newsletter />
    </div>
  );
};

export default Home;
