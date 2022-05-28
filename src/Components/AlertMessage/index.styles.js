import styled from "styled-components";

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
  color: ${({ theme }) => theme.realBlack};
  text-shadow: 0 0 2px ${({ theme }) => theme.realBlack};
  background: ${({ theme, type }) => theme[type]};
  box-shadow: 0 0 2px 1px ${({ theme }) => theme.realBlack};
`;
