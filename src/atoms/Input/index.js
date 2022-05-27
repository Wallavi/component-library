import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { colors } from "../../colorPalette";

const CustomInput = styled(TextField)`
  width: 100%;
  margin: 8px 0;
  label.Mui-focused {
    color: ${(props) =>
      props.error ? props.colors.primaryRed : props.colors.primaryBlue};
  }
  label {
    color: ${(props) =>
      props.error ? props.colors.primaryRed : props.colors.secondaryMiddleBlue};
  }
  input {
    color: ${(props) =>
      props.error ? props.colors.primaryRed : props.colors.primaryDarkBlue};
  }

  .Mui-error {
    color: ${(props) => `${props.colors.primaryRed} !important`};
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${(props) => {
        if (props.error) {
          return `${props.colors.primaryRed} !important`;
        } else if (props.focused) {
          return `${props.colors.primaryBlue} !important`;
        } else {
          return `${props.colors.secondaryMiddleBlue} !important`;
        }
      }};
    }
  }
`;

export default function Input(props) {
  const [isFocused, setFocusedState] = useState(false);
  const handleFocus = () => {
    setFocusedState(!isFocused);
  };

  return (
    <CustomInput
      colors={colors}
      name={props.name}
      label={props.label}
      onKeyUp={props.handleKeyUp}
      onChange={props.handleChange}
      focused={isFocused}
      onFocus={(e) => {
        if (props.onFocus) {
          props.onFocus(e);
        }
        handleFocus();
      }}
      onBlur={(e) => {
        if (props.onBlur) {
          props.onBlur(e);
        }
        handleFocus();
      }}
      value={props.value}
      required={props.required}
      error={props.error}
      helperText={props.helperText}
    ></CustomInput>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  handleChange: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func,
};
