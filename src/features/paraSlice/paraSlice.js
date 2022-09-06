import { createSlice } from "@reduxjs/toolkit";

const paraSlice = createSlice({
  name: "para",

  initialState: {
    styles: {
      "font-size": "16",
      "font-family": "Oswald",
      "font-weight": 300,
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
