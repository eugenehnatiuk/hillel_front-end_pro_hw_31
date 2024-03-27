import './footer.scss';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__contacts-list">
          <li className="footer__contacts-item">
            <p className="footer__adress">Kyiv, Mechnikova str., 14/1</p>
          </li>
          <li className="footer__contacts-item">
            <a className="footer__phone" href="tel: +308001234567">
              0800 123 45 67
            </a>
          </li>
        </ul>
        <p className="footer__rights">All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
