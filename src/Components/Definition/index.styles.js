import styled from "styled-components";

export const Definition = styled.div`
  min-height: calc(100vh - 170px);
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
`;

export const DefinitionTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  padding: 20px 0;
`;

export const DefinitionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 40px;
`;
