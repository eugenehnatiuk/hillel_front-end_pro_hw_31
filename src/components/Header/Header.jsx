import './header.scss';

import React from 'react';
import HeaderUpper from './HeaderUpper.jsx';
import HeaderBox from './HeaderBox.jsx';
import Banner from '../Banner/Banner.jsx';
import { ShapeDevider } from '../ShapeDivider/ShapeDivider.jsx';

const Header = () => {
  return (
    <>
      <div className="head">
        <header className="head__header header">
          <div className="header__container container">
            <HeaderUpper />
            <HeaderBox />
          </div>
        </header>
        <Banner />
        <ShapeDevider />
      </div>
    </>
  );
};

export default Header;
