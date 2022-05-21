import * as constants from "./App.constants";

export const changeThemeMode = () => ({
  type: constants.CHANGE_MODE,
});

export const addRecorder = (functionalities) => ({
  type: constants.ADD_RECORDER,
  functionalities,
});

export const markFunctionalitie = (recorder, functionalitie) => ({
  type: constants.MARK_RECORDER,
  functionalitie,
  recorder,
});
