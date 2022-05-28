export const basicColors = {
  markedBack: "#64b5f6",
  unMarkedBack: "#e0e0e0",
  marked: "#1976d2",
  unMarked: "#757575",
  primary: "#4caf50",
  primaryDarker: "#1b5e20",
  success: "#4caf50",
  successDarker: "#1b5e20",
  info: "#42a5f5",
  infoDarker: "#1e88e5",
  warn: "#ffc107",
  warnDarker: "#ff8f00",
  error: "#e53935",
  errorDarker: "#c62828",
  default: "#795548",
  defaultDarker: "#4e342e",
  disable: "#989898",
  disableDarker: "#494949",
};

export const theme = {
  dark: {
    ...basicColors,
    black: "#0f1113",
    realBlack: "#000000",
    white: "#ffffff",
    darkGray: "#1e2227",
    lightGray: "#23272e",
    green: "#2e7d32",
    blue: "#0277bd",
    yellow: "#f9a825",
    red: "#c62828",
    alfa: 0.3,
  },
  light: {
    ...basicColors,
    black: "#cccccc",
    realBlack: "#ffffff",
    white: "#000000",
    darkGray: "#e3e3e3",
    lightGray: "#efefef",
    green: "#a5d6a7",
    blue: "#81d4fa",
    yellow: "#fff59d",
    red: "#ef9a9a",
    alfa: 0.1,
  },
};
