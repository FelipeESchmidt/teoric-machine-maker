import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { newMessage } from "../../Redux/Alert/Alert.actions";
import { programSelector } from "../../Redux/Program/Program.selectors";

import Breadcrumb, { buildBreadcrumbLink } from "../../Components/Breadcrumb";
import Programation from "../../Components/Programation";

import { routes } from "../App/routes";

function ProgramationScreen() {
  const dispatch = useDispatch();

  const { definition } = useSelector(programSelector);

  if (!definition) {
    dispatch(
      newMessage({
        type: "error",
        message: "Uma máquina é necessária para programação",
      })
    );
    return <Navigate to={routes.root} replace />;
  }

  return (
    <>
      <Breadcrumb
        links={[buildBreadcrumbLink("Programation", routes.programation)]}
      />
      <Programation />
    </>
  );
}

export default ProgramationScreen;
