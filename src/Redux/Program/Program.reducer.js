import * as constants from "./Program.constants";
import { generate } from "./Program.functions";

const defaultState = {
  functions: [],
  comparators: [],
  definition: "",
};

export default function reducer(state = { ...defaultState }, action) {
  switch (action.type) {
    case constants.GENERATE_FUNCTIONALITIES: {
      const { functions, comparators, definition } = generate(action.recorders);
      console.log({ functions, comparators, definition });
      return { ...state, functions, comparators, definition };
    }

    default: {
      return state;
    }
  }
}
