import { createSlice } from '@reduxjs/toolkit';

const initialState = new Map();

const sizeChangeSlice = createSlice({
  name: 'productSize',
  initialState,
  reducers: {
    setProductSize: (state, action) => {
      const { cardId, size } = action.payload;

      const currentSizes = state.get(cardId) || {};

      const updatedSizes = { ...currentSizes };
      updatedSizes[size] = true;
      Object.keys(updatedSizes).forEach((key) => {
        if (key !== size) {
          updatedSizes[key] = false;
        }
      });

      state.set(cardId, updatedSizes);
    },
  },
});

export const { setProductSize } = sizeChangeSlice.actions;
export default sizeChangeSlice.reducer;
