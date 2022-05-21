export const machineDefinition =
  "FGL_machine = (N{length}, N{input}, N{output}, {functionalities})\nN{length} - Conjuntos de Memória\nN{input} - Conjuntos de Entrada\nN{output} - Conjuntos de Saída";

export const whatTheFGLMachineIsAbleToDo = [
  {
    id: 1,
    name: "Armazena",
    nameResponsive: "IN",
    definitionString:
      "armazena_{recorder}: N -> N{length} tal que, ∀n∈N, armazena_{recorder}(n) = ({recorders})",
  },
  {
    id: 2,
    name: "Retorna",
    nameResponsive: "OUT",
    definitionString:
      "retorna_{recorder}: N{length} -> N tal que, ∀({recorders})∈N{length}, retorna_{recorder}({recorders}) = n",
  },
  {
    id: 3,
    name: "Soma",
    nameResponsive: "+1",
    definitionString:
      "soma_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, soma_{recorder}({recorders}) = ({recordersPlus})",
  },
  {
    id: 4,
    name: "Subtrai",
    nameResponsive: "-1",
    definitionString:
      "subtrai_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, subtrai_{recorder}({recorders}) = ({recordersLess}), se n≥0;  subtrai_{recorder}({recorders}) = ({recordersZero}), se n = 0",
  },
  {
    id: 5,
    name: "Dobra",
    nameResponsive: "*2",
    definitionString:
      "dobra_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, dobra_{recorder}({recorders}) = ({recordersTimes})",
  },
  {
    id: 6,
    name: "Exponencializa",
    nameResponsive: "^2",
    definitionString:
      "exponencializa_{recorder}: N{length} -> N{length} tal que, ∀({recorders})∈N{length}, exponencializa_{recorder}({recorders}) = ({recordersExp})",
  },
  {
    id: 7,
    name: "Compara 0",
    nameResponsive: "=0",
    definitionString:
      "eh_zero_{recorder}: N{length} -> {verdadeiro, falso} tal que, ∀({recorders})∈N{length}, eh_zero_{recorder}({recorders}) = verdadeiro, se n = 0; eh_zero_{recorder}({recorders}) = falso, se n≠0.",
  },
];
