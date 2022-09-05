import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    styles: {
      paddingX: "20",
      paddingY: "10",
      "font-size": "16",
      "border-width": 0,
      "border-type": "solid",
      "border-color": "#000000",
      color: "#ffffff",
      "background-color": "#3b83f6",
      "box-shadow":
        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      "border-radius": "5",
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
