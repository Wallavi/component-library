import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)`
  width: 100%;
  margin: 8px 0;
  label.Mui-focused {
    color: #5590ff;
  }
  label {
    color: #99a7bf;
  }
  input {
    color: #323946;
  }

  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${(props) =>
        props.focused ? "#5590ff !important" : "#99a7bf !important"};
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
      {...props}
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
    ></CustomInput>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func.isRequired,
};
