import { ifComps, firstCompLine, realFunction } from "./Code.constants";

const codeStart = "(() => {\n\nlet programOut = ''\n";
const codeVerifyInfiniteLoop = `\nlet linesRunned = 0;\nconst verifyMax = 200;\nconst verify = () => {linesRunned += 1;if(linesRunned > verifyMax){linesRunned = 0;return confirm('Seu programa pode estar em loop infinito! Deseja continuar?')}return true;}\n`;
const codeEnd = "\n})();";

const generateLogger = () =>
  `const log = (str) => programOut += str + '\\n';\n`;
const generateReturn = () => `const lineReturnFunction = () => {}\n`;

const normalizeLine = (line) => (line >= 0 ? line : "Return");
const normalizeRecorderName = (text) => text.split("_").pop().toUpperCase();
const normalizeFunction = (text) => text.split("_").shift();

const getFunctionName = (index) => `line${index}Function`;
const getRecorderName = (name) => `recorder_${name}`;

const setInitialRecorderValue = (recorder, value) =>
  `${getRecorderName(recorder)} = ${value};\n`;

const generateIfFunction = (items, index) => {
  const recorderName = normalizeRecorderName(items[0].text);
  const trueLine = normalizeLine(items[2].text);
  const falseLine = normalizeLine(items[4].text);
  return `${getFunctionName(
    index
  )} = () => {if(!verify()){return}if(!${getRecorderName(
    recorderName
  )}){log(getFullRecordersValues('${trueLine}')+${ifComps.good(
    recorderName,
    index,
    trueLine
  )});${getFunctionName(
    trueLine
  )}()}else{log(getFullRecordersValues('${falseLine}')+${ifComps.bad(
    recorderName,
    index,
    falseLine
  )});${getFunctionName(falseLine)}()}}\n`;
};

const mountFunctionByRecorder = (
  recorder,
  variable,
  funcType,
  line,
  nextLine
) =>
  `${realFunction[funcType].func(
    variable
  )}log(getFullRecordersValues('${nextLine}')+${realFunction[funcType].compLine(
    recorder,
    line,
    nextLine
  )});`;

const generateFunctionFunction = (items, index) => {
  const recorderName = normalizeRecorderName(items[0].text);
  const nextLine = normalizeLine(items[2].text);
  const functionType = normalizeFunction(items[0].text);
  const realFunction = mountFunctionByRecorder(
    recorderName,
    getRecorderName(recorderName),
    functionType,
    index,
    nextLine
  );
  return `${getFunctionName(
    index
  )} = () => {if(!verify()){return}${realFunction}${getFunctionName(
    nextLine
  )}()}\n`;
};

const genereteLineFunction = (line, index) => {
  if (line.type === "if") {
    return generateIfFunction(line.items, index);
  }
  if (line.type === "function") {
    return generateFunctionFunction(line.items, index);
  }
};

const generateRecordersLog = (recorders) => {
  const getRecordersName = recorders
    .map((r) => getRecorderName(r.name))
    .join("}, ${");
  const recordersToPrint = "`(${" + getRecordersName + "})`";
  return `const getRecordersValues = () => ${recordersToPrint}\n`;
};

const generateFullRecordersLog = () => {
  return `const getFullRecordersValues = (line) => ('(' + line + ' ' + getRecordersValues() + ')')\n`;
};

const runCode = () =>
  `log(getFullRecordersValues('0')+${firstCompLine})\n${getFunctionName(
    0
  )}()\n`;

const printResult = () =>
  `document.getElementById('traceTable').value = programOut;\n`;

export const generate = (recorders, lines, initialValues) => {
  let fullCode = codeStart;
  fullCode += codeVerifyInfiniteLoop;

  fullCode += generateLogger();
  fullCode += generateReturn();

  recorders.forEach(
    (recorder) => (fullCode += `let ${getRecorderName(recorder.name)} = 0;\n`)
  );

  Object.entries(initialValues).map(
    ([recorder, value]) =>
      (fullCode += setInitialRecorderValue(recorder, value))
  );

  fullCode += generateRecordersLog(recorders);
  fullCode += generateFullRecordersLog(recorders);

  lines.forEach(
    (line, index) => (fullCode += genereteLineFunction(line, index))
  );

  fullCode += runCode();
  fullCode += printResult();

  return fullCode + codeEnd;
};
