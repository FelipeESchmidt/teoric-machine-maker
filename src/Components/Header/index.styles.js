import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.darkGray};
  box-shadow: 0px 2px 5px 2px ${({ theme }) => theme.darkGray};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  font-size: 1.5em;
  @media screen and (max-width: 768px) {
    font-size: 1em;
    line-height: 35px;
  }
`;
