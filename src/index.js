import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./Screens/App";
import { store } from "./Redux/store";
import GlobalStyle from "./Styles/GlobalStyles";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
