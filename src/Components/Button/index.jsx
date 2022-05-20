import React from "react";

import { StyledButton } from "./index.styles";

const Button = ({ onClick, children, type = "primary" }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
