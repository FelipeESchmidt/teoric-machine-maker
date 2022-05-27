import * as constants from "./Programation.constants";

const defaultState = {
  lines: [{}],
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.ADD_LINE: {
      return { ...state, lines: [...state.lines, {}] };
    }

    case constants.SET_LINE_TYPE: {
      const lines = [...state.lines];
      lines[action.lineIndex] = { type: action.lineType };
      return { ...state, lines };
    }

    default: {
      return state;
    }
  }
}
