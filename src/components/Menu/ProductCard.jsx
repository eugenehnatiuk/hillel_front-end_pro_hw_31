import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSize } from '../../Redux/sizeChangeSlice.js';

const ProductCard = ({ id, name, sizes, image }) => {
  const dispatch = useDispatch();
  const selectSize = useSelector((state) => state.productSize.productSize);

  const handleSizeChange = ({ target }) => {
    dispatch(setProductSize(target.value));
  };

  return (
    <>
      <div className="products__card card" key={id}>
        <div className="card__image">
          <img src={image} alt="Product image" width={290} height={100} />
        </div>

        <div className="card__content">
          <h3 className="card__title">{name}</h3>
          <div className="card__sizes">
            {sizes.map((size) => (
              <label key={size.size + id}>
                <input
                  type="radio"
                  name={`product-size-${id}-${size.value}`}
                  id={`size-${size.value}-${id}`}
                  checked={selectSize === `size-${size.value}-${id}`}
                  value={`size-${size.value}-${id}`}
                  onChange={handleSizeChange}
                />
                {size.value}
              </label>
            ))}
          </div>
          <div className="card__price">
            <span>Price:</span> <span>300 UAH</span>
          </div>
          <div></div>
          <button className="card__addBtn">Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
