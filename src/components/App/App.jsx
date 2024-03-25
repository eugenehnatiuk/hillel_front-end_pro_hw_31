import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Menu from '../Menu/Menu.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import About from '../AboutUs/About.jsx';
import Homepage from '../Homepage/Homepage.jsx';
import Layout from './Layout.jsx';
import BannerMenu from '../Menu/MenuBanner.jsx';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import closeMenuSlice from '../../Redux/closeMenuSlice.js';

const store = configureStore({
  reducer: {
    closeMenu: closeMenuSlice,
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Menu />,
        children: [
          {
            index: true,
            element: <BannerMenu />,
          },
          {
            path: 'pizzas-menu',
            element: 'This is pizzas',
          },
          {
            path: 'soft-drinks-menu',
            element: ' This is soft drinks',
          },
        ],
      },
      // {
      //   path: 'menu',
      //   element: <Menu />,
      //   children: [
      //     {
      //       index: true,
      //       element: <BannerMenu />,
      //     },
      //     {
      //       path: 'pizzas-menu',
      //       element: 'This is pizzas',
      //     },
      //     {
      //       path: 'soft-drinks-menu',
      //       element: ' This is soft drinks',
      //     },
      //   ],
      // },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contacts',
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
