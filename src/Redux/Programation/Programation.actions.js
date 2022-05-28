import * as constants from "./Programation.constants";

export const addLine = () => ({
  type: constants.ADD_LINE,
});

export const setLineType = (lineType, lineItems, lineIndex) => ({
  type: constants.SET_LINE_TYPE,
  lineType,
  lineItems,
  lineIndex,
});

export const setLineSelection = (value, itemIndex, lineIndex) => ({
  type: constants.SET_LINE_SELECTION,
  value,
  itemIndex,
  lineIndex,
});
