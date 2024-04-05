import { createSlice } from '@reduxjs/toolkit';
import fetchPromoAsync from './fetchPromoSliceAsync.js';

const promoSlice = createSlice({
  name: 'promo',
  initialState: {
    promoList: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPromoAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchPromoAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.promoList = action.payload;
    });
    builder.addCase(fetchPromoAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default promoSlice.reducer;
