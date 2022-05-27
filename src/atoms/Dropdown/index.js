import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { colors } from "../../colorPalette";

const CustomBox = styled(Box)`
  width: 100%;
  margin: 8px 0;

  label.MuiInputLabel-root {
    color: ${(props) => props.colors.secondaryMiddleBlue};
  }

  label.Mui-focused {
    color: ${(props) => props.colors.primaryBlue};
  }
`;

const CustomSelect = styled(Select)`
  .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => {
      if (props.focused) {
        return `${props.colors.primaryBlue} !important`;
      } else {
        return `${props.colors.secondaryMiddleBlue} !important`;
      }
    }};
  }
`;

export default function Dropdown(props) {
  const [isFocused, setFocusedState] = React.useState(false);

  const handleFocus = (value) => {
    setFocusedState(value);
  };

  const items = props.options.map((e) => (
    <MenuItem value={e.value}>{e.name}</MenuItem>
  ));

  return (
    <CustomBox sx={{ minWidth: 120 }} colors={colors}>
      <FormControl fullWidth>
        <InputLabel id="dropdownLabel">{props.label}</InputLabel>
        <CustomSelect
          name={props.name}
          colors={colors}
          labelId="dropdownLabel"
          id="dropdown"
          value={props.value}
          label={props.label}
          onChange={(e) => {
            props.handleChange(e);
            handleFocus(false);
          }}
          focused={isFocused}
          onFocus={() => {
            handleFocus(true);
          }}
          onBlur={() => {
            handleFocus(false);
          }}
        >
          {items}
        </CustomSelect>
      </FormControl>
    </CustomBox>
  );
}

Dropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  handleChange: PropTypes.func.isRequired,
};
