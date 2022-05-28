import styled from "styled-components";
import Select from "react-select";

export const StyledLines = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  min-height: 400px;
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0 0 8px 4px ${({ theme }) => theme.darkGray};
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const StyledLine = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 3px;
  padding: 2px;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.white};
`;

export const LineText = styled(Text)`
  position: relative;
  padding-left: 10px;
  min-width: 30px;
  text-align: center;
  :hover {
    color: ${({ theme }) => theme.errorDarker};
    cursor: pointer;
    ::before {
      content: "x";
      position: absolute;
      color: ${({ theme }) => theme.errorDarker};
      top: 0;
      left: -10px;
      bottom: 0;
    }
    ::after {
      background-color: ${({ theme }) => theme.errorDarker};
    }
  }
  ::after {
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.white};
    width: 1px;
    top: 0;
    right: 0;
    bottom: 0;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-bottom: 10px;
    ::after {
      width: auto;
      height: 1px;
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
    }
    ::before {
      content: "x";
      position: absolute;
      color: ${({ theme }) => theme.errorDarker};
      top: -15px;
      left: 0;
      right: 0;
      bottom: auto;
    }
  }
`;

export const StyledSelect = styled(Select)`
  width: 12%;
  min-width: 140px;
  height: 36px;
`;
