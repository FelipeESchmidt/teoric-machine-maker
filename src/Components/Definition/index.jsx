import React from "react";
import { Container } from "../../Styles/CommomStyles";

import Button from "../Button";

import * as S from "./index.styles";

function Definition() {
  return (
    <S.Definition>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Definição da Máquina</S.DefinitionTitle>
          <Button>Adicionar Registrador</Button>
        </S.TopWrapper>
        <S.DefinitionWrapper>teste</S.DefinitionWrapper>
      </Container>
    </S.Definition>
  );
}

export default Definition;
