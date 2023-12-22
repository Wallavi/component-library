import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectProps } from "@mui/material/Select";

interface OptionProps {
  value: string;
  name: string;
}

interface DropdownProps extends SelectProps {
  options: Array<OptionProps>
}

const CustomFormControl = styled(FormControl)`
  label.MuiInputLabel-root {
    color: ${({ theme }) => theme.palette.middleblue.main};
  }

  label.Mui-focused {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

const CustomSelect = styled(Select)<SelectProps>`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: ${({ theme }) => theme.palette.middleblue.main};
    }
    &.Mui-focused {
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export default function DropdownFocus({
  autoFocus = false,
  options,
  label,
  ...props
}: DropdownProps) {
  const [isFocused, setIsFocused] = useState(autoFocus);

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const items = options.map((e: HTMLInputElement) => (
    <MenuItem value={e.value}>{e.name}</MenuItem>
  ));

  return (
    <CustomFormControl
      fullWidth
      focused={isFocused}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onBlur={handleBlur}
    >
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
