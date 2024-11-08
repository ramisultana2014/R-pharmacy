import { configureStore } from "@reduxjs/toolkit";
import darkThemeReducer from "./context/darkThemeSlice";
import cartSliceReducer from "./context/cartSlice";
const store = configureStore({
  reducer: { darktheme: darkThemeReducer, cart: cartSliceReducer },
});
export default store;
