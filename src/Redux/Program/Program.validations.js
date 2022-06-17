import { getRecordersFilteredBy } from "./Program.functions";

/* Valida se programa tem no mínimo 4 funções */
const mustHaveAtLeastFourFunctions = ({ functions }) => {
  const minimumFunctions = 4;
  if (functions.length < minimumFunctions) {
    return `Programa precisa ter pelo menos ${minimumFunctions} funções!`;
  }
  return "";
};

/* Valida se programa tem no mínimo 3 comparadores */
const mustHaveAtLeastThreeComparators = ({ comparators }) => {
  const minimumComparators = 3;
  if (comparators.length < minimumComparators) {
    return `Programa precisa ter pelo menos ${minimumComparators} comparadores!`;
  }
  return "";
};

const validations = [
  mustHaveAtLeastFourFunctions,
  mustHaveAtLeastThreeComparators,
];

/* Roda todas as validações e retorna o erro */
export const validateFunctionalities = (recorders) => {
  let error = "";
  const functions = [];
  const comparators = [];
  recorders.forEach((recorder) => {
    const recorderFunctionalities = recorder.functionalities;
    functions.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "function")
    );
    comparators.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "comparator")
    );
  });
  validations.every((validation) => {
    const e = validation({ functions, comparators });
    error = e;
    return !e;
  });
  return error;
};
