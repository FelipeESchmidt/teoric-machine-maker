import { createStore, combineReducers } from "redux";

import appReducer from "./App/App.reducer";
import alertReducer from "./Alert/Alert.reducer";
import programReducer from "./Program/Program.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  alert: alertReducer,
  program: programReducer,
});

export const store = createStore(rootReducer);
