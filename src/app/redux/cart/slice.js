import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {

    increment: (state, action) => {

      const item =
        state.cartItems.find(
          item => item.id === action.payload
        );

      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {

      const item =
        state.cartItems.find(
          item => item.id === action.payload
        );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    addToCart: (state, action) => {

      const product = action.payload;

      const existingItem =
        state.cartItems.find(
          item => item.id === product.id
        );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.cartItems.push({
          ...product,
          quantity: 1,
        });

      }
    },

    removeFromCart: (
      state,
      action
    ) => {

      state.cartItems =
        state.cartItems.filter(
          item => item.id !== action.payload
        );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increment,
  decrement,
} = cartSlice.actions;

export default cartSlice.reducer;