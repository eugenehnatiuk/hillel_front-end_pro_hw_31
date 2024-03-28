import React, { useEffect } from 'react';
import ProductList from './Productlist.jsx';
import { useDispatch, useSelector } from 'react-redux';
import fetchProductsAsync from '../../Redux/fetchProductsSliceAsync.js';

const ProductCategory = ({ productCategory }) => {
  const dispatch = useDispatch();
  const { productsList, loading, error } = useSelector((state) => {
    state.productsByCategory;
  });

  useEffect(() => {
    dispatch(fetchProductsAsync(productCategory));
  }, productCategory);

  if (loading) {
    return <div className="loading"> Loading </div>;
  }
  if (error) {
    return <div className="errorFetching">Error: {error}</div>;
  }

  return (
    <div className="products container">
      <ProductList
        key={productsList.id}
        id={productsList.id}
        name={productsList.name}
        sizes={productsList.size}
        prices={productsList.price}
        image={productsList.image}
      />
    </div>
  );
};

export default ProductCategory;
