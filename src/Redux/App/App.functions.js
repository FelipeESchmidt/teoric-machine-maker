const normalizeFunctionalities = (functionalities) => {
  return functionalities.map((func) => ({
    ...func,
    marked: false,
  }));
};

/* Cria novo Registrador e adiciona todas funcionalidades possíveis a ele */
export const createNewRecorder = (functionalities, recorders) => {
  const lastRecorder = [...recorders].pop();
  const newRecorderName = lastRecorder
    ? lastRecorder.name.charCodeAt(0)
    : "@".charCodeAt(0);
  return {
    name: String.fromCharCode(newRecorderName + 1),
    functionalities: normalizeFunctionalities(functionalities),
  };
};

/* Seleciona funcionalidade para um registrador */
export const markRecorderFunctionalitie = (
  recorderId,
  functionalitieId,
  recorders
) => {
  const recorder = recorders[recorderId];
  const functionalitie = recorder.functionalities[functionalitieId];
  functionalitie.marked = !functionalitie.marked;
  return recorders;
};
