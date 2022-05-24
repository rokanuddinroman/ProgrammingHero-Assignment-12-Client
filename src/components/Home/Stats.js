import React from 'react';
import { IoBag, IoStar, IoLogoDropbox } from 'react-icons/io5';
import { IoIosPeople } from 'react-icons/io';
import '../../styles/Home.css'
const Stats = () => {
    return (
        <div className='stats-container mt-[7rem]'>

            <div className='flex items-center'>
                <IoBag className='icons mr-6' />
                <div>
                    <p>Total Sold</p>
                    <h2 className='text-6xl font-extrabold'>50k</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <IoIosPeople className='icons mr-6' />
                <div>
                    <p>Satisfied Customer</p>
                    <h2 className='text-6xl font-extrabold'>1879</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <IoStar className='icons mr-6' />
                <div>
                    <p>Average Rating</p>
                    <h2 className='text-6xl font-extrabold'>4.8</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <IoLogoDropbox className='icons mr-6' />
                <div>
                    <p>Refund in</p>
                    <h2 className='text-6xl font-extrabold'>30d</h2>
                </div>
            </div>


        </div>
    );
};

export default Stats;