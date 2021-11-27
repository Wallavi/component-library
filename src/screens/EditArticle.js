import React, { useState } from "react";
import PropTypes from "prop-types";

import Edition from "../molecules/Edition";
import DataStep from "../molecules/edition-steps/Data";
import ImagesStep from "../molecules/edition-steps/Images";

export default function Navbar(props) {
  const [sectionSelected, setSelectedSection] = useState(0);
  const handleOnClickStep = (newStep) => {
    setSelectedSection(newStep);
  };

  return (
    <Edition
      title="Editar artículo"
      steps={["Información", "Imágenes"]}
      children={[
        <DataStep
          handleClick={handleOnClickStep}
          selected={sectionSelected}
        ></DataStep>,
        <ImagesStep></ImagesStep>,
      ]}
      selected={sectionSelected}
      handleClick={handleOnClickStep}
    ></Edition>
  );
}

Navbar.propTypes = {};

Navbar.defaultProps = {};
