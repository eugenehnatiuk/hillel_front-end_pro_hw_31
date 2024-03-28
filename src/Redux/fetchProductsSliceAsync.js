import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async (productCategory, thunkAPI) => {
    try {
      const response = await fetch(`/products/${productCategory}`);

      if (!response.ok) {
        throw new Error(`Failed to fetch products by ${productCategory}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.code.message);
    }
  }
);

export default fetchProductsAsync;