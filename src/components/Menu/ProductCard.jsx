import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from '../../Redux/handleOrderSlice.js';
// import { useDispatch, useSelector } from 'react-redux';
// import { setProductSize } from '../../Redux/sizeChangeSlice.js';

const ProductCard = ({
  id,
  name,
  sizes,
  image,
  prices,
  composition,
  isActive,
}) => {
  const dispatch = useDispatch();

  /*   
  const selectSize = useSelector((state) => state.productSize);

  const handleSizeChange = (size) => {
    dispatch(setProductSize({ cardId: id, size }));
    setSelectedSize(size);
  }; */

  const [selectedSize, setSize] = useState('S');
  const [isFlipped, setFlipped] = useState(false);

  const selectedSizeIndex = sizes.findIndex(
    (item) => item.size === selectedSize
  );

  const addToBasket = () => {
    const orderItem = {
      id,
      name,
      size: selectedSize,
      price: prices[selectedSizeIndex],
      image,
    };

    dispatch(addOrder(orderItem));
  };
  return (
    <>
      <div
        className={`products__card card ${isFlipped ? 'is-flipped' : ''} ${
          isActive ? '' : 'inactive'
        }`}
        key={id}
      >
        {isFlipped ? (
          <div
            className="card__face card__face--back"
            onClick={() => setFlipped(!isFlipped)}
          >
            <div className={`card__content ${isFlipped ? 'is-flipped' : ''}`}>
              <h3 className="card__title">Composition:</h3>
              <p>
                Energy: <span>{composition.energy}</span>
              </p>
              <p>
                Fat: <span>{composition.fat}</span>
              </p>
              <p>
                Carbohydrates: <span>{composition.carbohydrates}</span>
              </p>
              <p>
                Protein: <span>{composition.protein}</span>
              </p>
              <p>
                Ingredients: <span>{composition.ingredients.join(', ')}</span>
              </p>
              <p>
                Allergens:{' '}
                <span>
                  {composition.allergens.length !== 0
                    ? composition.allergens.join(', ')
                    : 'No allergens'}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="card__face card__face--front">
            <div className="card__image">
              <img
                src={image}
                alt={`${name} image`}
                width={290}
                height={100}
                onClick={() => setFlipped(!isFlipped)}
              />
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
        )}
      </div>
    </>
  );
};

export default ProductCard;
