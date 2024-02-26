import './bootstrap';
import '@/css/app.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Welcome from './Welcome';
if(document.getElementById("app")){
    const app = ReactDOM.createRoot(document.getElementById("app"));
    app.render(
        <React.StrictMode>
            <Welcome />
        </React.StrictMode>
    );
}