import { createSlice } from "@reduxjs/toolkit";
import { cartUpdate } from "../../utils/cartUpdate";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const items = action.payload;
      const existItem = state.cartItems.find((item) => item._id === items._id);

      if (existItem) {
        state.cartItems = state.cartItems.map((item) =>
          item._id === existItem._id ? items : item
        );
      } else {
        state.cartItems = [...state.cartItems, items];
      }
        return cartUpdate(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item._id !== action.payload);
      return cartUpdate(state);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
