import React from 'react';
import image from '../../images/undraw_subscribe_vspl.png'
const Newsletter = () => {
    return (
        <div className='mx-auto max-w-7xl pb-4'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='my-auto px-[0.9rem] lg:px-0'>
                    <h1 className="text-4xl font-[800]">Subscribe to our </h1>
                    <h1 className="text-4xl mb-2 font-[800]">Newsletter</h1>
                    <p>You will avail to get updates of stock updates and lots more.</p>
                    <div className="mt-3">
                        <input className='w-[100%] rounded-[8px] bg-[#f6fbfe] p-[10px] mb-3 border-[2px] border-[#e3e8eb]' type="text" />
                        <button className="btn bg-primary mt-1">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;