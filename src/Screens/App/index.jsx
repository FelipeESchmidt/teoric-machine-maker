/* istanbul ignore file */
import * as React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import AlertMessage from "../../Components/AlertMessage";
import { appSelector } from "../../Redux/App/App.selectors";
import { WholePage } from "../../Styles/GlobalStyles";
import { theme } from "../../Theme/index.theme";
import HomeScreen from "../Home";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

function App() {
  const { mode } = useSelector(appSelector);

  return (
    <ThemeProvider theme={theme[mode]}>
      <AlertMessage />
      <WholePage>
        <AppRouter />
      </WholePage>
    </ThemeProvider>
  );
}

export default App;
