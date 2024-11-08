import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  darkTheme: "",
};
const darkthemeSlice = createSlice({
  name: "darktheme",
  initialState,
  reducers: {
    addDarkTheme(state, action) {
      state.darkTheme = action.payload;
    },
  },
});
export const { addDarkTheme } = darkthemeSlice.actions;
export default darkthemeSlice.reducer;
