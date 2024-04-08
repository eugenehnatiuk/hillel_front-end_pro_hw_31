import { createSlice } from '@reduxjs/toolkit';

const handleOderSlice = createSlice({
  name: 'handleOrder',
  initialState: {
    order: [],
    totalPrice: JSON.parse(localStorage.getItem('totalPrice')),
    isOrderPlaced: false,
    showOrderForm: false,
    clearOrderModal: false,
  },
  reducers: {
    showClearOrer: (state) => {
      state.clearOrderModal = true;
    },
    hideClearOrer: (state) => {
      state.clearOrderModal = false;
    },

    showForm: (state) => {
      state.showOrderForm = true;
    },
    hideForm: (state) => {
      state.showOrderForm = false;
    },

    setOrderPlaced: (state, action) => {
      state.isOrderPlaced = action.payload;
    },

    addOrder: (state, action) => {
      const {id, size } = action.payload

      const existingPizzaIndex = state.order.findIndex(
        (item) =>
          item.id === id && item.size === size
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
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
  
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
        localStorage.setItem('totalPrice', state.totalPrice.toString());
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
        localStorage.setItem('totalPrice', state.totalPrice.toString());
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
  showForm,
  hideForm,
  showClearOrer,
  hideClearOrer,
} = handleOderSlice.actions;
export default handleOderSlice.reducer;
