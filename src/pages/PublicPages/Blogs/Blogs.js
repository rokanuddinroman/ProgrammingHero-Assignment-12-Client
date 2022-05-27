import React, { useState } from 'react';
import '../../../styles/Home.css'

const Blogs = () => {
    return (
        <div className='mt-[56px] max-w-7xl mx-auto'>

            <div classname='blogs grid grid-cols-3 gap'>
                <div className="blog">
                    <h1 className='text-[22px] font-[600]'>How will you improve the performance of a React Application?</h1>
                    <hr className="my-3" />
                    <p>For better performance, we can use CommonsChunkPlugin. It will split our files, to reduce render time. There is something that called React.Fragment. Instead of using Additional HTML Element Wrappers, we can use React.Fragment.Using optimized image also improve react app performence. Clean code helps us improving bit more performance. We should never use unnessesary codes. So this are some things that help us improving .</p>
                </div>
                <div className="blog">
                    <h1 className='text-[22px] font-[600]'>What are the different ways to manage a state in a React application?</h1>
                    <hr className="my-3" />
                    <p>There are 4 types of React State to manage. Local state, Global state, Server state, URL state are the followingtypes. When we manage data in one and another components. useState is the most used hook for Local State. For multiple components we can use Global State. For the datas that comes from an external server. we use Server State. for the datas that comes from URL. we use URL state.</p>
                </div>
                <div className="blog">
                    <h1 className='text-[22px] font-[600]'>How does prototyical inheritance work?</h1>
                    <hr className="my-3" />
                    <p>Prototycal inheritance is basically the abily to access object properties from another object. Javascript is prototype based Object Oriented programming language. </p>
                </div>
                <div className="blog">
                    <h1 className='text-[22px] font-[600]'>Why you do not set state directly in React.</h1>
                    <hr className="my-3" />
                    <p>When we update a state diectly, the setState might replace the updates. If we use state directly, we might lose control from the components. We would rather use new object and use setState.</p>
                </div>
                <div className="blog">
                    <h1 className='text-[22px] font-[600]'>How will you implement a search to find products by name?</h1>
                    <hr className="my-3" />
                    <p>There is many way th implement Search functionality. So we have a array of fruits. So we will the the SearchText value from the input. then we will filter the fruit array and use includes-searchText and we will display the the matched fruits. Thats a simple way to implement search.</p>
                </div>
            </div>


        </div>
    );
};

export default Blogs;