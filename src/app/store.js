import { configureStore } from "@reduxjs/toolkit";
import kastratReducer from "../features/kastratSlice";

const store = configureStore({
  reducer: {
    kastrat: kastratReducer,
  },
});

export default store;
