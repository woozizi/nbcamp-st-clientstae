import { configureStore } from "@reduxjs/toolkit";
import reducer from "./messageSlice";

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export default store;
