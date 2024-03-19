import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const HeaderBox = () => {
  const [closeMenu, setCloseMenu] = useState(true);

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
      <nav className={closeMenu ? 'header__nav' : 'header__nav opened'}>
        <div
          className={
            closeMenu ? 'header__nav-close closed' : 'header__nav-close'
          }
          onClick={() => setCloseMenu(true)}
        ></div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink to="/">Main</NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/about">About us</NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBox;
