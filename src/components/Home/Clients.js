import React from 'react';

const Clients = () => {
    return (
        <div className='py-8 mt-6 bg-[#F5F5F5]'>
            <div className="mx-auto max-w-7xl text-center px-[0.9rem] lg:px-0">
                <h1 className='text-[16px]'>Customers</h1>
                <h1 className='font-[800] text-[30px]'>Our Clients</h1>
                <p className='text-[14px]'>For the last 2 years now we've been supplying our solutions to many of the biggest companies in the world.</p>
                <div className='grid grid-cols-1 lg:grid-cols-5 mt-10 mb-6 mx-auto max-w-6xl'>
                    <img className="w-[150px] mb-4 mx-auto " src="https://logos-download.com/wp-content/uploads/2019/06/Fiskars_Logo.png" alt="" />
                    <img className="w-[150px] mb-4 mx-auto " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ames_Stores_Logo_Red.svg/1280px-Ames_Stores_Logo_Red.svg.png" alt="" />
                    <img className="w-[150px] mb-4 mx-auto " src="https://images.squarespace-cdn.com/content/v1/56b354e9b09f950655e35066/1458745520904-OFZHIY4GAOMC1R5M9DYB/image-asset.png?format=1000w" alt="" />
                    <img className="w-[150px] mb-4 mx-auto " src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ames_Stores_Logo_Red.svg/1280px-Ames_Stores_Logo_Red.svg.png" alt="" />
                    <img className="w-[150px] mb-4 mx-auto " src="https://logos-download.com/wp-content/uploads/2019/06/Fiskars_Logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Clients;