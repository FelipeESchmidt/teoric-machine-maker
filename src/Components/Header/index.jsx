import React from "react";
import { Container } from "../../Styles/CommomStyles";
import Switch from "../Switch";
import { headerText } from "./index.constants";
import * as S from "./index.styles";

function Header() {
  return (
    <S.StyledHeader>
      <Container>
        <S.StyledWrapper>
          <S.StyledTitle>{headerText}</S.StyledTitle>
          <Switch />
        </S.StyledWrapper>
      </Container>
    </S.StyledHeader>
  );
}

export default Header;
