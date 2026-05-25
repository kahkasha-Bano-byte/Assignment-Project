import { configureStore } from '@reduxjs/toolkit';

import productReducer
  from '../redux/products/slice';

import cartReducer
  from '../redux/cart/slice';

import filterReducer
  from '../redux/filters/slice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filters: filterReducer,
  },
});

export default store;