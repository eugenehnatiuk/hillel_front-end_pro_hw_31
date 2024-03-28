import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productSize: 'size-small', 
};

const sizeChangeSlice = createSlice({
  name: 'productSize',
  initialState,
  reducers: {
    setProductSize: (state, action) => {
      state.productSize = action.payload;
    },
  },
});


export const { setProductSize } = sizeChangeSlice.actions;
export default sizeChangeSlice.reducer;


 
