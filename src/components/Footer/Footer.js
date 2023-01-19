import { Link } from "react-router-dom";
import React from "react";
import logo from "../../images/mainlogo.png";
const Footer = () => {
  return (
    <div>
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-5 gap-4 py-6 text-white footer-container">
            <div>
              {/* <h1 className='mb-2 text-[14px] font=[600]'>Metal Shovel Manufacturer</h1> */}
              <img className="w-[230px]" src={logo} alt="" />
              <p>
                Delivering incredible aesthetics and an unbridled typing
                experience.
              </p>
            </div>
            <div></div>
            <div>
              <h1 className="font-bold text-[20px] mb-3">About Us</h1>
              <ul>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/Brand-Story">Brand Story</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/FAQs">FAQs</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/Contact-Us">Contact Us</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/Influencer-Recruit">Influencer Recruit</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/Become-A-Dealer">Become A Dealer</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-[20px] mb-3">Site Polices</h1>
              <ul>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/blogs">Shipping Policy</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/reviews">Warranty Policy</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/blogs">Return & Refund Policy</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/reviews">Privacy Policy</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/blogs">Terms of Service</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/reviews">Payment Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-[20px] mb-3">Product Guide</h1>
              <ul>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/">F97 Series | Compact 96% Keyboards</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/">80 Series | Compact TKL Keyboards</Link>
                </li>
                <li className="text-gray-400 hover:text-white">
                  <Link to="/">ZX75 Series | 75% Knob Version Keyboards</Link>
                </li>
              </ul>
            </div>
          </div>
          <h1 className="text-center pt-6 pb-3 text-white text-[14px]">
            Copyright @<span className=""> BoldShovel.com</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
