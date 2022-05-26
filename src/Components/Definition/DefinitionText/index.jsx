import React from "react";
import { useSelector } from "react-redux";

import { programSelector } from "../../../Redux/Program/Program.selectors";

import * as S from "./index.styles";

function DefinitionText() {
  const { definition } = useSelector(programSelector);

  return <S.StyledTextArea readOnly>{definition}</S.StyledTextArea>;
}

export default DefinitionText;
