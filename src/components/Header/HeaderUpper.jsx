import React from 'react';
import Basket from '../Basket/Basket.jsx';

const HeaderUpper = () => {
  return (
    <div className="header__upper">
      <div className="header__contacts">
        <ul className="header__lang">
          <li className="header__lang-item">
            <a href="#" className="header__lang-link">
              ua
            </a>
          </li>
          <li className="header__lang-item">
            <a href="#" className="header__lang-link">
              en
            </a>
          </li>
        </ul>
        <div className="header__adress">
          <svg>
            <use href="#location"></use>
          </svg>
          <p>Kyiv, Mechnikova str., 14/1</p>
        </div>
        <a className="header__phone" href="tel: +308001234567">
          <svg>
            <use href="#phone"></use>
          </svg>{' '}
          0800 123 45 67
        </a>
        <div className="header__time">
          <svg>
            <use href="#clock"></use>
          </svg>
          <p>08:30 - 22:00</p>
        </div>
        <a className="header__social" href="#">
          <svg>
            <use href="#facebook"></use>
          </svg>
        </a>
      </div>
      <Basket />
      {/* <div className="header__basket basket">
        <svg>
          <use href="#basket"></use>
        </svg>
      </div> */}
    </div>
  );
};

export default HeaderUpper;
