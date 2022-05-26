import React from "react";
import Breadcrumb, { buildBreadcrumbLink } from "../../Components/Breadcrumb";
import Programation from "../../Components/Programation";

import { routes } from "../App/routes";

function ProgramationScreen() {
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
