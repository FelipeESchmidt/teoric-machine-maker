import React, { useEffect, useState } from "react";
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

  const [showMessage, setShowMessage] = useState(false);

  const { isValid, error } = useSelector(programationSelector);

  const validateProgramation = () => {
    dispatch(validateLines());
    setShowMessage(true);
  };

  const handleGoNext = () => navigate(routes.codeRunner);

  useEffect(() => {
    if (showMessage) {
      if (error) {
        dispatch(newMessage({ type: "error", message: error }));
        setShowMessage(false);
      } else {
        dispatch(
          newMessage({ type: "success", message: "Validação concluida" })
        );
        setShowMessage(false);
      }
    }
  }, [showMessage, error, dispatch]);

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
