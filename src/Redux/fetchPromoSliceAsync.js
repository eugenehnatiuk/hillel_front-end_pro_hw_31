import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPromoAsync = createAsyncThunk('promo/fetchPromo', async () => {

  const response = await fetch(`/promo`);

  if (!response.ok) {
    throw new Error(`Failed to fetch promo`);
  }

  const data = await response.json();
  return data;
});

export default fetchPromoAsync;
