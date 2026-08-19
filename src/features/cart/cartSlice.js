import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    delItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decItem(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      if (item.quantity === 0) cartSlice.caseReducers.delItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { updItem, delItem, incItem, decItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
