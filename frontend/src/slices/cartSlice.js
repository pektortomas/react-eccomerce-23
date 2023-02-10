import { createSlice } from "@reduxjs/toolkit";

const cartSetup = {
  initialCart: {
    products: [],
    value: 0,
  },
  key: "cart",
};

const getDataFromLS = (key) => {
  try {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return null;
  }
};

const putDataToLS = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

const initialState = getDataFromLS(cartSetup.key) ?? cartSetup.initialCart;
console.log(initialState);

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
      putDataToLS(cartSetup.key, state);
    },
    removeFromCart: (state, action) => {
      state.products = [...state.products.filter((product) => product.product_id !== action.payload.product_id)];
      state.value -= action.payload.product_price;
      putDataToLS(cartSetup.key, state);
    },
    removeAllCart: (state, action) => {
      window.localStorage.removeItem(cartSetup.key);
      state.products = [];
      state.value = 0;
    },
  },
});

export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions;

export default cartSlice.reducer;
