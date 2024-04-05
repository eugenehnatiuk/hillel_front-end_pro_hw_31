import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

import { useDispatch, useSelector } from 'react-redux';
import { close, open } from '../../Redux/closeMenuSlice.js';


const HeaderBox = () => {
  const dispatch = useDispatch();
  const isClose = useSelector((state) => state.closeMenu.value);

  return (
    <div className="header__box">
      <div className="header__logo-box">
        <img
          className="header__logo-img"
          src="/images/Pizza_logo.png"
          alt="Pizza logo"
          width="100"
          height="57"
        ></img>
        <p className="header__logo-name">Pizza Spot</p>
      </div>
      <div className="header__box-burger" onClick={() => dispatch(open())}>
        <span></span>
      </div>
      <nav className={isClose ? 'header__nav' : 'header__nav opened'}>
        <div
          className={isClose ? 'header__nav-close closed' : 'header__nav-close'}
          onClick={() => dispatch(close())}
        ></div>
        <ul className="header__menu">
          <li className="header__menu-item">
            <NavLink to="/" onClick={() => dispatch(close())}>
              Main
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/menu" onClick={() => dispatch(close())}>
              Menu
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="/about" onClick={() => dispatch(close())}>
              About us
            </NavLink>
          </li>
          <li className="header__menu-item">
            <NavLink to="contacts" onClick={() => dispatch(close())}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBox;
