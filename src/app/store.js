import { configureStore } from "@reduxjs/toolkit";
import buttonSlice from "../features/buttonSlice/buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonSlice,
  },
});

export default store;
