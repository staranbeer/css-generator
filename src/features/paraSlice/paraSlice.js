import { createSlice } from "@reduxjs/toolkit";

const paraSlice = createSlice({
  name: "para",

  initialState: {
    styles: {
      "font-size": "16",
      "font-family": "Roboto",
      "font-weight": 300,
      "line-height": 32,
      "letter-spacing": 2,
      "word-spacing": 2,
      color: "#333333",
    },
  },

  reducers: {
    changeParaStyles: (state, action) => {
      const { property, value } = action.payload;
      state.styles[property] = value;
    },
  },
});

export const { changeParaStyles, changeFont } = paraSlice.actions;
export default paraSlice.reducer;
