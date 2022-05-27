import { createStore, combineReducers } from "redux";

import appReducer from "./App/App.reducer";
import alertReducer from "./Alert/Alert.reducer";
import programReducer from "./Program/Program.reducer";
import programationReducer from "./Programation/Programation.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  alert: alertReducer,
  program: programReducer,
  programation: programationReducer,
});

export const store = createStore(rootReducer);
