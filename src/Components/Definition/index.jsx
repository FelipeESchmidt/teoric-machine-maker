import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecorder } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";
import { Container } from "../../Styles/CommomStyles";

import Button from "../Button";
import DefinitionTable from "./DefinitionTable";

import { whatTheFGLMachineIsAbleToDo } from "./index.constants";
import * as S from "./index.styles";

function Definition() {
  const dispatch = useDispatch();

  const { recorders } = useSelector(appSelector);

  const handleAddRecorder = () => {
    dispatch(addRecorder(whatTheFGLMachineIsAbleToDo));
  };

  return (
    <S.Definition>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Definição da Máquina</S.DefinitionTitle>
          <Button
            onClick={handleAddRecorder}
            disabled={recorders.length >= 10}
            type="info"
          >
            Adicionar Registrador
          </Button>
        </S.TopWrapper>
        <S.DefinitionWrapper>
          <DefinitionTable />
        </S.DefinitionWrapper>
      </Container>
    </S.Definition>
  );
}

export default Definition;
