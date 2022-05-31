export const generate = (recorders, lines) => {
  let fullCode = "";

  recorders.forEach(
    (recorder) => (fullCode += `let recorder_${recorder.name} = 0;\n`)
  );

  return fullCode;
};
