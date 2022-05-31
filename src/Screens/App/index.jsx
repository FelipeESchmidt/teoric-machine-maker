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
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import HomeScreen from "../Home";
import ProgramationScreen from "../Programation";
import CodeRunnerScreen from "../CodeRunner";

import { routes } from "./routes";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path={`/${routes.programation}`}
          element={<ProgramationScreen />}
        />
        <Route path={`/${routes.codeRunner}`} element={<CodeRunnerScreen />} />
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
        <Header />
        <AppRouter />
        <Footer />
      </WholePage>
    </ThemeProvider>
  );
}

export default App;
