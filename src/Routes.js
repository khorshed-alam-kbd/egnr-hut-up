import React from 'react';

import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Layout/Dashboard";
import UserProfile from './Componets/UserProfile';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: '/',
                element: <UserProfile></UserProfile>
            },
        ]
    }

]);

export default router;