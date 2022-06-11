export const lineTypes = {
  if: {
    text: "se",
    items: [
      { select: "comparators", text: "", color: "infoDarker" },
      { text: "então vá_para", color: "warnDarker" },
      { select: "lines", text: "", color: "success" },
      { text: "senão vá_para", color: "warnDarker" },
      { select: "lines", text: "", color: "success" },
    ],
  },
  function: {
    text: "faça",
    items: [
      { select: "functions", text: "", color: "infoDarker" },
      { text: "vá_para", color: "warnDarker" },
      { select: "lines", text: "", color: "success" },
    ],
  },
};
