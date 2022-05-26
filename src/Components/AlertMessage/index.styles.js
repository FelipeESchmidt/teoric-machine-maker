import styled from "styled-components";

import { alertColors } from "./index.constants";

const getColors = (type) => {
  return alertColors[type] || alertColors.default;
};

export const StyledSnackbar = styled.div`
  opacity: ${(props) => (props.open ? 1 : 0)};
  position: fixed;
  top: ${(props) => (props.open ? "0" : "-50px")};
  left: 0;
  right: 0;
  text-align: center;
  white-space: pre-line;
  transition-duration: 1s;
  z-index: 5;
`;

export const StyledAlert = styled.div`
  padding: 20px;
  color: ${(props) => getColors(props.type).color};
  text-shadow: 0 0 2px ${(props) => getColors(props.type).color};
  background: ${(props) => getColors(props.type).background};
  border-bottom: 1px solid ${(props) => getColors(props.type).color};
`;
