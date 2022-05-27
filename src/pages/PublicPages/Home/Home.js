import React from 'react';
import Stats from '../../../components/Home/Stats';
import { useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import '../../../styles/Home.css'
import ProductShowcase from '../../../components/Home/ProductShowcase';
import Reviews from '../../../components/Home/Reviews';
import HiringSection from '../../../components/Home/HiringSection';
import Clients from '../../../components/Home/Clients';
import Newsletter from '../../../components/Home/Newsletter';
const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className='bg-primary mt-[56px] pb-6'>
                <div className="max-w-7xl mx-auto home-container">
                    <div className="hero-container">
                        <div className="hero-introduction mt-[6rem] mb-[5.2rem]">
                            <h1 className='hero-heading'><span>100% Made of Metal</span> Shovel Manufacturer</h1>
                            <p className='text-[#9ca3af] my-3'>We manufacture the Wooden handles for shovels and brooms of the following diameters: 22 mm - with one end rounded and the other with screw end, 24 mm - with one end rounded and the other with screw end, 25 mm - with one end rounded and the other with cone shape. </p>
                            <button onClick={() => navigate("/reviews")} class="light-button text-primary flex items-center"><IoCartOutline style={{ fontSize: "20px", display: "inline", marginRight: "0.5rem" }} />Watch Reviews</button>
                        </div>
                        <img className="hero-image" src="https://cdn.dribbble.com/users/788099/screenshots/4588343/media/95cb50acce4217fd690089124e6b8b07.png?compress=1&resize=400x300" alt="" />
                    </div>
                    <Stats />
                </div>
            </div>
            <ProductShowcase />
            <Clients />
            <HiringSection />
            <Reviews />
            <Newsletter />
        </div>
    );
};

export default Home;