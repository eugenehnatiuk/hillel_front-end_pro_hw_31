import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Menu from '../Menu/Menu.jsx';
import Contacts from '../Contacts/Contacts.jsx';
import About from '../AboutUs/About.jsx';
import Homepage from '../Homepage/Homepage.jsx';
import Layout from './Layout.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
