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

export const StyledButton = styled.a`
  position: relative;
  padding: 10px 30px;
  font-size: 0.8em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
  font-weight: 500;
  background: ${({ theme }) => theme.white};
  border: none;
  color: ${({ theme }) => theme.white};
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  user-select: none;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (!!disabled ? "not-allowed" : "pointer")};
  :before {
    content: "";
    position: absolute;
    inset: 2px;
    background: ${({ theme }) => theme.lightGray};
  }
  > span {
    position: relative;
    z-index: 1;
  }
  i {
    position: absolute;
    inset: 0;
    display: block;
    :before {
      content: "";
      position: absolute;
      top: 0;
      left: 80%;
      width: 5%;
      height: 4px;
      background-color: ${({ theme }) => theme.lightGray};
      transform: translateX(-50%) skewX(325deg);
      transition: 0.5s;
    }
    :after {
      content: "";
      position: absolute;
      left: 20%;
      bottom: 0;
      width: 5%;
      height: 4px;
      background-color: ${({ theme }) => theme.lightGray};
      transform: translateX(-50%) skewX(325deg);
      transition: 0.5s;
    }
  }
  :hover {
    letter-spacing: 1.5px;
    background: ${({ type, theme }) => getColorByType(type, theme).main};
    color: ${({ type, theme }) => getColorByType(type, theme).main};
    box-shadow: 0 0 15px
      ${({ type, theme }) => getColorByType(type, theme).main};
    i {
      :before {
        left: 20%;
        width: 8%;
      }
      :after {
        left: 80%;
        width: 8%;
      }
    }
  }
`;
