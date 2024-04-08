import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import fetchProductsAsync from '../../Redux/fetchProductsSliceAsync.js';
import ProductCard from './ProductCard.jsx';

const ProductCategory = ({ productCategory }) => {
  const dispatch = useDispatch();
  const { productsList, loading, error } = useSelector(
    (state) => state.productsByCategory
  );

  useEffect(() => {
    dispatch(fetchProductsAsync(productCategory));
  }, [productCategory]);

  if (loading) {
    return <div className="loading"> Loading </div>;
  }
  if (error) {
    return <div className="errorFetching">Error: {error}</div>;
  }

  return (
    <div className="products container">
      {productsList &&
        productsList.map(
          ({
            id,
            name,
            sizes,
            prices,
            image,
            composition,
            description,
            isActive,
          }) => (
            <ProductCard
              key={id}
              id={id}
              name={name}
              sizes={sizes}
              prices={prices}
              image={image}
              composition={composition}
              description={description}
              isActive={isActive}
            />
          )
        )}
    </div>
  );
};

export default ProductCategory;
