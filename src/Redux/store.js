import { createStore, combineReducers } from "redux";

import appReducer from "./App/App.reducer";
import programReducer from "./Program/Program.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  program: programReducer,
});

export const store = createStore(rootReducer);
