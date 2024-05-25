import { configureStore } from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import categoriesMenuSlice from './slices/categoriesMenuSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';

export default configureStore({
  reducer: {
    products: productSlice,
    categoriesMenu: categoriesMenuSlice,
    carts: cartSlice,
    order: orderSlice
  },
});