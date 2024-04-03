import React, { useEffect } from 'react';
import './banner.scss';

import { register } from 'swiper/element/bundle';

register();

const Banner = () => {
  useEffect(() => {
    const swiperContainer = document.querySelector('swiper-container');
    const style = document.createElement('style');
    style.textContent = `
  .swiper {
    overflow: visible !important;
  }
`;
    if (swiperContainer) {
      swiperContainer.shadowRoot.appendChild(style);
    }
  }, []);

  return (
    <div className="banner container">
      <swiper-container
        className="banner__swiper"
        loop="true"
        pagination="true"
        // pagination-dynamic-bullets="true"
        navigation="true"
      >
        <swiper-slide>
          <div className="banner__slide">
            <div className="banner__image">
              <img
                src="../../images/pizza_cola.webp"
                alt="Pizza & Cola Banner"
                width={800}
                height={300}
              />
            </div>
            <div className="banner__inner">
              <p className="banner__title">Your Pizza&Cola weekends</p>
              <p className="banner__legend">
                Take one Cola and get second one for free.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="banner__slide">
            <div className="banner__image">
              <img
                src="../../images/pizza_cola.webp"
                alt="Pizza & Cola Banner"
                width={800}
                height={400}
              />
            </div>
            <div className="banner__inner">
              <p className="banner__title">Your Pizza&Cola weekends</p>
              <p className="banner__legend">
                Take one Cola and get second one for free.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="banner__slide">
            <div className="banner__image">
              <img
                src="../../images/pizza_cola.webp"
                alt="Pizza & Cola Banner"
                width={800}
                height={400}
              />
            </div>
            <div className="banner__inner">
              <p className="banner__title">Your Pizza&Cola weekends</p>
              <p className="banner__legend">
                Take one Cola and get second one for free.
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Banner;
