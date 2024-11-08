import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.itemID !== action.payload);
    },
    decreasQuantity(state, action) {
      const currentSelectedItem = state.cart.find(
        (item) => item.itemID === action.payload
      );

      currentSelectedItem.itemQuantity--;
      currentSelectedItem.totalItemPrice =
        currentSelectedItem.itemPrice * currentSelectedItem.itemQuantity;
      if (currentSelectedItem.itemQuantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    increasquantity(state, action) {
      const currentSelectItem = state.cart.find(
        (el) => el.itemID === action.payload
      );
      currentSelectItem.itemQuantity = currentSelectItem.itemQuantity + 1;
      currentSelectItem.totalItemPrice =
        currentSelectItem.itemPrice * currentSelectItem.itemQuantity;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});
export const {
  addItem,
  deleteItem,
  decreasQuantity,
  increasquantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
