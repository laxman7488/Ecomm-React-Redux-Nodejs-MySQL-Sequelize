import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const data = action.payload;
      const existingItem = state.items.find(item => item.id === data.id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...data, qty:1});
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQty: (state, action) => {
      const itemToIncrement = state.items.find(item => item.id === action.payload);
      if (itemToIncrement) {
        itemToIncrement.qty += 1;
      }
    },
    decrementQty: (state, action) => {
      const itemToDecrement = state.items.find(item => item.id === action.payload);
      if (itemToDecrement && itemToDecrement.qty > 1) {
        itemToDecrement.qty -= 1;
      }
    },
    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart, incrementQty, decrementQty } = cartSlice.actions;

export default cartSlice.reducer;
