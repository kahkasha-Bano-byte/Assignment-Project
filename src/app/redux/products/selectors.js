// import { sortProducts } from '../../utils/SortProducts.js';
// import { filterProducts } from '../../utils/FilterProducts.js';

// export const selectProducts = (state) =>
//   state.products.filteredProducts;

// export const selectSelectedSizes = (state) => {
//   const products = state.products.products;
//   const selectedSizes = state.products.selectedSizes;

//   return filterProducts(products, selectedSizes);
// };

// export const selectSortedProducts = (state) => {
//   const products = state.products.products;
//   const sortBy = state.products.sortBy;

//   return sortProducts(products, sortBy);
// };



export const selectProducts = (state) =>
  state.products.filteredProducts;

export const selectSelectedSizes = (state) =>
  state.products.selectedSizes;

export const selectSortedProducts = (state) =>
  state.products.filteredProducts;