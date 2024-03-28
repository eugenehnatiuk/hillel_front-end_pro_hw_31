import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setProductSize } from '../../Redux/sizeChangeSlice.js';

const ProductList = ({ id, name, sizes, prices, image }) => {
  const dispatch = useDispatch();
  const selectSize = useSelector((state) => state.productSize.productSize);

  const handleSizeChange = ({ target }) => {
    dispatch(setProductSize(target.value));
  };

  return (
    <></>
  );
};

export default ProductList;