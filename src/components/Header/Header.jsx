import './header.scss';

import React from 'react';
import HeaderUpper from './HeaderUpper.jsx';
import HeaderBox from './HeaderBox.jsx';

const Header = () => {
  return (
    <div className="head__header header">
      <div className="header__container container">
              <HeaderUpper />
              <HeaderBox/>
      </div>
    </div>
  );
};

export default Header;
