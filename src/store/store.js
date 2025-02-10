import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "../redux/messageSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});
