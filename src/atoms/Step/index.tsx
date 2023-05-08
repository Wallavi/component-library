import React from 'react';
import * as PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { colors } from "../../colorPalette";

import MUIStepper from "@mui/material/Stepper";
import MUIStep from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

interface StepProps {
  selected: number;
  steps?: string[];
  handleClick?: (number: number) => void;
}

const Stepper = styled(MUIStepper)<{
  colors: { secondaryMiddleBlue: string; primaryBlue: string };
}>`
  margin: 20px 0px;
  width: 100%;

  .MuiStepLabel-alternativeLabel {
    color: ${(props) => props.colors.secondaryMiddleBlue};

    .Mui-completed {
      color: ${(props) => props.colors.primaryBlue};
    }

    .Mui-active {
      color: ${(props) => props.colors.primaryBlue};
    }
  }

  .MuiStepIcon-root {
    color: ${(props) => props.colors.secondaryMiddleBlue};
  }
`;

const MUIStepStyled = styled(MUIStep)`
  cursor: pointer;
`;

export default function Step({ selected, steps, handleClick }: StepProps) {
  return (
    <Stepper activeStep={selected} alternativeLabel colors={colors}>
      {steps?.map((label, index) => (
        <MUIStepStyled key={label}>
          <StepLabel onClick={() => handleClick && handleClick(index)}>{label}</StepLabel>
        </MUIStepStyled>
      ))}
    </Stepper>
  );
}

Step.propTypes = {
  selected: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// Step.defaultProps = {
//   selected: 1,
// };
