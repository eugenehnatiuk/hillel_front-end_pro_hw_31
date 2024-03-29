import React, { useState } from 'react';
import './basket.scss';
import { useDispatch } from 'react-redux';
import { openBasket } from '../../Redux/basketModalSlice.js';

const Basket = () => {
  const dispatch = useDispatch()



  return (
    <div className="header__basket basket" onClick={() => dispatch(openBasket())}>
      <svg>
        <use href="#basket"></use>
      </svg>
      <span className="basket__counter">1</span>
    </div>
  );
};

export default Basket;
