import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: message,
  initialState: { value: "" },
  reducers: {
    setMessage: (state, action) => {
      const value = action.payload;
      state;
    },
  },
});

export const { message, setMessage } = messageSlice.actions;
export default messageSlice.reducer;
