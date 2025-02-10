import React from "react";
import { createContext } from "react";

const MessageContext = createContext({
  message: "",
  setMessage: () => {},
});
export default MessageContext;
