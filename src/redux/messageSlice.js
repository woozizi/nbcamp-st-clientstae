import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      console.log("액션 ===>", action);
      state.text = action.payload;
    },

    clearMessage: (state, action) => {
      state.text = "";
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
