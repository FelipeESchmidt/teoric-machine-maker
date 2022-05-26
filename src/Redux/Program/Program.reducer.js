import * as constants from "./Program.constants";
import { generate } from "./Program.functions";

const defaultState = {
  inputs: [],
  outputs: [],
  functions: [],
  comparators: [],
  definition: "",
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.GENERATE_FUNCTIONALITIES: {
      const { inputs, outputs, functions, comparators, definition } = generate(
        action.recorders
      );
      return { ...state, inputs, outputs, functions, comparators, definition };
    }

    default: {
      return state;
    }
  }
}
