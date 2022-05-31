import * as constants from "./Code.constants";
import { generate } from "./Code.functions";

const defaultState = {
  code: "",
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.GENERATE_CODE:
      const code = generate(action.recorders, action.lines);
      return { ...state, code };

    default: {
      return state;
    }
  }
}
