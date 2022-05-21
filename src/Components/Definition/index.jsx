import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addRecorder } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";
import { generateFunctionalities } from "../../Redux/Program/Program.actions";

import { Container } from "../../Styles/CommomStyles";

import Button from "../Button";
import DefinitionTable from "./DefinitionTable";

import { recorderLimits, whatTheFGLMachineIsAbleToDo } from "./index.constants";
import * as S from "./index.styles";

function Definition() {
  const dispatch = useDispatch();

  const { recorders } = useSelector(appSelector);

  const handleAddRecorder = () => {
    dispatch(addRecorder(whatTheFGLMachineIsAbleToDo));
  };

  const handleGenerateFunctionalities = () => {
    dispatch(generateFunctionalities(recorders));
  };

  return (
    <S.Definition>
      <Container>
        <S.TopWrapper>
          <S.DefinitionTitle>Definição da Máquina</S.DefinitionTitle>
          <Button
            onClick={handleAddRecorder}
            disabled={recorders.length >= recorderLimits.max}
            type="info"
          >
            Adicionar Registrador
          </Button>
        </S.TopWrapper>
        <S.DefinitionWrapper>
          <DefinitionTable />
        </S.DefinitionWrapper>
        <Button
          onClick={handleGenerateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          type="primary"
        >
          Gerar Máquina
        </Button>
      </Container>
    </S.Definition>
  );
}

export default Definition;
