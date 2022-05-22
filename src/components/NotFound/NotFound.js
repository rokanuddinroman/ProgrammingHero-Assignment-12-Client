import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='mx-auto mt-[60px] text-center'>
            <img className='w-[50%] mx-auto' src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="" />
            <button onClick={() => { navigate('/') }} style={{ borderBottom: "3px solid #0b45a7" }} className='bg-[#4D97FF] py-[10px] px-[16px] text-white font-bold rounded-[8px]'>Back to Homepage</button>
        </div>
    );
};

export default NotFound;