import { machineDefinition } from "../../Components/Definition/index.constants";
import { lengthValues, replaceableParts } from "./Program.constants";

/* Executa filtro de acordo com tipo da funcionalidade e registradors que possuem essa funcionalidade */
const filterBy = (type) => (f) => f.type === type && f.marked;

/* Substitui alguma informação dentro de uma string */
const replaceInfo = (string, search, value) =>
  string.replace(new RegExp(search, "g"), value);

/* Altera definição de funcionalidade de acordo com o nome do Registrador */
const normalizeFuncs = (recorder, type) => (func) => ({
  type,
  recorder: recorder.name,
  definition: replaceInfo(func.definitionString, "{recorder}", recorder.name),
});

/* Seleciona todos os registradores de acordo com o tipo da funcionalidade */
const getRecordersFilteredBy = (recorderFuncs, recorder, type) => {
  const recorderFunctions = recorderFuncs.filter(filterBy(type));
  return recorderFunctions.map(normalizeFuncs(recorder, type));
};

/* Altera string com todos os registradores para de acordo com funcionalidade (A,B,C,D) -> (A+1,B,C,D) */
const betterAll = (name, recordersAll, replaceBy) =>
  replaceInfo(recordersAll, name, replaceBy);

/* Altera informações '{info}' pela informação de acordo com o registrador 
  FROM - armazena_{recorder}: N -> N{length} tal que, ∀n∈N, armazena_{recorder}({recorder}) = ({recorders})
  TO   - armazena_A: N -> N⁶ tal que, ∀n∈N, armazena_A(A) = (A,B,C,D,E,F)
*/
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

/* Gera definição de todas as funcionalidades marcadas da máquina */
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

/* Gera definição geral da máquina */
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

/* Gera definição inteira da máquina e gera variáveis que serão usadas em outros lugares do app */
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
