import * as constants from "./App.constants";

const swapMode = (state) => (state.mode === "dark" ? "light" : "dark");

const defaultState = {
  mode: "dark",
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.CHANGE_MODE: {
      return { ...state, mode: swapMode(state) };
    }

    default: {
      return state;
    }
  }
}
