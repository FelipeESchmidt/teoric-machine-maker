import styled from "styled-components";

export const Definition = styled.div`
  min-height: calc(100vh - 208px);
  padding-bottom: 20px;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    > a {
      width: 75%;
    }
  }
  @media screen and (max-width: 400px) {
    flex-direction: column;
    > a {
      width: 90%;
    }
  }
`;

export const DefinitionTitle = styled.h2`
  color: ${({ theme }) => theme.white};
  padding: 20px 0;
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
`;

export const DefinitionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: 40px;
`;
