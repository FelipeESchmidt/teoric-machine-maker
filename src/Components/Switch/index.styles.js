import styled, { css } from "styled-components";

export const StyledSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 14px;
  background-color: ${({ marked, theme }) =>
    marked ? theme.markedBack : theme.unMarkedBack};
  ${({ marked }) =>
    !marked &&
    css`
      box-shadow: 0 0 3px 1px ${({ theme }) => theme.white};
    `}
  border-radius: 20px;
  cursor: pointer;
`;

export const StyledMarker = styled.span`
  position: absolute;
  top: -3px;
  ${({ marked }) => (marked ? "right: -3px" : "left: -3px")};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ marked, theme }) =>
    marked ? theme.marked : theme.unMarked};
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0px 5px rgba(120, 120, 120, 0.15);
  }
`;
