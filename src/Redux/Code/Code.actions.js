import * as constants from "./Code.constants";

export const generateCode = (recorders, lines) => ({
  type: constants.GENERATE_CODE,
  recorders,
  lines,
});

export const resetCode = () => ({
  type: constants.RESET_CODE,
});

export const setInitialValue = (recorder, value) => ({
  type: constants.SET_INITIAL_VALUE,
  recorder,
  value,
});

export const startInitialValues = (initialValues) => ({
  type: constants.START_INITIAL_VALUES,
  initialValues,
});

export const setFinalValues = (finalValues) => ({
  type: constants.SET_FINAL_VALUES,
  finalValues,
});
