export const SET_INITIAL_VALUE = "@code/SET_INITIAL_VALUE";
export const GENERATE_CODE = "@code/GENERATE_CODE";
export const RESET_CODE = "@code/RESET_CODE";

export const firstCompLine = `'\tinstrução inicial e valores de entrada armazenados'`;

export const ifComps = {
  good: (recorder, line, nextLine) =>
    `'\tem ${line}, como ${recorder} = 0, desviou para ${nextLine}'`,
  bad: (recorder, line, nextLine) =>
    `'\tem ${line}, como ${recorder} ≠ 0, desviou para ${nextLine}'`,
};

export const realFunction = {
  soma: {
    func: (recorderName) => `${recorderName} += 1;`,
    compLine: (recorder, line, nextLine) =>
      `'\tem ${line}, adicionou do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  subtrai: {
    func: (recorderName) => `${recorderName} -= 1;`,
    compLine: (recorder, line, nextLine) =>
      `'\tem ${line}, subtraiu do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  dobra: {
    func: (recorderName) => `${recorderName} *= 2;`,
    compLine: (recorder, line, nextLine) =>
      `'\tem ${line}, duplicou do registrador ${recorder} e desviou para ${nextLine}'`,
  },
  exponencializa: {
    func: (recorderName) => `${recorderName} *= ${recorderName};`,
    compLine: (recorder, line, nextLine) =>
      `'\tem ${line}, exponencializou do registrador ${recorder} e desviou para ${nextLine}'`,
  },
};
