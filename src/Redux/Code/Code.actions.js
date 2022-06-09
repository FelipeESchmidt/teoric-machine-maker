import * as constants from "./Code.constants";

export const generateCode = (recorders, lines) => ({
  type: constants.GENERATE_CODE,
  recorders,
  lines,
});

export const resetCode = () => ({
  type: constants.RESET_CODE,
});
