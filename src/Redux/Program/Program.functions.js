import { machineDefinition } from "../../Components/Definition/index.constants";
import { lengthValues, replaceableParts } from "./Program.constants";

const filterBy = (type) => (f) => f.type === type && f.marked;

const replaceInfo = (string, search, value) =>
  string.replace(new RegExp(search, "g"), value);

const normalizeFuncs = (recorder, type) => (func) => ({
  type,
  recorder: recorder.name,
  definition: replaceInfo(func.definitionString, "{recorder}", recorder.name),
});

const getRecordersFilteredBy = (recorderFuncs, recorder, type) => {
  const recorderFunctions = recorderFuncs.filter(filterBy(type));
  return recorderFunctions.map(normalizeFuncs(recorder, type));
};

const betterAll = (name, recordersAll, replaceBy) =>
  replaceInfo(recordersAll, name, replaceBy);

const normalizeDefinition = (definition, name, allRecorders) => {
  let definitionNormalized = definition;
  const allRecordersJoined = allRecorders.join(",");
  const replaceableObj = {
    name,
    allRecorders: allRecordersJoined,
    length: lengthValues[allRecorders.length],
    allRecordersTimes: betterAll(name, allRecordersJoined, `${name}*2`),
    allRecordersPlus: betterAll(name, allRecordersJoined, `${name}+1`),
    allRecordersLess: betterAll(name, allRecordersJoined, `${name}-1`),
    allRecordersZero: betterAll(name, allRecordersJoined, "0"),
    allRecordersExp: betterAll(name, allRecordersJoined, `${name}^2`),
  };
  replaceableParts.forEach((replaceable) => {
    if (replaceableObj[replaceable.for])
      definitionNormalized = replaceInfo(
        definitionNormalized,
        replaceable.to,
        replaceableObj[replaceable.for]
      );
  });
  return definitionNormalized;
};

const generateMachineDefinition = (recorders) => {
  const definitions = [];
  const definitionsName = [];
  const allRecorders = recorders.map((r) => r.name);
  recorders.forEach((recorder) => {
    recorder.functionalities
      .filter((r) => r.marked)
      .forEach((recFunc) => {
        definitions.push(recFunc.definitionStringFull);
        definitionsName.push(recorder.name);
      });
  });
  const normalizedDefinitions = definitions
    .map((def, i) => normalizeDefinition(def, definitionsName[i], allRecorders))
    .sort();
  return normalizedDefinitions.join("\n");
};

const generateMainDefinition = (recorders) => {
  let mainDefinition = machineDefinition;
  const definitions = [];
  const inputs = [];
  const outputs = [];
  recorders.forEach((recorder) => {
    inputs.push(...recorder.functionalities.filter(filterBy("input")));
    outputs.push(...recorder.functionalities.filter(filterBy("output")));
    recorder.functionalities
      .filter((r) => r.marked)
      .forEach((recFunc) => {
        definitions.push(
          replaceInfo(recFunc.definitionString, "{recorder}", recorder.name)
        );
      });
  });
  definitions.sort();
  const replaceableObj = {
    length: lengthValues[recorders.length],
    input: lengthValues[inputs.length],
    output: lengthValues[outputs.length],
    functionalities: definitions.join(", "),
  };
  replaceableParts.forEach((replaceable) => {
    if (replaceableObj[replaceable.for])
      mainDefinition = replaceInfo(
        mainDefinition,
        replaceable.to,
        replaceableObj[replaceable.for]
      );
  });
  return mainDefinition;
};

export const generate = (recorders) => {
  const inputs = [];
  const outputs = [];
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
    inputs.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "input")
    );
    outputs.push(
      ...getRecordersFilteredBy(recorderFunctionalities, recorder, "output")
    );
  });
  functions.sort();
  comparators.sort();
  const mainDefinition = generateMainDefinition(recorders);
  const funcsDefinition = generateMachineDefinition(recorders);
  return {
    inputs,
    outputs,
    functions,
    comparators,
    definition: mainDefinition + "\n\n" + funcsDefinition,
  };
};
