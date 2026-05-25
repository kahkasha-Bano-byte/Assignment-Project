export const selectProducts = (state) =>
  state.products.filteredProducts;

export const selectSelectedSizes = (state) =>
  state.products.selectedSizes;

export const selectSortBy = (state) =>
  state.products.sortBy;