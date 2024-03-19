import React from 'react';
import './banner.scss';

import { register } from 'swiper/element/bundle';
register();

const Banner = () => {
  return (
    <div className="banner container">
      <swiper-container
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        className="banner__swiprer"
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
                Take one and Cola and get second one for free
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
                Take one and Cola and get second one for free
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Banner;
