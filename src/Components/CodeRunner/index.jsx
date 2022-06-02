import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { generateCode } from "../../Redux/Code/Code.actions";
import { appSelector } from "../../Redux/App/App.selectors";
import { codeSelector } from "../../Redux/Code/Code.selectors";
import { programationSelector } from "../../Redux/Programation/Programation.selectors";

import { Container, StyledTextArea } from "../../Styles/CommomStyles";

import Button from "../Button";

import * as S from "./index.styles";

function CodeRunner() {
  const dispatch = useDispatch();

  const { code } = useSelector(codeSelector);
  const { recorders } = useSelector(appSelector);
  const { lines } = useSelector(programationSelector);

  const handleGenerateCode = () => dispatch(generateCode(recorders, lines));

  const clearScripts = () => {
    document
      .querySelectorAll("script[data-op=code]")
      .forEach((el) => el.remove());
  };

  const runCode = () => {
    clearScripts();
    const script = document.createElement("script");
    script.setAttribute("data-op", "code");

    const scriptText = document.createTextNode(code);

    script.appendChild(scriptText);
    document.body.appendChild(script);
  };

  return (
    <S.CodeRunner>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Rodar Código</S.DefinitionTitle>
          {!!code ? (
            <Button type="error" onClick={runCode}>
              Rodar Código
            </Button>
          ) : (
            <Button type="info" onClick={handleGenerateCode}>
              Gerar Código
            </Button>
          )}
        </S.TopWrapper>
        <StyledTextArea id="traceTable" readOnly />
      </Container>
    </S.CodeRunner>
  );
}

export default CodeRunner;
