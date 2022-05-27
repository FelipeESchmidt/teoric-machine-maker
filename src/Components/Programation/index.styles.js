import styled from "styled-components";

export const Programation = styled.div`
  min-height: calc(100vh - 208px);
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
`;

export const DefinitionTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;
