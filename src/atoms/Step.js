import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const MainContainer = styled.div`
  width: 100%;
`;

export default function Main(props) {
  return (
    <MainContainer {...props} onClick={props.onClick}>
      <Stepper activeStep={props.selected} alternativeLabel>
        {props.steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </MainContainer>
  );
}

Main.propTypes = {
  selected: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

Main.defaultProps = {
  selected: 1,
};
