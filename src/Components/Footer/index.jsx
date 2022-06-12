import React from "react";
import { Container } from "../../Styles/CommomStyles";
import { owners } from "./index.constants";
import * as S from "./index.styles";

function Footer() {
  return (
    <S.StyledFooter>
      <Container>
        <S.StyledOwners>
          {owners.map((owner, index) => (
            <S.StyledOwner>
              <S.StyledWrapper>
                <S.Text>{owner.name}</S.Text>
              </S.StyledWrapper>
              <S.StyledWrapper>
                <S.Link href={owner.links.github} target="blank">
                  <S.GithubIcon />
                </S.Link>
                <S.Link href={owner.links.linkedin} target="blank">
                  <S.LinkedinIcon />
                </S.Link>
              </S.StyledWrapper>
            </S.StyledOwner>
          ))}
        </S.StyledOwners>
      </Container>
    </S.StyledFooter>
  );
}

export default Footer;
