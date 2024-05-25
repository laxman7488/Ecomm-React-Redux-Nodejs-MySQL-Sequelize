import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {},
  reducers: {
    setOrder: (state, action) => {
      return action.payload;
    },
    clearOrder: (state) => {
      return {};
    },
  },
});

export const { setOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
