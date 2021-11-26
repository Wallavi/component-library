import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)`
  width: 100%;
`;

export default function Input(props) {
  return <CustomInput {...props}></CustomInput>;
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
