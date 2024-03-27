import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductSize,
} from '../../Redux/sizeChangeSlice.js';

const Productlist = () => {
  const dispatch = useDispatch();
  const selectSize = useSelector((state) => state.productSize.productSize);

  const handleSizeChange = ({ target }) => {
    dispatch(setProductSize(target.value));
  };

  return (
    <div className="products container">
      <div className="products__card card">
        <div className="card__image">
          <img src="#" alt="Product image" />
        </div>

        <div className="card__content">
          <h3 className="card__title"></h3>
          <div className="card__sizes">
            <label>
              <input
                type="radio"
                name="product-size"
                id="size-small"
                checked={selectSize === 'size-small'}
                value="size-small"
                onChange={handleSizeChange}
              />
              Small (30cm)
            </label>

            <label>
              <input
                type="radio"
                name="product-size"
                id="size-big"
                checked={selectSize === 'size-big'}
                value="size-big"
                onChange={handleSizeChange}
              />
              Big (50cm)
            </label>
          </div>
          <div className="card__price">
            <span>Prise:</span> <span>300 UAH</span>
          </div>
          <div></div>
          <button className="card__addBtn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Productlist;
