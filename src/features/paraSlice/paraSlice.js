import { createSlice } from "@reduxjs/toolkit";

const paraSlice = createSlice({
  name: "para",

  initialState: {
    styles: {
      "font-size": "16",
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

export const { changeParaStyles } = paraSlice.actions;
export default paraSlice.reducer;
