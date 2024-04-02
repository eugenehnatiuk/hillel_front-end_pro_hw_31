/* import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const sizeChangeSlice = createSlice({
  name: 'productSize',
  initialState,
  reducers: {
    setProductSize: (state, action) => {
      const { cardId, size } = action.payload;

      const currentSizes = state[cardId] || {};

      const updatedSizes = { ...currentSizes };
      updatedSizes[size] = true;
      Object.keys(updatedSizes).forEach((key) => {
        if (key !== size) {
          updatedSizes[key] = false;
        }
      });

      state[cardId] = updatedSizes;
    },
  },
});

export const { setProductSize } = sizeChangeSlice.actions;
export default sizeChangeSlice.reducer; */
