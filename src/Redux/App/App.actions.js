import * as constants from "./App.constants";

export const setSearch = (search) => ({
  type: constants.SET_SEARCH,
  search,
});

export const changeThemeMode = () => ({
  type: constants.CHANGE_MODE,
});
