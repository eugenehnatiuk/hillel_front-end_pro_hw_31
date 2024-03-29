import React from 'react';
import './basketmodal.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeBasket } from '../../Redux/basketModalSlice.js';

const BasketModal = () => {
  const dispatch = useDispatch();
  const basketOpen = useSelector((state) => state.basketmodal.isOpen);
  const isOrder = true;

  return (
    <div className="basket-modal__container">
      {isOrder ? (
        <>
          <div className="basket-modal__content">
            <div
              className={`basket-modal__close ${!basketOpen && 'closed'}`}
              onClick={() => dispatch(closeBasket())}
            ></div>
            <h3 className="basket-modal__title">Your order</h3>
            <div className="basket-modal__order">
              <div className="basket-modal__order-img">
                <img
                  src="https://lviv.veteranopizza.com/image/cache/catalog/pizza/peperoni-800x800.jpg"
                  alt=""
                />
              </div>
              <p className="basket-modal__order-name">Papperoni</p>
              <p className="basket-modal__order-size">
                Size: <span>S</span>
              </p>
              <div className="basket-modal__order-counter">
                <button>-</button>
                <span> 1 </span>
                <button>+</button>
              </div>
              <div className="basket-modal__order-price">
                Price: <span>400 </span>UAH
              </div>
            </div>
            <div className="basket-modal__total">
              <p className="basket-modal__total-title">Total:</p>
              <div className="basket-modal__total-count">
                <span>400</span> UAH
              </div>
            </div>
            <button className="basket-modal__order-btn">Order</button>
          </div>
        </>
      ) : (
        <>
          <div className="basket-modal__content basket-modal__content--empty">
            <div className="basket-modal__close"></div>
            <p>Oops, sorry</p>
            <p>Your order is empty</p>
            <p>Please make your order</p>
            <Link to={'/menu'}> Menu </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default BasketModal;
