import React from 'react';
import { Container } from '../../Styles/CommomStyles';
import { links, name } from './index.constants';
import * as S from './index.styles';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <S.StyledFooter>
      <Container>
        <S.StyledWrapper>
          <S.Text>{name}</S.Text>
          <S.Text>{currentYear}</S.Text>
        </S.StyledWrapper>
        <S.StyledWrapper>
          <S.Link href={links.github} target="blank">
            <S.GithubIcon />
          </S.Link>
          <S.Link href={links.repository} target="blank">
            <S.RepositoryIcon />
          </S.Link>
          <S.Link href={links.linkedin} target="blank">
            <S.LinkedinIcon />
          </S.Link>
        </S.StyledWrapper>
      </Container>
    </S.StyledFooter>
  );
}

export default Footer;
