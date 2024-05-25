import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
};

export const categoriesMenuSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    toggleCategoriesMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleCategoriesMenu } = categoriesMenuSlice.actions;

export default categoriesMenuSlice.reducer;