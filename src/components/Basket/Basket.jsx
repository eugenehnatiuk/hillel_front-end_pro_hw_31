import React, { useEffect, useState } from 'react';
import './basket.scss';
import { useDispatch, useSelector } from 'react-redux';
import { openBasket } from '../../Redux/basketModalSlice.js';
import { initializeOrderFromLocalStorage } from '../../Redux/handleOrderSlice.js';

const Basket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeOrderFromLocalStorage());
  }, []);

  const order = useSelector((state) => state.handleOrder.order);
  const orderQuantity = order.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      className="header__basket basket"
      onClick={() => dispatch(openBasket())}
    >
      <svg>
        <use href="#basket"></use>
      </svg>
      <span className={orderQuantity ? 'basket__counter' : ''}>
        {orderQuantity ? orderQuantity : ''}
      </span>
    </div>
  );
};

export default Basket;
