import React from "react";

import { StyledButton } from "./index.styles";

const Button = ({ onClick, children, disabled = false, type = "primary" }) => {
  const buttonType = disabled ? "disable" : type;

  const handleClick = () => {
    !disabled && onClick();
  };

  return (
    <StyledButton onClick={handleClick} type={buttonType} disabled={disabled}>
      <span>{children}</span>
      <i />
    </StyledButton>
  );
};

export default Button;
