import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    styles: {
      paddingX: "20",
      paddingY: "10",
      "background-color": "#000",
      color: "#000",
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
