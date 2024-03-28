import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx';


const mainEl = document.querySelector('.wrapper');
const root = ReactDOM.createRoot(mainEl);

root.render(<App />);
