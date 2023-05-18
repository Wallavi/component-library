import React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";

interface DropdownProps extends SelectProps {
  options: {
    value: string;
    name: string;
  }[];
}

const CustomFormControl = styled(FormControl)`
  label.MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.middleblue.main};
  }
  label.Mui-focused {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &:hover:not(.Mui-error) {
    label {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

const CustomSelect = styled(Select)<SelectProps>`
  &.MuiOutlinedInput-root {
    &:hover:not(.Mui-error) {
      fieldset {
        border-color: ${({ theme }) => theme.palette.primary.main};
        border-width: 2px;
      }
    }
    fieldset {
      border-color: ${({ theme }) => theme.palette.middleblue.main};
    }
    &.Mui-focused {
      fieldset{
        border-color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export default function Dropdown({ options, label, ...props }: DropdownProps) {
  const items = options.map((e: HTMLInputElement) => (
    <MenuItem value={e.value}>{e.name}</MenuItem>
  ));

  return (
    <CustomFormControl fullWidth>
      <InputLabel id="dropdownLabel">{label}</InputLabel>
      <CustomSelect
        label={label}
        labelId="dropdownLabel"
        id="dropdown"
        {...props}
      >
        {items}
      </CustomSelect>
    </CustomFormControl>
  );
}
