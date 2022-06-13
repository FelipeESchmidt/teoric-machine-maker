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

  /* Gera os possíveis seletores
     - functions -> todas as funções da máquina gerada
     - comparators -> todos os registadores que possuem comparador de 0
     - lines -> todas as linhas possíveis menos a própria linha
  */
  const selectors = {
    functions: functions.map(mountSelector),
    comparators: comparators.map(mountSelector),
    lines: mountLines(),
  };

  /* Seleciona seletor */
  const handleSelect = (value, lineItem, itemIndex) => {
    dispatch(setLineSelection(value, lineItem, itemIndex, index));
  };

  /* Deseleciona seletor */
  const handleDeselect = (lineItem, itemIndex) => {
    dispatch(setLineSelection("", lineItem, itemIndex, index));
  };

  /* Renderiza texto e caso seja possível adiociona função para deseleção */
  const renderSingleText = (lineItem, hasSelect, itemIndex) => (
    <SLine.Text
      color={lineItem.color}
      hasSelect={hasSelect}
      onClick={() => (hasSelect ? handleDeselect(lineItem, itemIndex) : null)}
    >
      {lineItem.text}
    </SLine.Text>
  );

  /* Renderiza Selecionador de acordo com tipo de seletor (selectors) */
  const renderSelector = (lineItem, itemIndex) => (
    <SLine.StyledSelect
      onChange={({ value }) => handleSelect(value, lineItem, itemIndex)}
      options={selectors[lineItem.select]}
    />
  );

  return (
    <>
      <S.Item>
        <SLine.Text textToColored={programaLine.text}>
          {programaLine.text}
        </SLine.Text>
      </S.Item>
      {line.items.map((lineItem, index) => (
        <S.Item key={index}>
          {lineItem.text &&
            renderSingleText(lineItem, !!lineItem.select, index)}
          {lineItem.select && !lineItem.text && renderSelector(lineItem, index)}
        </S.Item>
      ))}
    </>
  );
}

export default LineType;
