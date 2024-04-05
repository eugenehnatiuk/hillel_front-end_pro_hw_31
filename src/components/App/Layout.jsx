import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import BasketModal from '../Basket/BasketModal.jsx';
import { useSelector } from 'react-redux';

const Leyout = () => {
  const basketOpen = useSelector((state) => state.basketmodal.isOpen);

  useEffect(() => {
    if (basketOpen) {
      document.body.classList.add('basket-open');
      document.body.classList.remove('basket-closed');
    } else {
      document.body.classList.remove('basket-open');
      document.body.classList.add('basket-closed');
    }
  }, [basketOpen]);

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
