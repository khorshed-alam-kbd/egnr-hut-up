import React from 'react';
import { Form } from 'react-router-dom';

import userPhoto from '../assets/Images/khorshed.jpg'

const UserInfo = () => {
    return (
        <div className='mx-auto max-w-2xl px-10'>

            <div className='flex items-center gap-3 py-2 my-10'>
                <img src={userPhoto} alt="" className='w-20 h-20 rounded-full shadow-2xl' />
                <div>
                    <h1 className='font-bold'>Sara Tancredi</h1>
                    <p>New York, USA</p>
                </div>
            </div>
            <Form  >
                <div>
                    <div className='lg:flex gap-2 lg:justify-between mb-5' >
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="sara" name="user_first_name" className="input input-bordered font-semibold text-center" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Tancredi" name="user_last_name" className="input input-bordered font-semibold text-center" />
                        </div>
                    </div>
                    <div className='lg:flex gap-2 lg:justify-between mb-5' >
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="SaraTancredi@gmail.com" name="user_first_name" className="input input-bordered font-semibold text-center" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" placeholder="(+98)9123728167" name="user_last_name" className="input input-bordered font-semibold text-center" />
                        </div>
                    </div>
                    <div className='lg:flex gap-2 lg:justify-between mb-5' >
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input type="text" placeholder="e.g. New York, USA " name="user_first_name" className="input input-bordered font-semibold text-center" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Postal Code</span>
                            </label>
                            <input type="text" placeholder="2372816" name="user_last_name" className="input input-bordered font-semibold text-center" />
                        </div>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-orange-500 w-1/4 mx-auto rounded-2xl text-white shadow-2xl hover:bg-orange-800">Save Changes</button>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default UserInfo;