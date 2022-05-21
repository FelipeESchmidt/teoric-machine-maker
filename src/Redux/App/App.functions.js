const normalizeFunctionalities = (functionalities) => {
  return functionalities.map((func) => ({
    id: func.id,
    name: func.name,
    nameResponsive: func.nameResponsive,
    definitionString: func.definitionString,
    marked: false,
  }));
};

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
