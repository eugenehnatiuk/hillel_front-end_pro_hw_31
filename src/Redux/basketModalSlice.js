import { createSlice } from '@reduxjs/toolkit';

const basketModalSlice = createSlice({
  name: 'basketmodal',
  initialState: { isOpen: false },
  reducers: {
    openBasket: (state) => {
      state.isOpen = true;
    },
    closeBasket: (state) => {
      state.isOpen = false;
    },
  },
});

export default basketModalSlice.reducer;
export const { openBasket, closeBasket } = basketModalSlice.actions;
