import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger';
import BannerMenu from '../Menu/MenuBanner.jsx';
import closeMenuSlice from '../../Redux/closeMenuSlice.js';
import hideBannerSlice from '../../Redux/hideBannerSlice.js';
// import sizeChangeSlice from '../../Redux/sizeChangeSlice.js';

import Menu from '../Menu/Menu.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import About from '../AboutUs/About.jsx';
import Layout from './Layout.jsx';
import ProductCategory from '../Menu/ProductCategory.jsx';
import productsByCategorySlice from '../../Redux/productsByCategorySlice.js';
import basketModalSlice from '../../Redux/basketModalSlice.js';
import handleOrderSlice from '../../Redux/handleOrderSlice.js';
import totalPriceChangeSlice from '../../Redux/totalPriceChangeSlice.js';
import Main from '../Main/Main.jsx';

// enableMapSet();

const store = configureStore({
  reducer: {
    closeMenu: closeMenuSlice,
    hideBanner: hideBannerSlice,
    // productSize: sizeChangeSlice,
    productsByCategory: productsByCategorySlice,
    basketmodal: basketModalSlice,
    handleOrder: handleOrderSlice,
    totalPrice: totalPriceChangeSlice,
  },
  middleware: () => [thunk, logger],
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main/>,
      },
      {
        path: 'menu',
        element: <Menu />,
        children: [
          {
            index: true,
            element: <BannerMenu />,
          },
          {
            path: 'pizzas_menu',
            element: <ProductCategory productCategory="pizza" />,
          },
          {
            path: 'soft_drinks_menu',
            element: <ProductCategory productCategory="drinks" />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: '*',
        element: '404 - Not Found',
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
