import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSize } from '../../Redux/sizeChangeSlice.js';

const ProductCard = ({ id, name, sizes, image, prices }) => {
  const dispatch = useDispatch();
  const selectSize = useSelector((state) => state.productSize);

  const handleSizeChange = ({
    target: {
      dataset: { size },
    },
  }) => {
    const cardId = id;
    dispatch(setProductSize({ cardId, size }));
  };

  return (
    <>
      <div className="products__card card" key={id}>
        <div className="card__image">
          <img src={image} alt={`${name} image`} width={290} height={100} />
        </div>

        <div className="card__content">
          <h3 className="card__title">{name}</h3>
          <div className="card__sizes">
            {sizes.map((size) => (
              <label htmlFor={`${size.size}-${id}`} key={`${size.size}-${id}`}>
                <input
                  data-size={size.size}
                  type="radio"
                  id={`${size.size}-${id}`}
                  name={`product-size-${id}`}
                  checked={
                    selectSize.get(id) ? selectSize.get(id)[size] : false
                  }
                  onChange={handleSizeChange}
                />
                {size.value}
              </label>
            ))}
          </div>
          <div className="card__price">
            <span>Price:</span> <span>{prices[0]} UAH</span>
          </div>
          <div></div>
          <button className="card__addBtn">Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
