import styled from "styled-components";

export const breakpoint = 768;

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2%;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 10px;
  background-color: transparent;
  border: 0;
  box-shadow: 0 0 8px 4px ${({ theme }) => theme.darkGray};
  line-height: 20px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.white};
  resize: none;
  outline: none;
  cursor: inherit;

  ::-webkit-scrollbar {
    width: 15px;
    height: 100%;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${({ theme }) => theme.white};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.black};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.black}DD;
  }

  ::-webkit-resizer {
    display: none;
  }
`;
