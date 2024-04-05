import './header.scss';

import React, { useEffect } from 'react';
import HeaderUpper from './HeaderUpper.jsx';
import HeaderBox from './HeaderBox.jsx';
import Banner from '../Banner/Banner.jsx';
import { ShapeDevider } from '../ShapeDivider/ShapeDivider.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { bannerHide, bannerShow } from '../../Redux/hideBannerSlice.js';

const Header = () => {
  const isHidden = useSelector((state) => state.hideBanner.value);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname === '/about' || location.pathname === '/contacts') {
      dispatch(bannerHide());
    } else {
      dispatch(bannerShow());
    }
  }, [location.pathname]);

  return (
    <>
      <div className="head">
        <header className="head__header header">
          <div className="header__container container">
            <HeaderUpper />
            <HeaderBox />
          </div>
        </header>
        {isHidden ? '' : <Banner />}
        <ShapeDevider />
      </div>
    </>
  );
};

export default Header;
