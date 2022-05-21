import * as constants from "./App.constants";
import { createNewRecorder, markRecorderFunctionalitie } from "./App.functions";

const swapMode = (state) => (state.mode === "dark" ? "light" : "dark");

const defaultState = {
  mode: "dark",
  recorders: [],
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.CHANGE_MODE: {
      return { ...state, mode: swapMode(state) };
    }

    case constants.ADD_RECORDER: {
      const newRecorder = createNewRecorder(
        action.functionalities,
        state.recorders
      );
      return { ...state, recorders: [...state.recorders, newRecorder] };
    }

    case constants.MARK_RECORDER: {
      const newRecorders = markRecorderFunctionalitie(
        action.recorder,
        action.functionalitie,
        [...state.recorders]
      );

      return { ...state, recorders: newRecorders };
    }

    default: {
      return state;
    }
  }
}
