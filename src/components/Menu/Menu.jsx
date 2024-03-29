import React from 'react';
import { Outlet } from 'react-router-dom';

const Menu = () => {
  return (
    <section className="menu__section container" id="menu">
      <h2 className="menu__title" id="menu">
        Menu
      </h2>
      <Outlet />
    </section>
  );
};

export default Menu;
