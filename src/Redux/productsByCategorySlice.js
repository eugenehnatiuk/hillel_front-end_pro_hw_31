import { createSlice } from '@reduxjs/toolkit';
import fetchProductsAsync from './fetchProductsSliceAsync.js';

const productsByCategorySlice = createSlice({
  name: 'productsByCategory',
  initialState: {
    productsList: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      (state.loading = false), (state.productsList = action.payload);
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });
  },
});

export default productsByCategorySlice.reducer;
