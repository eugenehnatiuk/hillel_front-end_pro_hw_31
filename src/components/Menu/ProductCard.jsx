import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../Redux/handleOrderSlice.js';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProductSize } from '../../Redux/sizeChangeSlice.js';

const ProductCard = ({ id, name, sizes, image, prices }) => {
  const dispatch = useDispatch();

  /*   
  const selectSize = useSelector((state) => state.productSize);

  const handleSizeChange = (size) => {
    dispatch(setProductSize({ cardId: id, size }));
    setSelectedSize(size);
  }; */
  
  const [selectedSize, setSize] = useState('S');

  const addToBasket = () => {
    const orderItem = {
      id,
      name,
      size: selectedSize,
      price: selectedSize === 'S' ? prices[0] : prices[1],
      image,
    };

    dispatch(addOrder(orderItem));
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
            {sizes.map((sizeItem) => (
              <label
                htmlFor={`${sizeItem.size}-${id}`}
                key={`${sizeItem.size}-${id}`}
              >
                <input
                  type="radio"
                  id={`${sizeItem.size}-${id}`}
                  name={`product-size-${id}`}
                  checked={selectedSize === sizeItem.size}
                  // checked={selectSize[id] ? selectSize[id][sizeItem] : false}
                  onChange={() => setSize(sizeItem.size)}
                />
                {sizeItem.value}
              </label>
            ))}
          </div>
          <div className="card__price">
            <span>Price:</span>{' '}
            <span>{selectedSize === 'S' ? prices[0] : prices[1]} UAH</span>
          </div>
          <div></div>
          <button className="card__addBtn" onClick={addToBasket}>
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
