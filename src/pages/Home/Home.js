import React from 'react';
import Stats from '../../components/Home/Stats';
import { IoCartOutline } from 'react-icons/io5';
import '../../styles/Home.css'
const Home = () => {
    return (
        <div className='bg-primary'>
            <div className="max-w-7xl mx-auto home-container min-h-screen pb-5">
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
    );
};

export default Home;