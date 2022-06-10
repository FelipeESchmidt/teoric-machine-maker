import * as constants from "./Code.constants";
import { generate } from "./Code.functions";

const defaultState = {
  code: "",
  initialValues: {},
  finalValues: [],
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.GENERATE_CODE:
      const code = generate(
        action.recorders,
        action.lines,
        state.initialValues,
        state.finalValues
      );
      return { ...state, code };

    case constants.RESET_CODE:
      return { ...defaultState };

    case constants.START_INITIAL_VALUES: {
      const initialValues = {};
      action.initialValues.map(
        (initial) => (initialValues[initial.recorder] = 0)
      );
      return { ...state, initialValues, code: "" };
    }

    case constants.SET_INITIAL_VALUE: {
      const initialValues = {
        ...state.initialValues,
        [action.recorder]: action.value,
      };
      return { ...state, initialValues, code: "" };
    }

    case constants.SET_FINAL_VALUES: {
      return { ...state, finalValues: action.finalValues, code: "" };
    }

    default: {
      return state;
    }
  }
}
