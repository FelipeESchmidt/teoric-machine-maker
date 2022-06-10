import styled from "styled-components";

export const InitialValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.white};
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 10px;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  flex-grow: 1;
  width: ${({ inputsQuantity }) => `calc(100% / ${inputsQuantity})`};
  min-width: 160px;
  margin: 5px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.white};
  font-size: 14px;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: ${({ theme }) => theme.white};
  box-shadow: 0 0 8px 4px ${({ theme }) => theme.darkGray};
  background-color: transparent;
  border-radius: 8px;
  border: none;
  text-align: center;
  outline: 0;
  font-size: 20px;
  box-sizing: border-box;
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
