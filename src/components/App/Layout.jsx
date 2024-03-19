import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Leyout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};
export default Leyout;
