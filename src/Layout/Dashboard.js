import React from 'react';
import Header from '../Components/Header';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Header />

            <div className='mx-auto max-w-5xl'>
                <div className='grid grid-cols-4'>
                    <div className='border-r'>
                        <div>
                            <h1 className='text-center text-xl font-bold my-4'>User Profile</h1>
                        </div>
                        <div className=''>
                            <ul>
                                <li className='my-5'><Link to='/userinfo' className='hover:border-r-2  hover:border-red-600 pb-2 px-5 mx-5 ' >  <i class="fa-regular fa-user" /> User Info</Link></li>
                                <li className='my-5'><Link to='/userinfo' className='hover:border-r-2  hover:border-red-600 pb-2 px-5 mx-5 ' >  <i class="fa-regular fa-heart" /> Favorites</Link></li>
                                <li className='my-5'><Link to='/userinfo' className='hover:border-r-2  hover:border-red-600 pb-2 px-5 mx-5 ' >  <i class="fa-regular fa-star" /> Watchlist</Link></li>
                                <li className='my-5'><Link to='/userinfo' className='hover:border-r-2  hover:border-red-600 pb-2 px-5 mx-5 ' >  <i class="fa-solid fa-gear" /> Setting</Link></li>
                                <li className='my-5'><Link to='/userinfo' className='hover:border-r-2  hover:border-red-600 pb-2 px-5 mx-5 ' >  <i class="fa-regular fa-bell" /> Notification</Link></li>
                            </ul>
                        </div>

                        <h2 className='text-center text-md text-orange-600 font-semibold my-4'> <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-270 px-2"></i>Log Out</h2>

                    </div>
                    <div className='col-span-3 border-l'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;