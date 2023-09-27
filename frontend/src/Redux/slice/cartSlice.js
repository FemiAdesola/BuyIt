import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

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

      // Calculate the items price
      state.itemsPrice = addDecimals(state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0) );
      // return updateCart(state, items);

      // Calculate the shipping price
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

      // Calculate the tax price
      state.taxPrice = addDecimals(Number((0.24 * state.itemsPrice).toFixed(2)));

     

      // Calculate the total price
          state.totalPrice = (
            Number(state.itemsPrice) +
              Number(state.shippingPrice) +
              Number(state.taxPrice)
          ).toFixed(2);
      // Save the cart to localStorage
      localStorage.setItem("cart", JSON.stringify(state));

   
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
