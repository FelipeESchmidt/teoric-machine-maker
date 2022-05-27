import * as constants from "./Programation.constants";

export const addLine = () => ({
  type: constants.ADD_LINE,
});

export const setLineType = (lineType, lineIndex) => ({
  type: constants.SET_LINE_TYPE,
  lineType,
  lineIndex,
});
