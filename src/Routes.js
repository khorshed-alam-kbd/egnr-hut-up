import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import UserInfo from './Components/UserInfo';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: '/',
                element: <UserInfo />
            },
            {
                path: '/userinfo',
                element: <UserInfo />
            },
        ]
    }

]);

export default router;