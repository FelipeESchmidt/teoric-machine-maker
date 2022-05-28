import {
  recorderLimits,
  whatTheFGLMachineIsAbleToDo,
} from "../../Components/Definition/index.constants";
import { createNewRecorder, markRecorderFunctionalitie } from "./App.functions";

/* Vai retornar mais TRUE do que FALSE, sendo mais difícil uma func não ser selecionada =D */
const generateRandomBoolean = () => Math.random() < 0.67;

const generateRandomNumber = ({ min = 2, max = 5 }) =>
  parseInt(Math.random() * (max - min) + min);

export const generateRandomMachine = () => {
  const recorders = [];

  Array.from(new Array(generateRandomNumber(recorderLimits))).forEach(() => {
    recorders.push(createNewRecorder(whatTheFGLMachineIsAbleToDo, recorders));
  });

  recorders.forEach((_, recorderId) => {
    whatTheFGLMachineIsAbleToDo.forEach((__, funcId) => {
      if (generateRandomBoolean())
        markRecorderFunctionalitie(recorderId, funcId, recorders);
    });
  });

  return recorders;
};
