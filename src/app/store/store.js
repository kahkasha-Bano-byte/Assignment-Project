import { configureStore } from '@reduxjs/toolkit';

import productReducer
  from '../redux/products/slice';

import cartReducer
  from '../redux/cart/slice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;