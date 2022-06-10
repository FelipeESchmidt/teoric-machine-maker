import * as constants from "./Code.constants";
import { generate } from "./Code.functions";

const defaultState = {
  code: "",
  initialValues: {},
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.GENERATE_CODE:
      const code = generate(
        action.recorders,
        action.lines,
        state.initialValues
      );
      return { ...state, code };

    case constants.RESET_CODE:
      return { ...defaultState };

    case constants.SET_INITIAL_VALUE:
      const initialValues = {
        ...state.initialValues,
        [action.recorder]: action.value,
      };
      return { ...defaultState, initialValues };

    default: {
      return state;
    }
  }
}
