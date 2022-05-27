import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/mainlogo.png'
const Footer = () => {
    return (
        <div>
            <div className=' bg-primary'>
                <div className="max-w-7xl mx-auto ">
                    <div className="grid grid-cols-4 gap-4 py-6 text-white footer-container">
                        <div>
                            {/* <h1 className='mb-2 text-[14px] font=[600]'>Metal Shovel Manufacturer</h1> */}
                            <img className='w-[230px]' src={logo} alt="" />
                            <p>We manufacture the Wooden handles for shovels and brooms.</p>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] mb-3'>Docs</h1>
                            <ul>
                                <li className='text-gray-400 hover:text-white'><Link to="/blogs">Blogs</Link></li>
                                <li className='text-gray-400 hover:text-white'><Link to="/reviews">Reviews</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] mb-3'>Terms</h1>
                            <ul>
                                <li className='text-gray-400 hover:text-white'><Link to="/blogs">Privacy Policy</Link></li>
                                <li className='text-gray-400 hover:text-white'><Link to="/reviews">Terms and Conditions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px] mb-3'>Support</h1>
                            <ul>
                                <li className='text-gray-400 hover:text-white'><Link to="/">Contact Us</Link></li>
                                <li className='text-gray-400 hover:text-white'><Link to="/">About Us</Link></li>
                                <li className='text-gray-400 hover:text-white'><Link to="/">Live Chat</Link></li>
                            </ul>
                        </div>
                    </div>
                    <h1 className="text-center py-2 text-white">Rights reserved to <span className="font-bold">BoldShovel.com</span></h1>
                </div>


            </div>
        </div>
    );
};

export default Footer;