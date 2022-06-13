import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeLine,
  setLineType,
} from "../../../Redux/Programation/Programation.actions";
import { programationSelector } from "../../../Redux/Programation/Programation.selectors";

import { lineTypes } from "../index.contants";

import LineType from "./LineType";

import * as S from "./index.styles";

function Lines() {
  const dispatch = useDispatch();

  const lineOptions = Object.keys(lineTypes).map((option) => ({
    value: option,
    label: option.toUpperCase(),
  }));

  const { lines } = useSelector(programationSelector);

  const handleSelectLineType = (value, lineIndex) => {
    dispatch(setLineType(value, [...lineTypes[value].items], lineIndex));
  };

  const handleRemoveLine = (lineIndex) => {
    dispatch(removeLine(lineIndex));
  };

  const renderLineType = (line, index) => {
    return <LineType line={line} index={index} />;
  };

  return (
    <S.StyledLines>
      {lines.map((line, index) => (
        <S.StyledLine key={index.toString()}>
          <S.LineText onClick={() => handleRemoveLine(index)}>
            {index}
          </S.LineText>
          {!line.type ? (
            <S.StyledSelect
              value={line.type}
              onChange={({ value }) => handleSelectLineType(value, index)}
              options={lineOptions}
            />
          ) : (
            renderLineType(line, index)
          )}
        </S.StyledLine>
      ))}
    </S.StyledLines>
  );
}

export default Lines;
