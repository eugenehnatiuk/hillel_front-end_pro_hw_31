import React from 'react';
import './main.scss';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main__container container">
      <div className="main__head">
        <div className="main__title-box">
          <h1 className="main__title">
            Welcome to our pizzeria - <span>Pizza Spot</span>
          </h1>
          <Link to={'/menu'} className="main__title-btn">
            Order
          </Link>
        </div>

        <div className="main__image-box">
          <div className="main__image-container main__image-container--black">
            <img src="/images/hero1.jpg" alt="Pizza cheef" />
          </div>
          <div className="main__image-container">
            <img src="/images/hero2.jpeg" alt="Pizza serving" />
          </div>
        </div>
      </div>

      <div className="main__content-section main__content-section--time">
        <h2 className="main__content-section-title">
          <span className="accent-letter">W</span>orking hours:
        </h2>
        <div className="main__content-section-content">
          <p className="main__content-section-text">
            We are here for you every day from morning until late at night to
            satisfy your cravings at any time of the day.
          </p>
        </div>
      </div>

      <div className="main__content-section  main__content-section--delivery ">
        <h2 className="main__content-section-title">
          <span className="accent-letter">D</span>elivery options:
        </h2>
        <p className="main__content-section-text">
          We offer you the choice of the most convenient way to receive your
          order:
        </p>
        <div className="main__content-section-content">
          <ul className="main__content-section-options">
            <li className="main__content-section-item">
              <span className="main__content-accent">Home delivery:</span> Our
              delivery service will promptly bring your order right to your
              doorstep at a time convenient for you.
            </li>
            <li className="main__content-section-item">
              <span className="main__content-accent">Pick-up:</span> Collect
              your order from our restaurant personally, enjoying the aroma of
              fresh pizza on your way home.
            </li>
          </ul>
        </div>
      </div>

      <div className="main__content-section main__content-section--approach">
        <h2 className="main__content-section-title">
          <span className="accent-letter">A</span>pproach to cooking:
        </h2>
        <div className="main__content-section-content main__content-section-content--approach">
          <p className="main__content-section-text">
            We prepare each pizza with love and respect for Italian traditions.
            Our chefs use only fresh ingredients of the highest quality to
            ensure that every bite of our pizza brings you real pleasure.
          </p>
          <div className="main__content-section-image-box">
            <img
              className="main__content-section-image"
              src="https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,f_jpg,h_822,q_75,w_1220/https://tsedmsmedia.newmindmedia.com/wsimgs/19207P7A7821-Edit_992719593.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="main__content-section main__content-section--quality">
        <h2 className="main__content-section-title">
          {' '}
          <span className="accent-letter">Q</span>uality system:
        </h2>
        <div className="main__content-section-content">
          {/* <img className="main__content-section-image" src="#" alt="" /> */}
          <p className="main__content-section-text">
            Our pizzeria strives for the highest quality standards. We carefully
            monitor every stage of preparation and delivery to ensure that your
            order always arrives fresh and delicious. Your satisfaction is our
            priority!
          </p>
        </div>
      </div>
      <div className="main__bon-appetit-box">
        <p className="main__bon-appetit-text">
          Bon appétit and thank you for choosing us!
        </p>
      </div>
    </div>
  );
};

export default Main;
