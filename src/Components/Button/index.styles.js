import styled from "styled-components";

const getColorByType = (type, theme) => {
  if (theme[type])
    return {
      main: theme[type],
      dark: theme[type + "Darker"],
    };
  return {
    main: theme.default,
    dark: theme.defaultDarker,
  };
};

export const StyledButton = styled.button`
  position: relative;
  padding: 10px 30px;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  font-weight: 500;
  background: ${({ theme }) => theme.white};
  border: none;
  color: ${({ theme }) => theme.black};
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.5s;
  cursor: pointer;
  :hover {
    letter-spacing: 1.5px;
    background: ${({ type, theme }) => getColorByType(type, theme).main};
    box-shadow: 0 0 15px
      ${({ type, theme }) => getColorByType(type, theme).main};
  }
`;
