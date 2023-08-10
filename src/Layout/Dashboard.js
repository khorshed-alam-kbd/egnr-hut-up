import React from 'react';
import Header from '../Componets/Header';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <Header />

            <div className='mx-auto max-w-7xl'>
                <div className='grid grid-cols-4'>
                    <div className='border'>
                        <div>
                            <h1 className='text-center text-xl font-bold my-4'>User Profile</h1>
                        </div>
                        <li>user profile</li>
                        <li>user profile</li>
                        <li>user profile</li>
                        <li>user profile</li>

                        <h2 className='text-center text-md text-orange-600 font-semibold my-4'> <i class="fa-solid fa-arrow-up-from-bracket fa-rotate-270 px-2"></i>Log Out</h2>

                    </div>
                    <div className='col-span-3 border'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;