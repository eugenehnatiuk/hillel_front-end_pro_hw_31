import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import BasketModal from '../Basket/BasketModal.jsx';


const Leyout = () => {
  const isBasketModal = false
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {isBasketModal && <BasketModal />}
      <Footer />
    </>
  );
};
export default Leyout;
