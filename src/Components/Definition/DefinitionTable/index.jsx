import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCheckCircle } from "react-icons/ai";

import { useResponsive } from "../../../Hooks/useResponsive";
import { markFunctionalitie } from "../../../Redux/App/App.actions";
import { appSelector } from "../../../Redux/App/App.selectors";

import { whatTheFGLMachineIsAbleToDo } from "../index.constants";

import * as S from "./index.styles";

function DefinitionTable() {
  const dispatch = useDispatch();
  const isMobile = useResponsive();

  const { recorders } = useSelector(appSelector);

  const handleSelectFunctionalitie = (recorder, functionalitie) => {
    dispatch(markFunctionalitie(recorder, functionalitie));
  };

  return (
    <S.StyledTable>
      <S.StyledTableHead>
        <S.StyledTableRow>
          <S.StyledTableHeadItem />
          {whatTheFGLMachineIsAbleToDo.map((func) => (
            <S.StyledTableHeadItem key={func.name}>
              {isMobile ? func.nameResponsive : func.name}
            </S.StyledTableHeadItem>
          ))}
        </S.StyledTableRow>
      </S.StyledTableHead>
      <S.StyledTableBody>
        {recorders.map((recorder, recorderIndex) => (
          <S.StyledTableRow key={recorder.name}>
            <S.StyledTableBodyItem>{recorder.name}</S.StyledTableBodyItem>
            {recorder.functionalities.map((func, funcIndex) => (
              <S.StyledTableBodyItem
                key={func.name}
                onClick={() =>
                  handleSelectFunctionalitie(recorderIndex, funcIndex)
                }
              >
                {func.marked && <AiFillCheckCircle />}
              </S.StyledTableBodyItem>
            ))}
          </S.StyledTableRow>
        ))}
      </S.StyledTableBody>
    </S.StyledTable>
  );
}

export default DefinitionTable;
