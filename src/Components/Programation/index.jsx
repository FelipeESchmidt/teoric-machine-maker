import React from "react";
import { useDispatch } from "react-redux";

import { addLine } from "../../Redux/Programation/Programation.actions";

import { Container } from "../../Styles/CommomStyles";
import Button from "../Button";

import Lines from "./Lines";
import MainButton from "./MainButton";

import * as S from "./index.styles";

function Programation() {
  const dispatch = useDispatch();

  /* Adiociona linha para programação */
  const handleAddLine = () => dispatch(addLine());

  return (
    <S.Programation>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Programação</S.DefinitionTitle>
          <Button onClick={handleAddLine} type="info">
            Adicionar Linha
          </Button>
          <MainButton />
        </S.TopWrapper>
        <Lines />
      </Container>
    </S.Programation>
  );
}

export default Programation;
