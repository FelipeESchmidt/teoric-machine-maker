import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { newMessage } from "../../../Redux/Alert/Alert.actions";

import { validateLines } from "../../../Redux/Programation/Programation.actions";
import { programationSelector } from "../../../Redux/Programation/Programation.selectors";

import Button from "../../Button";

function MainButton() {
  const dispatch = useDispatch();

  const { isValid, error } = useSelector(programationSelector);

  const validateProgramation = () => {
    dispatch(validateLines());
  };

  useEffect(() => {
    if (error) dispatch(newMessage({ type: "error", message: error }));
  }, [error, dispatch]);

  const renderNextStepButton = () => (
    <Button onClick={() => {}} type="warn">
      Próximo Passo
    </Button>
  );

  const renderValidateButton = () => (
    <Button onClick={validateProgramation}>Validar e Gerar</Button>
  );

  return isValid ? renderNextStepButton() : renderValidateButton();
}

export default MainButton;
