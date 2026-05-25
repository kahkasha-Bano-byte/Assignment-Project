import { calculateSubtotal } from '../../utils/SubTotal';

export const getCartItems = (state) =>
  state.cart.cartItems;

export const getSubtotal = (state) =>
  calculateSubtotal(state.cart.cartItems);