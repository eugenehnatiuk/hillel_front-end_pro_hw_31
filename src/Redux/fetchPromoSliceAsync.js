import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchPromoAsync = createAsyncThunk('promo/fetchPromo', async () => {

  const response = await fetch(`http://127.0.0.1:7000/promo`);

  if (!response.ok) {
    throw new Error(`Failed to fetch promo`);
  }

  const data = await response.json();
  return data;
});

export default fetchPromoAsync;
