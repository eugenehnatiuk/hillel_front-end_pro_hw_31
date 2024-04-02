import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import BasketModal from '../Basket/BasketModal.jsx';
import { useSelector } from 'react-redux';

const Leyout = () => {
  const basketOpen = useSelector((state) => state.basketmodal.isOpen);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {basketOpen && <BasketModal />}
      <Footer />
    </>
  );
};
export default Leyout;
