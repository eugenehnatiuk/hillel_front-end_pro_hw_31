import { createSlice } from '@reduxjs/toolkit';

const handleOderSlice = createSlice({
  name: 'handleOrder',
  initialState: {
    order: [],
    isOrderPlaced: false,
    totalPrice: 0,
  },
  reducers: {
    setOrderPlaced: (state, action) => {
      state.isOrderPlaced = action.payload;
    },

    addOrder: (state, action) => {
      const existingPizzaIndex = state.order.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingPizzaIndex !== -1) {
        state.order[existingPizzaIndex].quantity += 1;
        state.order[existingPizzaIndex].totalByIndexPrice =
          state.order[existingPizzaIndex].quantity * action.payload.price;
      } else {
        state.order.push({
          ...action.payload,
          quantity: 1,
          totalByIndexPrice: action.payload.price,
        });
      }
      //
      state.totalPrice = state.order.reduce(
        (total, item) => total + item.totalByIndexPrice,
        0
      );
      //
      localStorage.setItem('order', JSON.stringify(state.order));
    },

    clearOrder: (state) => {
      state.order = [];
      localStorage.clear();
      state.totalPrice = 0;
    },

    initializeOrderFromLocalStorage: (state) => {
      const orderFromLocalStorage = localStorage.getItem('order');
      if (orderFromLocalStorage) {
        state.order = JSON.parse(orderFromLocalStorage);
      }
    },

    decreaseQuantity: (state, action) => {
      const { id, size, price } = action.payload;
      const existingPizzaIndex = state.order.findIndex(
        (item) => item.id === id && item.size === size
      );

      if (
        existingPizzaIndex !== -1 &&
        state.order[existingPizzaIndex].quantity > 0
      ) {
        state.order[existingPizzaIndex].quantity -= 1;
        state.order[existingPizzaIndex].totalByIndexPrice -= price;
        state.totalPrice -= price;
        if (state.order[existingPizzaIndex].quantity === 0) {
          state.order.splice(existingPizzaIndex, 1);
          if (state.order.length === 0) {
            localStorage.clear();
            return;
          }
        }
        localStorage.setItem('order', JSON.stringify(state.order));
      }
    },

    increaseQuantity: (state, action) => {
      const { id, size, price } = action.payload;
      const existingPizzaIndex = state.order.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (existingPizzaIndex !== -1) {
        state.order[existingPizzaIndex].quantity += 1;
        state.order[existingPizzaIndex].totalByIndexPrice += price;
        state.totalPrice += price;
      }
      localStorage.setItem('order', JSON.stringify(state.order));
    },
  },
});

export const {
  addOrder,
  clearOrder,
  initializeOrderFromLocalStorage,
  decreaseQuantity,
  increaseQuantity,
  setOrderPlaced,
} = handleOderSlice.actions;
export default handleOderSlice.reducer;
