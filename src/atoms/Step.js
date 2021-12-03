import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

import MUIStepper from "@mui/material/Stepper";
import MUIStep from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const Stepper = styled(MUIStepper)`
  margin: 20px 0px;
  width: 100%;

  .MuiStepLabel-alternativeLabel {
    color: #99a7bf;

    .Mui-completed {
      color: #5590ff;
    }

    .Mui-active {
      color: #5590ff;
    }
  }

  .MuiStepIcon-root {
    color: #99a7bf;
  }
`;

const Step = styled(MUIStep)`
  cursor: pointer;
`;

export default function Main(props) {
  return (
    <Stepper activeStep={props.selected} alternativeLabel>
      {props.steps.map((label, index) => (
        <Step key={label}>
          <StepLabel onClick={() => props.handleClick(index)}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}

Main.propTypes = {
  selected: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Main.defaultProps = {
  selected: 1,
};
