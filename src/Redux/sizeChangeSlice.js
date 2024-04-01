import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productSizes: {},
};

const sizeChangeSlice = createSlice({
  name: 'productSize',
  initialState,
  reducers: {
    setProductSize: (state, action) => {
      const { cardId, size, sizename } = action.payload;
      // state.productSizes = {
      //   ...state.productSizes,
      //  [`${size}${cardId}`]: sizename
      // };
      state.productSizes[`${size}${cardId}`] = sizename;
    },
  },
});

export const { setProductSize } = sizeChangeSlice.actions;
export default sizeChangeSlice.reducer;


/* 

import { createSlice } from '@reduxjs/toolkit';

// Создаем Map для начального состояния
const initialState = new Map();

const sizeChangeSlice = createSlice({
  name: 'productSize',
  initialState,
  reducers: {
    setProductSize: (state, action) => {
      const { cardId, size } = action.payload;

      // Получаем текущее значение для данной карточки
      const currentSizes = state.get(cardId) || {};

      // Обновляем значение в зависимости от размера, выбранного пользователем
      const updatedSizes = { ...currentSizes };
      updatedSizes[size] = true;
      Object.keys(updatedSizes).forEach((key) => {
        if (key !== size) {
          updatedSizes[key] = false;
        }
      });

      // Обновляем состояние для данной карточки
      state.set(cardId, updatedSizes);
    },
  },
});

export const { setProductSize } = sizeChangeSlice.actions;
export default sizeChangeSlice.reducer;


*/