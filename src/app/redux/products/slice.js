import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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
  selectedSizes: [],
  sortBy: 'Select',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    toggleSizeFilter: (state, action) => {
      const size = action.payload;

      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter(
          (item) => item !== size
        );
      } else {
        state.selectedSizes.push(size);
      }
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export const {
  toggleSizeFilter,
  setSortBy
} = productsSlice.actions;

export default productsSlice.reducer;