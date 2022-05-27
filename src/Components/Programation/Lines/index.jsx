import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setLineType } from "../../../Redux/Programation/Programation.actions";
import { programationSelector } from "../../../Redux/Programation/Programation.selectors";

import { lineTypes } from "../index.contants";

import * as S from "./index.styles";

function Lines() {
  const dispatch = useDispatch();

  const lineOptions = Object.keys(lineTypes).map((option) => ({
    value: option,
    label: option.toUpperCase(),
  }));

  const { lines } = useSelector(programationSelector);

  console.log(lines);

  const handleSelectLineType = (value, lineIndex) => {
    console.log(value, lineIndex);
    dispatch(setLineType(value, lineIndex));
  };

  return (
    <S.StyledLines>
      {lines.map((line, index) => (
        <S.StyledLine key={index.toString()}>
          <S.LineText>{index}</S.LineText>
          <S.StyledSelect
            onChange={({ value }) => handleSelectLineType(value, index)}
            options={lineOptions}
          />
        </S.StyledLine>
      ))}
    </S.StyledLines>
  );
}

export default Lines;
