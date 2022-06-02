const codeStart = "(() => {\n\nlet programOut = ''\n";
const codeEnd = "\nconsole.log(programOut)\n})();";

const generateLogger = () =>
  `const log = (str) => programOut += str + '\\n';\n`;
const generateReturn = () => `const lineReturnFunction = () => {}\n`;

const normalizeLine = (line) => (line >= 0 ? line : "Return");
const normalizeRecorderName = (text) => text.split("_").pop().toUpperCase();

const getFunctionName = (index) => `line${index}Function`;
const getRecorderName = (name) => `recorder_${name}`;

const generateIfFunction = (items, index) => {
  const recorderName = normalizeRecorderName(items[0].text);
  const trueLine = normalizeLine(items[2].text);
  const falseLine = normalizeLine(items[4].text);
  return `${getFunctionName(index)} = () => {if(${getRecorderName(
    recorderName
  )}){${getFunctionName(trueLine)}()}else{${getFunctionName(falseLine)}()}}\n`;
};

/* STOPPED HERE */
const generateFunctionFunction = (items, index) => {
  const recorderName = normalizeRecorderName(items[0].text);
  const nextLine = normalizeLine(items[2].text);
  return `${getFunctionName(index)} = () => {() => {};${getFunctionName(
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

export const generate = (recorders, lines) => {
  let fullCode = codeStart;

  fullCode += generateLogger();
  fullCode += generateReturn();

  recorders.forEach(
    (recorder) => (fullCode += `let ${getRecorderName(recorder.name)} = 0;\n`)
  );
  fullCode += generateRecordersLog(recorders);
  fullCode += generateFullRecordersLog(recorders);

  lines.forEach(
    (line, index) => (fullCode += genereteLineFunction(line, index))
  );

  return fullCode + codeEnd;
};
