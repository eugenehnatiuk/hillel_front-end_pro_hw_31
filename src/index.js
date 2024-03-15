import './style/style.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom';


const mainEl = document.querySelector('.wrapper');
const root = ReactDOM.createRoot(mainEl);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
