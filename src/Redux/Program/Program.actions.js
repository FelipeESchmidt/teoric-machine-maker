import * as constants from "./Program.constants";

export const generateFunctionalities = (recorders) => ({
  type: constants.GENERATE_FUNCTIONALITIES,
  recorders,
});
