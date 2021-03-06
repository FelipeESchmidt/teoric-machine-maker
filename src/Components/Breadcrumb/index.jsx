import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../Screens/App/routes";
import { Container } from "../../Styles/CommomStyles";

import * as S from "./index.styles";

function Breadcrumb({ links = [] }) {
  return (
    <Container>
      <S.Breadcrumb>
        <Link to={routes.root}>Home</Link>
        {links.map((link, index) => (
          <Link key={index} to={link.url}>
            {link.title}
          </Link>
        ))}
      </S.Breadcrumb>
    </Container>
  );
}

export const buildBreadcrumbLink = (title, url) => ({ title, url });

export default Breadcrumb;
