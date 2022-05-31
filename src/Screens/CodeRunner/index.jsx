import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { newMessage } from "../../Redux/Alert/Alert.actions";
import { programSelector } from "../../Redux/Program/Program.selectors";
import { programationSelector } from "../../Redux/Programation/Programation.selectors";

import Breadcrumb, { buildBreadcrumbLink } from "../../Components/Breadcrumb";
import CodeRunner from "../../Components/CodeRunner";

import { routes } from "../App/routes";

function CodeRunnerScreen() {
  const dispatch = useDispatch();

  const { definition } = useSelector(programSelector);
  const { lines } = useSelector(programationSelector);

  if (!definition || lines.length < 2) {
    dispatch(
      newMessage({
        type: "error",
        message: "Uma máquina programada é necessária para rodar",
      })
    );
    return <Navigate to={routes.root} replace />;
  }

  return (
    <>
      <Breadcrumb
        links={[
          buildBreadcrumbLink("Programation", routes.programation),
          buildBreadcrumbLink("CodeRunner", routes.codeRunner),
        ]}
      />
      <CodeRunner />
    </>
  );
}

export default CodeRunnerScreen;
