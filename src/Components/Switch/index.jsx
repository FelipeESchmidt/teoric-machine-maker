import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeThemeMode } from "../../Redux/App/App.actions";
import { appSelector } from "../../Redux/App/App.selectors";

import * as S from "./index.styles";

function Switch() {
  const dispatch = useDispatch();
  const { mode } = useSelector(appSelector);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(changeThemeMode());
  };

  const isMarked = () => mode === "dark";

  return (
    <S.StyledSwitch onClick={handleChange} {...{ marked: isMarked() }}>
      <S.StyledMarker id="switch-mode" {...{ marked: isMarked() }} />
    </S.StyledSwitch>
  );
}

export default Switch;
