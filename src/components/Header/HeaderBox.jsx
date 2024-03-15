import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';

const HeaderBox = () => {
  const [closeMenu, setCloseMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setCloseMenu(true);
  };

  return (
    <div className="header__box">
      <div className="header__logo-box">
        <img
          className="header__logo-img"
          src="./images/Pizza_logo.png"
          alt="Pizza logo"
          width="100"
          height="57"
        ></img>
        <p className="header__logo-name">Pizza House</p>
      </div>
      <div className="header__box-burger" onClick={() => setCloseMenu(false)}>
        <span></span>
      </div>
      <nav
        className="header__nav"
        style={{ transform: closeMenu ? 'translateY(101%)' : 'none' }}
      >
        <div
          className={
            closeMenu ? 'header__nav-close closed' : 'header__nav-close'
          }
          onClick={toggleMenu}
        ></div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/">Main</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="header__menu-item">
            <Link to="/about">About us</Link>{' '}
          </li>
          <li className="header__menu-item">
            <Link to="contacts">Contacts</Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBox;
