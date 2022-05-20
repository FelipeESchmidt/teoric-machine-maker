import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./Screens/App";
import { store } from "./Redux/store";
import GlobalStyle from "./Styles/GlobalStyles";

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
