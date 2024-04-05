import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const BannerMenu = () => {
  return (
    <>
      <div className="menu__description-box">
        <p className="menu__description-text">
          <span className='accent-letter'>W</span>elcome to our awesome pizzeria, where all the excitement
          is in every single crumb of our pizzas! Our menu is a real
          kaleidoscope of flavors and surprises that will make your taste buds
          dance with joy.
        </p>
        <p className="menu__description-text">
          Here you'll find everything: from classic favorites to exclusive
          combinations that will make you say "wow" with the first bite.
        </p>
        <p className="menu__description-text">
          We cook with love and passion, so every sip and every bite is a real
          explosion of flavor. And don't forget about our cool drinks, which
          will be the perfect complement to your pizza party!
        </p>
        <p className="menu__description-text">
          We have everything for you to enjoy great food and great company. So
          don't hesitate, come to us, and get ready for a tasty adventure that
          will be remembered for a long time!
        </p>
      </div>
      <div className="menu__category-box">
        <ul className="menu__category-list">
          <li className="menu__category-item">
            <h3 className="menu__category-title">Choose your pizza</h3>
            <Link to={'/menu/pizzas_menu'} className="menu__category-link">
              <img
                src="/images/peperoni.jpg"
                alt="Pizzas menu"
                width={100}
                height={50}
              />
            </Link>
          </li>
          <li className="menu__category-item">
            <h3 className="menu__category-title">
              And don't forget your drinks
            </h3>
            <Link to={'soft_drinks_menu'} className="menu__category-link">
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
    </>
  );
};

export default BannerMenu;
