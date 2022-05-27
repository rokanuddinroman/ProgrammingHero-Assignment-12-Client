import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import avatar from '../../images/f.jpeg'
import thumb1 from '../../images/Resla Motors.png'
import thumb2 from '../../images/Max Fitness.png'
import thumb3 from '../../images/Marvel Bangladesh.png'

const Myportfolio = () => {
    return (
        <div>
            <div className='dashboard-container relative mt-[56px]'>
                <div className="relative">
                    <div className='dashboard-sidebar'>
                        <img className='mt-8 rounded-[20px] w-[100px] mx-auto' src={avatar} alt="" />
                        <h1 className='my-2 text-[30px] font-[700] text-center'>Rokan Uddin</h1>
                        <h1 className='text-center py-1 px-[2px] font-[500] bg-green-100 text-green-500 rounded-[8px]'>rokanuddinroman@gmail.com</h1>

                        <h1 className="my-2 text-center font-bold">I've expertise in</h1>
                        <div className='flex flex-wrap'>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML, CSS</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">Javascript</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">React Router</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">MongoDB</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">Node.js</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">Firebase</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">JWT</span>
                            <span class="bg-gray-100 m-1 text-gray-800 text-sm font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-gray-700 dark:text-gray-300">Express</span>
                        </div>
                        <div className='py-1 px-[2px] mt-3'>
                            <h1 style={{ borderLeft: "3px solid #12CF8A", paddingLeft: "0.4rem" }} className="font-bold mb-1 bg-gray-100 text-[20px] pl-[2px]">Education</h1>
                            <p className="font-[500] ">I'm a Student. My last Education status is completed HSC.</p>
                        </div>
                    </div>
                </div>
                <div className='dashboard-content p-4 '>
                    <div className="bg-white rounded-[8px] p-4 drop-shadow-sm">
                        <h3 className='text-[20px] font-[600] flex items-center'><FaUserCircle color='white' className='inline p-2 mr-2 bg-[#111827] rounded-[50%] text-white text-[40px]' />My Projects</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                            <article>
                                <img className="aspect-[4/3] overflow-hidden object-cover w-full rounded-[12px]" src={thumb1} alt="" />
                                <a href="https://assignment9byrokanuddin.netlify.app/home">
                                    <button className="btn mt-1 w-[100%] bg-primary">Live Website</button>
                                </a>
                            </article>
                            <article>
                                <img className="aspect-[4/3] overflow-hidden object-cover w-full rounded-[12px]" src={thumb2} alt="" />
                                <a href="https://programminghero-assignment-10.web.app/">
                                    <button className="btn mt-1 w-[100%] bg-primary">Live Website</button>
                                </a>
                            </article>
                            <article>
                                <img src={thumb3} alt="" />
                                <a href="https://programminghero-assignment-11.web.app/">
                                    <button className="btn mt-1 w-[100%] bg-primary">Live Website</button>
                                </a>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myportfolio;