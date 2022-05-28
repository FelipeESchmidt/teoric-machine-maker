import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { programSelector } from "../../../../Redux/Program/Program.selectors";
import { setLineSelection } from "../../../../Redux/Programation/Programation.actions";
import { programationSelector } from "../../../../Redux/Programation/Programation.selectors";

import { lineTypes } from "../../index.contants";

import * as SLine from "../index.styles";
import * as S from "./index.styles";

function LineType({ index, line }) {
  const dispatch = useDispatch();

  const lineType = line.type;
  const programaLine = lineTypes[lineType];

  const { functions, comparators } = useSelector(programSelector);
  const { lines } = useSelector(programationSelector);

  const mountSelector = (f) => ({ value: f.definition, label: f.definition });

  const mountLines = () => {
    return [
      { value: "-1", label: "FIM" },
      ...lines
        .map((_, i) => ({ value: `${i}`, label: i }))
        .filter((l) => l.label !== index),
    ];
  };

  const selectors = {
    functions: functions.map(mountSelector),
    comparators: comparators.map(mountSelector),
    lines: mountLines(),
  };

  const handleSelect = (value, itemIndex) => {
    dispatch(setLineSelection(value, itemIndex, index));
  };

  const renderSingleText = (text) => <SLine.Text>{text}</SLine.Text>;

  const renderSelector = (selector, itemIndex) => (
    <SLine.StyledSelect
      onChange={({ value }) => handleSelect(value, itemIndex)}
      options={selectors[selector]}
    />
  );

  return (
    <>
      <S.Item>
        <SLine.Text>{programaLine.text}</SLine.Text>
      </S.Item>
      {line.items.map(({ text, select }, index) => (
        <S.Item key={index}>
          {text && renderSingleText(text)}
          {select && renderSelector(select, index)}
        </S.Item>
      ))}
    </>
  );
}

export default LineType;
