import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export default function Input(props) {
  return <TextField {...props}></TextField>;
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
