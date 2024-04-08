import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearOrder,
  hideForm,
  setOrderPlaced,
} from '../../Redux/handleOrderSlice';

const OrderForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderButtonClick = () => {
    if (
      formData.name.trim() &&
      formData.address.trim() &&
      formData.email.trim() &&
      formData.phoneNumber.trim()
    ) {
      dispatch(setOrderPlaced(true));
      dispatch(clearOrder());
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div className="basket-modal__order-form order-form">
      <input
        className="order-form__name"
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="order-form__adress"
        type="text"
        placeholder="Address"
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <input
        className="order-form__email"
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="order-form__phone-number"
        type="tel"
        placeholder="Phone Number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <button className="order-form__btn" onClick={() => dispatch(hideForm())}>
        Back
      </button>
      <button
        className="order-form__btn order-form__btn-order"
        onClick={handleOrderButtonClick}
      >
        Order
      </button>
    </div>
  );
};

export default OrderForm;
