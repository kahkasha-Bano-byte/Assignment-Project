import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { sortProducts } from '../../utils/SortProducts';
import { filterProducts } from '../../utils/FilterProducts.js';
const API_URL =
  'https://mocki.io/v1/0fdb8e9e-df08-4b67-9ae0-3cb4eccd3bc8';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data.products;
  }
);



const initialState = {
  products: [],
  filteredProducts: [],
  selectedSizes: [],
  sortBy: 'Select'
};



const productsSlice = createSlice({
  name: 'products',

  initialState,

  reducers: {
    toggleSizeFilter: (
      state,
      action
    ) => {
      const size = action.payload;

      if (state.selectedSizes.includes(size)) {
        state.selectedSizes =
          state.selectedSizes.filter(
            (item) => item !== size
          );
      } else {
        state.selectedSizes.push(size);
      }

      const filtered = filterProducts(
        state.products,
        state.selectedSizes
      );

      state.filteredProducts = sortProducts(
        filtered,
        state.sortBy
      );
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;

      const filtered = filterProducts(
        state.products,
        state.selectedSizes
      );

      state.filteredProducts = sortProducts(
        filtered,
        state.sortBy
      );
    },


  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;

      const filtered = filterProducts(
        action.payload,
        state.selectedSizes
      );

      state.filteredProducts = sortProducts(
        filtered,
        state.sortBy
      );
    });
  }

});

export const {
  toggleSizeFilter,
  setSortBy
} = productsSlice.actions;

export default productsSlice.reducer;