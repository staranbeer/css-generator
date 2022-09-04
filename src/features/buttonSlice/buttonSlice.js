import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    styles: {
      paddingX: "20",
      paddingY: "10",
      "border-width": 2,
      "border-type": "solid",
      "border-color": "#000000",
    },
  },

  reducers: {
    changeButtonStyles: (state, action) => {
      const { property, value } = action.payload;
      state.styles[property] = value;
    },
  },
});

export const { changeButtonStyles } = buttonSlice.actions;
export default buttonSlice.reducer;
