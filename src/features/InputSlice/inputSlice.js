import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    styles: {
      paddingX: "20",
      paddingY: "10",
      "font-size": "12",
      "border-width": 2,
      "border-type": "solid",
      "border-color": "#000000",
    },
  },

  reducers: {
    changeInputStyles: (state, action) => {
      const { property, value } = action.payload;
      state.styles[property] = value;
    },
  },
});

export const { changeInputStyles } = inputSlice.actions;
export default inputSlice.reducer;
