import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const BannerMenu = () => {
  return (
    <div className="menu__category-box">
      <ul className="menu__category-list">
        <li className="menu__category-item">
          <Link to={'/menu/pizzas_menu'} className="menu__category-link">
            <img
              src="/images/pizzaMenu.jpg"
              alt="Pizzas menu"
              width={100}
              height={50}
            />
          </Link>
        </li>
        <li className="menu__category-item">
          <Link to={'soft_drinks_menu'}>
            <img
              src="/images/drinksMenu.jpg"
              alt="Drinks menu"
              width={100}
              height={50}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BannerMenu;
