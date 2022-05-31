import React from "react";
import { useSelector } from "react-redux";

import { programSelector } from "../../../Redux/Program/Program.selectors";
import { StyledTextArea } from "../../../Styles/CommomStyles";

function DefinitionText() {
  const { definition } = useSelector(programSelector);

  return <StyledTextArea readOnly value={definition} />;
}

export default DefinitionText;
