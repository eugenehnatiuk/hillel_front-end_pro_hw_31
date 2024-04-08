import React, { useEffect, useState } from 'react';
import './basketmodal.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeBasket } from '../../Redux/basketModalSlice.js';
import {
  decreaseQuantity,
  setOrderPlaced,
  increaseQuantity,
  showForm,
  hideForm,
  showClearOrer,
} from '../../Redux/handleOrderSlice.js';
import OrderForm from '../OrderForm/OrderForm.jsx';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal.jsx';

const BasketModal = () => {
  const dispatch = useDispatch();

  const basketOpen = useSelector((state) => state.basketmodal.isOpen);
  const order = useSelector((state) => state.handleOrder.order);
  const totalPrice = useSelector((state) => state.handleOrder.totalPrice);
  const isOrderPlaced = useSelector((state) => state.handleOrder.isOrderPlaced);
  const showOrderForm = useSelector((state) => state.handleOrder.showOrderForm);
  const clearOrderModal = useSelector(
    (state) => state.handleOrder.clearOrderModal
  );

  useEffect(() => {
    dispatch(setOrderPlaced(false));
  }, []);

  useEffect(() => {
    dispatch(hideForm());
  }, []);

  return (
    <div className="basket-modal__container">
      <div
        className={
          'basket-modal__content' +
          (isOrderPlaced ? ' basket-modal__content--order-placed' : '') +
          (totalPrice > 0 ? '' : ' basket-modal__content--empty')
        }
      >
        <div
          className={`basket-modal__close ${!basketOpen && 'closed'}`}
          onClick={() => dispatch(closeBasket())}
        ></div>
        {isOrderPlaced ? (
          <div className="basket-modal__order-placed">
            <p>Thank you for your order!</p>
            <Link to={'/menu'} onClick={() => dispatch(closeBasket())}>
              Back to menu
            </Link>
          </div>
        ) : totalPrice > 0 ? (
          <div
            className={`basket-modal__order-container ${
              showOrderForm && 'basket-modal__order-container--translate'
            }`}
          >
            <div className="basket-modal__order-box">
              <h3 className="basket-modal__title">Your order</h3>
              {order.map(
                ({
                  image,
                  size,
                  quantity,
                  price,
                  name,
                  id,
                  totalByIndexPrice,
                  composition,
                }) => (
                  <div key={`${id}-${size}`}>
                    <div className="basket-modal__order">
                      <div className="basket-modal__order-img">
                        <img src={image} alt={`image-${name}`} />
                      </div>
                      <div className="basket-modal__item">
                        <p className="basket-modal__order-name">{name}</p>
                        <div className="basket-modal__order-description-box">
                          {composition?.map((item, index) => (
                            <p
                              className="basket-modal__order-description"
                              key={index + id}
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <p className="basket-modal__order-size">
                        Size: <span>{size}</span>
                      </p>
                      <div className="basket-modal__order-counter">
                        <button
                          onClick={() =>
                            dispatch(decreaseQuantity({ id, size, price }))
                          }
                        >
                          -
                        </button>
                        <span> {quantity} </span>
                        <button
                          onClick={() =>
                            dispatch(increaseQuantity({ id, size, price }))
                          }
                        >
                          +
                        </button>
                      </div>
                      <div className="basket-modal__order-price">
                        Price: <span>{totalByIndexPrice} </span>UAH
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className="basket-modal__total">
                <p className="basket-modal__total-title">Total:</p>
                <div className="basket-modal__total-count">
                  <span>{totalPrice}</span> UAH
                </div>
              </div>
              <button
                className="basket-modal__order-btn"
                onClick={() => dispatch(showForm())}
              >
                Next
              </button>
              <button
                className="basket-modal__order-clear"
                onClick={() => dispatch(showClearOrer())}
              >
                Clear order
              </button>
            </div>
            <OrderForm />
          </div>
        ) : (
          <>
            <p>Oops, sorry</p>
            <p>Your order is empty</p>
            <p>Please make your order</p>
            <Link to={'/menu'} onClick={() => dispatch(closeBasket())}>
              Menu{' '}
            </Link>
          </>
        )}
       { clearOrderModal && <ConfirmationModal />}
      </div>
    </div>
  );
};

export default BasketModal;
