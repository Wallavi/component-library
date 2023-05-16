import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomInput = styled(TextField)<TextFieldProps>`
  width: 100%;
  margin: 8px 0;
  label {
    color: ${({ theme }) => theme.palette.middleblue.main};
  }
  input {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  .Mui-error {
    &.mui-focused: {
      color: ${({ theme }) => theme.palette.error.main};
    }
    input {
      color: ${({ theme }) => theme.palette.error.main};
    }
  }
  .MuiOutlinedInput-root {
    &:hover:not(.Mui-error):not(.Mui-focused) {
      fieldset {
        border-color: ${({ theme }) => theme.palette.middleblue.main};
      }
    }
    fieldset {
      border-color: ${({ theme }) => theme.palette.middleblue.main};
    }
  }
`;

export default function Input({ ...props }: TextFieldProps) {
  return <CustomInput {...props}></CustomInput>;
}
