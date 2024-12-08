import './bootstrap';
import '@/css/app.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ContextProvider } from './contexts/ContextProvider';
if(document.getElementById("app")){
    const app = ReactDOM.createRoot(document.getElementById("app"));
    app.render(
        <React.StrictMode>
            <ContextProvider>
                <RouterProvider router={router} />
            </ContextProvider>
        </React.StrictMode>
    );
}