import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const About = () => {
    return (
        <div className='mt-[56px] max-w-7xl mx-auto min-h-[80vh]'>
            <h3 className='text-[20px] font-[600] flex items-center py-4'><FaUserCircle color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />About BoldShovel</h3>
            <p className='font-bold'>BoldShovel is established in Bangladesh in 2022 by Rokan Uddin. The core focus of BoldShovel is to manufacturering best shovel. </p>

            <p>We manufacture the Wooden handles for shovels and brooms of the following diameters: 22 mm - with one end rounded and the other with screw end, 24 mm - with one end rounded and the other with screw end, 25 mm - with one end rounded and the other with cone shape.</p>
            <p></p>
        </div>
    );
};

export default About;