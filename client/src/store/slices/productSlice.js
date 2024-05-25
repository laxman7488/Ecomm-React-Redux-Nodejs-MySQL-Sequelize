import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'produce',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;