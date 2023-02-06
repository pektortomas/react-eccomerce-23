import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  value: 0,
};

// const getCartValue = (products) => {
//   let newArr = [...initialState.products];
//   if (newArr.length === 1) return newArr[0].product_price;
//   return newArr.reduce((a, b) => a.product_price + b.product_price);
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products = [...state.products, action.payload];
      state.value += action.payload.product_price;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
