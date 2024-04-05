import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPromoAsync = createAsyncThunk(
  'promo/fetchPromo',
  async (_, thunkAPI) => {
    try {
      const _apiBase = `${location.protocol}//${location.host}`;
      const response = await fetch(`${_apiBase}/promo`);

      if (!response.ok) {
        throw new Error(`Failed to fetch products by ${promoCategory}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return `${error}`;
    }
  }
);

export default fetchPromoAsync;
