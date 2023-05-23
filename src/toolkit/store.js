// store.js
import { createSlice, configureStore } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
