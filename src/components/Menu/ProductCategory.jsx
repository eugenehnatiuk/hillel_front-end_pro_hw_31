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
        productsList.forEach((product) => {
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            sizes={product.sizes}
            prices={product.prices}
            image={product.image}
          />;
        })}
    </div>
  );
};

export default ProductCategory;
