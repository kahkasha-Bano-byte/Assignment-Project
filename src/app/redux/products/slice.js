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



const initialState= {
  products: [],
  filteredProducts: [],
  selectedSizes: [],
  sortBy: '',
};

const filterProducts = (
  products,
  selectedSizes
) => {
  if (selectedSizes.length === 0) {
    return products;
  }

  return products.filter((product) =>
    selectedSizes.some((size) =>
      product.availableSizes.includes(size)
    )
  );
};

const sortProducts = (
  products,
  sortBy
) => {
  const sorted = [...products];

  if (sortBy === "Low to High") {
    sorted.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "High to Low") {
    sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
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

    setSortBy: (
      state,
      action
    ) => {
      state.sortBy = action.payload;

      state.filteredProducts = sortProducts(
        state.filteredProducts,
        state.sortBy
      );
    },
  },
extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => {

        state.products = action.payload;

        state.filteredProducts =
          action.payload;
      }
    );
  }
  
});

export const {
  toggleSizeFilter,
  setSortBy,
} = productsSlice.actions;

export default productsSlice.reducer;