import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { newMessage } from "../../../Redux/Alert/Alert.actions";

import { validateLines } from "../../../Redux/Programation/Programation.actions";
import { programationSelector } from "../../../Redux/Programation/Programation.selectors";
import { routes } from "../../../Screens/App/routes";

import Button from "../../Button";

function MainButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isValid, error } = useSelector(programationSelector);

  const validateProgramation = () => {
    dispatch(validateLines());
  };

  const handleGoNext = () => navigate(routes.codeRunner);

  useEffect(() => {
    if (error) dispatch(newMessage({ type: "error", message: error }));
  }, [error, dispatch]);

  const renderNextStepButton = () => (
    <Button onClick={handleGoNext} type="warn">
      Próximo Passo
    </Button>
  );

  const renderValidateButton = () => (
    <Button onClick={validateProgramation}>Validar e Gerar</Button>
  );

  return isValid ? renderNextStepButton() : renderValidateButton();
}

export default MainButton;
