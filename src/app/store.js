import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../features/buttonSlice/buttonSlice";
import inputSlice from "../features/InputSlice/inputSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice,
    input: inputSlice,
  },
});

export default store;
