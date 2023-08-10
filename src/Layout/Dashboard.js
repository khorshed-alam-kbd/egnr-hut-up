import React from 'react';
import Header from '../Components/Header';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

const Dashboard = () => {

    const [activeItem, setActiveItem] = useState(1);
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const handleItemClick = (number) => {
        setActiveItem(number);
    };

    return (
        <div>
            <Header setSidebarVisible={setSidebarVisible} sidebarVisible={sidebarVisible} />

            <div className='mx-auto max-w-5xl'>
                <div className='grid grid-cols-4'>
                    <div className={`col-span-1 border-r ${sidebarVisible ? '' : 'hidden'}`}>
                        <div>
                            <h1 className='text-center text-xl font-bold my-4'>User Profile</h1>
                        </div>
                        <div className=''>
                            <ul className="">
                                <Link to='/userinfo' ><li className={`py-2 px-10 mb-5 cursor-pointer transition ${1 === activeItem ? 'border-r-2 border-orange-400 font-bold' : ''
                                    }`} onClick={() => handleItemClick(1)} ><i class="fa-regular fa-user" /> User Info</li></Link>
                                <Link to='/#' ><li className={`py-2 px-10 mb-5 cursor-pointer transition ${2 === activeItem ? 'border-r-2 border-orange-400 font-bold' : ''
                                    }`} onClick={() => handleItemClick(2)} ><i class="fa-regular fa-heart" /> Favorites</li></Link>
                                <Link to='/#'  ><li className={`py-2 px-10 mb-5 cursor-pointer transition ${3 === activeItem ? 'border-r-2 border-orange-400 font-bold' : ''
                                    }`} onClick={() => handleItemClick(3)}><i class="fa-regular fa-star" /> Watchlist</li></Link>
                                <Link to='/#'><li className={`py-2 px-10 mb-5 cursor-pointer transition ${4 === activeItem ? 'border-r-2 border-orange-400 font-bold' : ''
                                    }`} onClick={() => handleItemClick(4)}><i class="fa-solid fa-gear" /> Setting</li></Link>
                                <Link to='/#'><li className={`py-2 px-10 mb-5 cursor-pointer transition ${5 === activeItem ? 'border-r-2 border-orange-400 font-bold' : ''
                                    }`} onClick={() => handleItemClick(5)} ><i class="fa-regular fa-bell" /> Notification</li></Link>
                            </ul>
                        </div>

                        <h2 className='text-center text-md text-orange-600 font-semibold mt-10'> <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-270 px-2"></i>Log Out</h2>

                    </div>

                    <div className='col-span-3'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;