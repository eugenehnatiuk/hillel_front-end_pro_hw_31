import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <section className="menu__section container" id="menu">
      <Link to={'/menu'} className="menu__title" id="menu">
        Menu
      </Link>
      <Outlet />
    </section>
  );
};

export default Menu;
