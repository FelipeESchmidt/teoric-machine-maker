import { createStore, combineReducers } from "redux";

import appReducer from "./App/App.reducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer);
