import React from "react";
import { Container, StyledTextArea } from "../../Styles/CommomStyles";

import Button from "../Button";

import * as S from "./index.styles";

function CodeRunner() {
  return (
    <S.CodeRunner>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Rodar Código</S.DefinitionTitle>
          <Button type="info">Gerar Código</Button>
          <Button type="error" disabled>
            Rodar Código
          </Button>
        </S.TopWrapper>
        <StyledTextArea readOnly />
      </Container>
    </S.CodeRunner>
  );
}

export default CodeRunner;
