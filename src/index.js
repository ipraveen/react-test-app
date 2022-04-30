import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './apps/todos';

// const root = document.getElementById('root');

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     root
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
