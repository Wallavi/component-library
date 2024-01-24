import React from "react";
import styles from "./styles";
import { SwitchProps } from "@mui/material";
import { useThemeContext } from "theme/wrapper";

interface CustomSwitchProps extends SwitchProps {
  handleChecked: (
    event: React.ChangeEvent<HTMLInputElement>,
    isChecked: boolean
  ) => void;
}

const Switch = ({ handleChecked, ...props }: CustomSwitchProps) => {
  const { theme } = useThemeContext();
  return (
    <styles.SwitchMUI
      {...props}
      checked={props.checked}
      disabled={props.disabled}
      onChange={handleChecked}
      theme={theme}
    />
  );
};

export default Switch;
