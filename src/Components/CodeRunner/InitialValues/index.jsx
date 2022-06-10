import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInitialValue } from "../../../Redux/Code/Code.actions";
import { codeSelector } from "../../../Redux/Code/Code.selectors";
import { programSelector } from "../../../Redux/Program/Program.selectors";

import * as S from "./index.styles";

function InitialValues() {
  const dispatch = useDispatch();

  const { inputs } = useSelector(programSelector);
  const { initialValues } = useSelector(codeSelector);

  const handleSetValue = (recorder, value) => {
    dispatch(setInitialValue(recorder, value));
  };

  return (
    <S.InitialValuesWrapper>
      <S.Title>Valores Iniciais</S.Title>
      <S.InputsWrapper>
        {inputs.map((input, index) => (
          <S.InputWrapper key={index.toString()} inputsQuantity={inputs.length}>
            <S.Label htmlFor={input.definition}>
              Registrador {input.recorder}
            </S.Label>
            <S.Input
              id={input.definition}
              type="number"
              min={0}
              max={100}
              value={initialValues[input.recorder] || 0}
              onChange={(e) => handleSetValue(input.recorder, e.target.value)}
            />
          </S.InputWrapper>
        ))}
      </S.InputsWrapper>
    </S.InitialValuesWrapper>
  );
}

export default InitialValues;
