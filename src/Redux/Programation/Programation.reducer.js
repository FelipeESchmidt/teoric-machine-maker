import { linesDefault } from "./a";
import * as constants from "./Programation.constants";
import { validadePossibleErrors } from "./Programation.functions";

const defaultState = {
  lines: linesDefault, // [{}]
  isValid: false,
  error: "",
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.ADD_LINE: {
      return { ...state, lines: [...state.lines, {}], isValid: false };
    }

    case constants.REMOVE_LINE: {
      const newLines = [...state.lines];
      newLines.splice(action.lineIndex, 1);
      return { ...state, lines: newLines, isValid: false };
    }

    case constants.SET_LINE_TYPE: {
      const lines = [...state.lines];
      lines[action.lineIndex] = {
        type: action.lineType,
        items: action.lineItems,
      };
      return { ...state, lines };
    }

    case constants.SET_LINE_SELECTION: {
      const lines = [...state.lines];
      lines[action.lineIndex].items[action.itemIndex] = { text: action.value };
      return { ...state, lines };
    }

    case constants.VALIDATE_LINES: {
      const error = validadePossibleErrors([...state.lines]);
      return { ...state, error, isValid: !error };
    }

    default: {
      return state;
    }
  }
}
