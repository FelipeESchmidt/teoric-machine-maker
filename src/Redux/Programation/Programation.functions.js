const mustHaveAtLeastTwoLines = (lines) => {
  const minimumLines = 2;
  if (lines.length < 2) {
    return `Programa precisa ter pelo menos ${minimumLines} linhas!`;
  }
  return "";
};

const mustHaveLinesTypeSelected = (lines) => {
  const linesWithOutType = lines.filter((line) => !line.type);
  if (linesWithOutType.length) {
    return `Existe alguma linha em branco!`;
  }
  return "";
};

const mustHaveCompletedLines = (lines) => {
  const linesItemsEmpty = [];
  lines.forEach((line) => {
    const emptyItems = line.items.filter((item) => !item.text);
    if (emptyItems.length) linesItemsEmpty.push(...emptyItems);
  });
  if (linesItemsEmpty.length) {
    return `Existe alguma linha com selecionador em branco!`;
  }
  return "";
};

const mustHaveAtLeastOneReturn = (lines) => {
  const linesAsReturn = [];
  lines.forEach((line) => {
    linesAsReturn.push(...line.items.filter((item) => item.text === "-1"));
  });
  if (!linesAsReturn.length) {
    return `Precisa existir ao menos um retorno no programa!`;
  }
  return "";
};

const validations = [
  mustHaveAtLeastTwoLines,
  mustHaveLinesTypeSelected,
  mustHaveCompletedLines,
  mustHaveAtLeastOneReturn,
];

export const validadePossibleErrors = (lines) => {
  let error = "";
  validations.every((validation) => {
    const e = validation(lines);
    error = e;
    return !e;
  });
  return error;
};
