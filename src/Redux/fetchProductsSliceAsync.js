import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async (productCategory, thunkAPI) => {
    try {
      const _apiBase = `${location.protocol}//${location.host}`;
      //   const response = await fetch(`/products/?category=${productCategory}`);
      // const response = await fetch(`${_apiBase}/products/${productCategory}`);
      const response = await fetch(`${_apiBase}/products/?category=${productCategory}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch products by ${productCategory}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `${error}`;
    }
  }
);

export default fetchProductsAsync;

