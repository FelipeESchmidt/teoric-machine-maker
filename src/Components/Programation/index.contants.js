export const lineTypes = {
  if: {
    text: "se",
    items: [
      { select: "comparators", text: "" },
      { text: "então vá_para" },
      { select: "lines", text: "" },
      { text: "senão vá_para" },
      { select: "lines", text: "" },
    ],
  },
  function: {
    text: "faça",
    items: [
      { select: "functions", text: "" },
      { text: "vá_para" },
      { select: "lines", text: "" },
    ],
  },
};
