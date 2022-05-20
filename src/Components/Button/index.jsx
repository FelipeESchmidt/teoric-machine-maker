import React from "react";

import { StyledButton } from "./index.styles";

const Button = ({ onClick, children, type = "primary" }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      <span>{children}</span>
      <i />
    </StyledButton>
  );
};

export default Button;
