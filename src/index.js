import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './playground/useCallbackHook';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className="container">
            <App />
        </div>
    </React.StrictMode>
);
