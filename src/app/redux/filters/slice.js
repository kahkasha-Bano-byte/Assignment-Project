import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  selectedSizes: [],
  sortOption: '',
};

const filterSlice = createSlice({
  name: 'filters',

  initialState,

  reducers: {
    toggleSize: (state, action) => {
      const size = action.payload;

      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter(
          (item) => item !== size
        );
      } else {
        state.selectedSizes.push(size);
      }
    },

    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
  },
});

export const {
  toggleSize,
  setSortOption,
} = filterSlice.actions;

export default filterSlice.reducer;