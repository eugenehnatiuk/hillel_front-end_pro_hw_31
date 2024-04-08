import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const OrderForm = () => {
    const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOrderButtonClick = () => {
    dispatch(setOrderPlaced(true));
    dispatch(clearOrder());
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
      <button className="order-form__btn" onClick={handleOrderButtonClick}>
        Order
      </button>
    </div>
  );
};

export default OrderForm;
