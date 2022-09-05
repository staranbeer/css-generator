import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../features/buttonSlice/buttonSlice";
import inputSlice from "../features/InputSlice/inputSlice";
import paraSlice from "../features/paraSlice/paraSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice,
    input: inputSlice,
    para: paraSlice,
  },
});

export default store;
