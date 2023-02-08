import { ChakraProvider } from "@chakra-ui/react";
import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { TodoStore } from "./store/TodoStore";
import { UserStore } from "./store/userStore";

const todoStore = new TodoStore();
const userStore = new UserStore();
export const Context = createContext({
  todoStore,
  userStore,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Context.Provider value={{ todoStore, userStore }}>
      <App />
    </Context.Provider>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
