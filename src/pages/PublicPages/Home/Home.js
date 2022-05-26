import React from 'react';
import Stats from '../../../components/Home/Stats';
import { IoCartOutline } from 'react-icons/io5';
import '../../../styles/Home.css'
import ProductShowcase from '../../../components/Home/ProductShowcase';
import Reviews from '../../../components/Home/Reviews';
const Home = () => {
    return (
        <div>
            <div className='bg-primary mt-[56px] pb-6'>
                <div className="max-w-7xl mx-auto home-container">
                    <div className="hero-container">
                        <div className="hero-introduction mt-[6rem] mb-[5.2rem]">
                            <h1 className='hero-heading'><span>Beautiful UI components,</span> crafted with Tailwind CSS</h1>
                            <p className='text-[#9ca3af] my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni iste magnam harum mollitia numquam voluptatem ipsum, a, consequatur illum ratione, molestias rerum velit! Quos quae excepturi blanditiis, quod cupiditate illum?</p>
                            <button class="light-button text-primary flex items-center"><IoCartOutline style={{ fontSize: "20px", display: "inline", marginRight: "0.5rem" }} />Explore Products</button>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <Stats />
                </div>
            </div>
            <ProductShowcase />
            <Reviews />
        </div>
    );
};

export default Home;