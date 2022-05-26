import styled from "styled-components";
import { css } from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  margin: 10px 0;
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #4444;
`;

export const StyledTableHead = styled.thead`
  border-bottom: 3px solid ${({ theme }) => theme.white};
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableRow = styled.tr`
  border-bottom: 1px solid ${({ theme }) => theme.white};
  th:first-child {
    border-left: none;
  }
  th:last-child {
    border-right: none;
  }
  :last-child {
    border: none;
  }
`;

const basicItem = css`
  width: calc(100% / 8);
  padding: 5px 0;
  font-size: 15px;
  color: ${({ theme }) => theme.white};
  border-left: 2px solid ${({ theme }) => theme.white};
  border-right: 2px solid ${({ theme }) => theme.white};
`;

export const StyledTableHeadItem = styled.th`
  ${basicItem};
`;

export const StyledTableBodyItem = styled.th`
  :first-child {
    cursor: default;
    :hover {
      transition: 0.5s;
      background: none;
    }
  }
  ${basicItem};
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background-color: #aaaa;
  }
`;
