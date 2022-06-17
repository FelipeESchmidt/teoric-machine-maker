import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addRecorder, randomMachine } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";
import { validateFunctionalities } from "../../Redux/Program/Program.validations";
import { generateFunctionalities } from "../../Redux/Program/Program.actions";
import { programSelector } from "../../Redux/Program/Program.selectors";

import { newMessage } from "../../Redux/Alert/Alert.actions";

import { routes } from "../../Screens/App/routes";
import { Container } from "../../Styles/CommomStyles";

import Button from "../Button";

import DefinitionTable from "./DefinitionTable";
import DefinitionText from "./DefinitionText";

import { recorderLimits, whatTheFGLMachineIsAbleToDo } from "./index.constants";
import * as S from "./index.styles";
import { useEffect } from "react";

function Definition() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recorders } = useSelector(appSelector);
  const { definition } = useSelector(programSelector);

  const [isValid, setIsValid] = useState(false);
  const [ableToGoNext, setAbleToGoNext] = useState(!!definition);

  const onSelectFunctionality = () => setAbleToGoNext(false);

  const handleGoNext = () => navigate(routes.programation);

  /* Adiciona novo registrador e manda funcionalidades possíveis para ele */
  const handleAddRecorder = () => {
    dispatch(addRecorder(whatTheFGLMachineIsAbleToDo));
  };

  const dispatchMessage = (message = "Sucesso!", type = "success") =>
    dispatch(newMessage({ type, message }));

  /* Valida erros na máquina */
  const handleValidateFunctionalities = () => {
    const error = validateFunctionalities(recorders);
    setIsValid(!error);
    if (!error) {
      dispatchMessage("Máquina validada!");
    } else {
      dispatchMessage(`Máquina possui problemas! -> ${error} <-`, "error");
    }
  };

  /* Gera definição da máquina */
  const handleGenerateFunctionalities = () => {
    dispatch(generateFunctionalities(recorders));
    dispatchMessage("Máquina gerada com sucesso!");
    setAbleToGoNext(true);
  };

  const handleGenerateRandom = () => {
    dispatch(randomMachine());
    dispatchMessage();
  };

  const renderSecondaryButton = () => {
    if (ableToGoNext)
      return (
        <Button onClick={handleGoNext} type="warn">
          Próximo Passo
        </Button>
      );
    if (recorders.length && !isValid)
      return (
        <Button
          onClick={handleValidateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          type="info"
        >
          Validar Máquina
        </Button>
      );
    if (recorders.length && isValid)
      return (
        <Button
          onClick={handleGenerateFunctionalities}
          disabled={recorders.length < recorderLimits.min}
          type="primary"
        >
          Gerar Máquina
        </Button>
      );
    return (
      <Button onClick={handleGenerateRandom} type="error">
        Máquina Aleatória
      </Button>
    );
  };

  useEffect(() => {
    setIsValid(false);
  }, [recorders]);

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
          {renderSecondaryButton()}
        </S.TopWrapper>
        <S.DefinitionWrapper>
          <DefinitionTable onSelectFunctionality={onSelectFunctionality} />
        </S.DefinitionWrapper>
        {ableToGoNext && (
          <S.DefinitionWrapper>
            <DefinitionText />
          </S.DefinitionWrapper>
        )}
      </Container>
    </S.Definition>
  );
}

export default Definition;
