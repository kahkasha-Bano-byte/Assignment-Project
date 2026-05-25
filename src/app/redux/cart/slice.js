import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  subtotal: 0,
};

const calculateSubtotal = (items) => {
  return items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
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

      state.subtotal =
        calculateSubtotal(state.cartItems);
    },

    removeFromCart: (
      state,
      action
    ) => {

      state.cartItems =
        state.cartItems.filter(
          item => item.id !== action.payload
        );

      state.subtotal =
        calculateSubtotal(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;