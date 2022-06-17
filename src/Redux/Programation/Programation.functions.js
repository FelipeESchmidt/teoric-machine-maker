/* Valida se programa tem no mínimo 2 linhas */
const mustHaveAtLeastTwoLines = (lines) => {
  const minimumLines = 2;
  if (lines.length < minimumLines) {
    return `Programa precisa ter pelo menos ${minimumLines} linhas!`;
  }
  return "";
};

/* Valida se tem alguma linha sem seleção de if/function */
const mustHaveLinesTypeSelected = (lines) => {
  const linesWithOutType = lines.filter((line) => !line.type);
  if (linesWithOutType.length) {
    return `Existe alguma linha em branco!`;
  }
  return "";
};

/* Valida se todos os seletores foram selecionados */
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

/* Valida se existe algum retorno no meio do programa */
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

/* Roda todas as validações e retorna o erro */
export const validadePossibleErrors = (lines) => {
  let error = "";
  validations.every((validation) => {
    const e = validation(lines);
    error = e;
    return !e;
  });
  return error;
};
