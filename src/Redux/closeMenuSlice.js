import { createSlice } from '@reduxjs/toolkit';

const INITIAL_VALUE = true;

const closeMenuSlice = createSlice({
  name: 'closeMenu',
  initialState: { value: INITIAL_VALUE },
  reducers: {
    close: (state) => {
      state.value = true;
    },
    open: (state) => {
      state.value = false;
    },
  },
});

export default closeMenuSlice.reducer;
export const { open, close } = closeMenuSlice.actions;
