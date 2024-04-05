import React, { useEffect } from 'react';
import './banner.scss';

import { register } from 'swiper/element/bundle';

import { useDispatch, useSelector } from 'react-redux';
import fetchPromoAsync from '../../Redux/fetchPromoSliceAsync.js';
import { addOrder } from '../../Redux/handleOrderSlice.js';

register();

const Banner = () => {
  const dispatch = useDispatch();
  const { promoList, loading, error } = useSelector((state) => state.promo);

  // SWIPER STYLES CHANGE FORSING
  // _______________________________________________________________
  useEffect(() => {
    const swiperContainer = document.querySelector('swiper-container');
    const style = document.createElement('style');
    style.textContent = `
  .swiper {
    overflow: visible !important;
  }`;
    if (swiperContainer) {
      swiperContainer.shadowRoot.appendChild(style);
    }
  }, []);
  // _______________________________________________________________

  useEffect(() => {
    dispatch(fetchPromoAsync());
  }, []);

  if (loading) {
    return <div className="loading"> Loading </div>;
  }
  if (error) {
    return <div className="errorFetching">Error: {error}</div>;
  }

  return (
    <div className="banner container">
      <swiper-container
        autoplay-delay="5000"
        className="banner__swiper"
        loop="true"
        pagination="true"
        // pagination-dynamic-bullets="true"
        navigation="true"
      >
        {promoList &&
          promoList.map(
            ({ name, legend, size, price, image, composition, id }) => (
              <swiper-slide key={id}>
                <div className="banner__slide">
                  <div className="banner__image">
                    <img
                      src={image}
                      alt={`${name} Banner`}
                      width={800}
                      height={300}
                    />
                  </div>
                  <div className="banner__inner">
                    <p className="banner__title">{name}</p>
                    <p className="banner__legend">{legend}</p>
                    <button
                      className="banner__btn"
                      onClick={() =>
                        dispatch(
                          addOrder({
                            name,
                            size,
                            price,
                            id,
                            composition,
                            image,
                          })
                        )
                      }
                    >
                      Order
                    </button>
                  </div>
                </div>
              </swiper-slide>
            )
          )}
      </swiper-container>
    </div>
  );
};

export default Banner;
