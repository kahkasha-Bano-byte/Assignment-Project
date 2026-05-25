import { sortProducts } from '../../utils/SortProducts.js';

import { filterProducts }
from '../../utils/FilterProducts.js';

export const getSelectedSizes = (state) =>
  state.products.selectedSizes;

export const getSortBy = (state) =>
  state.products.sortBy;

export const selectProducts = (state) => {

  const products =
    state.products.products;

  const selectedSizes =
    state.products.selectedSizes;

  const sortBy =
    state.products.sortBy;

  // filter
  const filtered =
    filterProducts(
      products,
      selectedSizes
    );

  // sort
  const sorted =
    sortProducts(
      filtered,
      sortBy
    );

  return sorted;
};
