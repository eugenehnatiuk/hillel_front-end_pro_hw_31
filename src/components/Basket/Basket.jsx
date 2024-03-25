import React, { useState } from 'react';
import './basket.scss';

const Basket = () => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="header__basket basket">
      <svg>
        <use href="#basket"></use>
      </svg>
      <span className="basket__counter">{counter}</span>
    </div>
  );
};

export default Basket;
